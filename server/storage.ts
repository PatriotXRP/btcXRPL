import {
  artworkSubmissions,
  type ArtworkSubmission,
  type InsertArtworkSubmission,
} from "@shared/schema";
import { db } from "./db";
import { desc } from "drizzle-orm";

export interface IStorage {
  // Artwork submissions
  getAllArtworkSubmissions(): Promise<ArtworkSubmission[]>;
  createArtworkSubmission(submission: InsertArtworkSubmission): Promise<ArtworkSubmission>;
}

export class DatabaseStorage implements IStorage {
  async getAllArtworkSubmissions(): Promise<ArtworkSubmission[]> {
    return await db.select().from(artworkSubmissions).orderBy(desc(artworkSubmissions.createdAt));
  }

  async createArtworkSubmission(insertSubmission: InsertArtworkSubmission): Promise<ArtworkSubmission> {
    const [submission] = await db
      .insert(artworkSubmissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }
}

export const storage = new DatabaseStorage();
