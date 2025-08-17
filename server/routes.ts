import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertArtworkSubmissionSchema } from "@shared/schema";
import { ObjectStorageService, ObjectNotFoundError } from "./objectStorage";
import { eq } from "drizzle-orm";
import { artworkSubmissions } from "@shared/schema";
import { db } from "./db";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Serve attached assets (for pre-loaded gallery images)
  app.get("/assets/:filename", (req, res) => {
    const filename = req.params.filename;
    res.sendFile(filename, { root: './attached_assets' }, (err) => {
      if (err && !res.headersSent) {
        res.status(404).send('Asset not found');
      }
    });
  });

  // Get approved artwork submissions only (for public viewing)
  app.get("/api/artworks", async (req, res) => {
    try {
      const artworks = await db
        .select()
        .from(artworkSubmissions)
        .where(eq(artworkSubmissions.isApproved, true))
        .orderBy(artworkSubmissions.createdAt);
      res.json(artworks);
    } catch (error) {
      console.error("Error fetching artworks:", error);
      res.status(500).json({ error: "Failed to fetch artworks" });
    }
  });

  // Submit new artwork (requires approval)
  app.post("/api/artworks", async (req, res) => {
    try {
      const validatedData = insertArtworkSubmissionSchema.parse(req.body);
      
      // Additional security validation
      if (!validatedData.imageUrl.includes('.private/uploads/')) {
        return res.status(400).json({ error: "Invalid image URL" });
      }
      
      // Content moderation validation
      const titleLower = validatedData.title.toLowerCase();
      const artistLower = validatedData.artist.toLowerCase();
      
      // Check for inappropriate content (no nudity)
      const inappropriateKeywords = ['nude', 'naked', 'sex', 'porn', 'xxx', 'nsfw'];
      const hasInappropriate = inappropriateKeywords.some(keyword => 
        titleLower.includes(keyword) || artistLower.includes(keyword)
      );

      if (hasInappropriate) {
        return res.status(400).json({ 
          error: 'Content violates community guidelines. No nudity or sexually explicit content allowed.' 
        });
      }
      
      // Sanitize input data
      const sanitizedData = {
        title: validatedData.title.trim().slice(0, 100),
        artist: validatedData.artist.trim().slice(0, 50),
        imageUrl: validatedData.imageUrl,
      };
      
      const artwork = await storage.createArtworkSubmission(sanitizedData);
      res.status(201).json({ 
        message: "Artwork submitted for review. Please ensure it relates to $BTC, crypto, or Blockbuster themes.", 
        id: artwork.id 
      });
    } catch (error) {
      console.error("Error creating artwork:", error);
      if (error instanceof Error && error.message.includes('validation')) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Invalid artwork data" });
      }
    }
  });

  // Get secure upload URL
  app.post("/api/objects/upload", async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const uploadURL = await objectStorageService.getObjectEntityUploadURL();
      res.json({ uploadURL });
    } catch (error) {
      console.error("Error getting upload URL:", error);
      res.status(500).json({ error: "Failed to get upload URL" });
    }
  });

  // Securely serve uploaded objects with validation
  app.get("/objects/:objectPath(*)", async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const objectFile = await objectStorageService.getObjectEntityFile(req.path);
      
      // Check if this object is linked to an approved artwork
      const normalizedPath = objectStorageService.normalizeObjectEntityPath(req.path);
      const artwork = await db
        .select()
        .from(artworkSubmissions)
        .where(eq(artworkSubmissions.imageUrl, normalizedPath))
        .limit(1);
      
      if (artwork.length === 0 || !artwork[0].isApproved) {
        return res.status(404).json({ error: "Image not found or not approved" });
      }
      
      // Set security headers
      res.set({
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Content-Security-Policy': "default-src 'none'",
      });
      
      await objectStorageService.downloadObject(objectFile, res);
    } catch (error) {
      console.error("Error serving object:", error);
      if (error instanceof ObjectNotFoundError) {
        return res.status(404).json({ error: "Object not found" });
      }
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Admin endpoint to approve artwork (you can call this manually for now)
  app.patch("/api/artworks/:id/approve", async (req, res) => {
    try {
      const { id } = req.params;
      await db
        .update(artworkSubmissions)
        .set({ isApproved: true })
        .where(eq(artworkSubmissions.id, id));
      res.json({ message: "Artwork approved" });
    } catch (error) {
      console.error("Error approving artwork:", error);
      res.status(500).json({ error: "Failed to approve artwork" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
