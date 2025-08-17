import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const artworkSubmissions = pgTable("artwork_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  artist: text("artist").notNull(),
  imageUrl: text("image_url").notNull(),
  isApproved: boolean("is_approved").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertArtworkSubmissionSchema = createInsertSchema(artworkSubmissions).pick({
  title: true,
  artist: true,
  imageUrl: true,
}).extend({
  title: z.string().min(1, "Title is required").max(100, "Title must be under 100 characters"),
  artist: z.string().min(1, "Artist name is required").max(50, "Artist name must be under 50 characters"),
  imageUrl: z.string().url("Must be a valid URL"),
});

export type ArtworkSubmission = typeof artworkSubmissions.$inferSelect;
export type InsertArtworkSubmission = z.infer<typeof insertArtworkSubmissionSchema>;
