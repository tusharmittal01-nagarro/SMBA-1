import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Waitlist schema for storing signups
export const waitlistEntries = pgTable("waitlist_entries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertWaitlistSchema = createInsertSchema(waitlistEntries).pick({
  name: true,
  email: true,
  phone: true,
  message: true,
});

export const waitlistValidationSchema = insertWaitlistSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
});

export type InsertWaitlistEntry = z.infer<typeof insertWaitlistSchema>;
export type WaitlistEntry = typeof waitlistEntries.$inferSelect;

// Testimonial schema for displaying customer reviews
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  avatar: text("avatar"),
  rating: integer("rating").notNull(),
  comment: text("comment").notNull(),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).pick({
  name: true,
  avatar: true,
  rating: true,
  comment: true,
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
