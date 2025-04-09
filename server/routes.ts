import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, waitlistValidationSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';

// Workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

  // Serve Angular standalone app from /angular route
  const angularDistPath = path.join(__dirname, '../angular-standalone/dist/balance-ayurveda');
  const angularSrcPath = path.join(__dirname, '../angular-standalone/src');
  
  // Try to serve from dist folder first (built app), then fallback to src folder
  app.get('/angular', (_req: Request, res: Response) => {
    // Check if dist folder exists
    try {
      if (fs.existsSync(path.join(angularDistPath, 'index.html'))) {
        res.sendFile(path.join(angularDistPath, 'index.html'));
      } else {
        res.sendFile(path.join(angularSrcPath, 'index.html'));
      }
    } catch (error) {
      // Fallback to src folder
      res.sendFile(path.join(angularSrcPath, 'index.html'));
    }
  });
  
  // Handle Angular assets and other files
  app.get('/angular/*', (req: Request, res: Response) => {
    const requestPath = req.path.replace('/angular/', '');
    
    // Try to serve from dist folder first
    try {
      const distFilePath = path.join(angularDistPath, requestPath);
      if (fs.existsSync(distFilePath)) {
        return res.sendFile(distFilePath);
      }
      
      // If not found in dist, try src folder
      const srcFilePath = path.join(angularSrcPath, requestPath);
      res.sendFile(srcFilePath, (err) => {
        if (err) {
          // For Angular routing, serve index.html for any path that doesn't match a file
          if (fs.existsSync(path.join(angularDistPath, 'index.html'))) {
            res.sendFile(path.join(angularDistPath, 'index.html'));
          } else {
            res.sendFile(path.join(angularSrcPath, 'index.html'));
          }
        }
      });
    } catch (error) {
      // Fallback to serving index.html for Angular routing
      if (fs.existsSync(path.join(angularDistPath, 'index.html'))) {
        res.sendFile(path.join(angularDistPath, 'index.html'));
      } else {
        res.sendFile(path.join(angularSrcPath, 'index.html'));
      }
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
