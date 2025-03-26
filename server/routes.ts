import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, waitlistValidationSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix
  
  // Get testimonials
  app.get("/api/testimonials", async (_req: Request, res: Response) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Submit waitlist signup
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = waitlistValidationSchema.parse(req.body);
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistEntryByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(409).json({ 
          message: "Email already registered on the waitlist" 
        });
      }
      
      // Create waitlist entry
      const waitlistEntry = await storage.createWaitlistEntry(validatedData);
      
      // Return success with the created entry
      res.status(201).json({ 
        message: "Successfully added to the waitlist!",
        entry: waitlistEntry 
      });
    } catch (error) {
      console.error("Failed to add to waitlist:", error);
      
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation failed",
          errors: validationError.details
        });
      }
      
      // Handle other errors
      res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
