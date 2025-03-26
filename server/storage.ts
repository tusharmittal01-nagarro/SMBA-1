import { 
  users, type User, type InsertUser,
  waitlistEntries, type WaitlistEntry, type InsertWaitlistEntry,
  testimonials, type Testimonial, type InsertTestimonial
} from "@shared/schema";

// Storage interface with all required CRUD methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Waitlist methods
  getWaitlistEntries(): Promise<WaitlistEntry[]>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;

  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlist: Map<number, WaitlistEntry>;
  private testimonialsList: Map<number, Testimonial>;
  
  private userIdCounter: number;
  private waitlistIdCounter: number;
  private testimonialIdCounter: number;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
    this.testimonialsList = new Map();
    
    this.userIdCounter = 1;
    this.waitlistIdCounter = 1;
    this.testimonialIdCounter = 1;

    // Initialize with some testimonials
    this.createTestimonial({
      name: "Sarah J.",
      avatar: "",
      rating: 5,
      comment: "The Ayurvedic treatments have completely transformed my wellness journey. I feel balanced and rejuvenated!"
    });
    this.createTestimonial({
      name: "Michael T.",
      avatar: "",
      rating: 5,
      comment: "These products have helped me maintain my dosha balance. My energy levels have never been better!"
    });
    this.createTestimonial({
      name: "Priya K.",
      avatar: "",
      rating: 5,
      comment: "As someone who has practiced Ayurveda for years, I can confidently say these are some of the finest formulations I've used."
    });
    this.createTestimonial({
      name: "David L.",
      avatar: "",
      rating: 4,
      comment: "The herbal supplements have significantly improved my digestion issues. I'm sleeping better too!"
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Waitlist methods
  async getWaitlistEntries(): Promise<WaitlistEntry[]> {
    return Array.from(this.waitlist.values());
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    return Array.from(this.waitlist.values()).find(
      (entry) => entry.email === email
    );
  }

  async createWaitlistEntry(insertEntry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    const id = this.waitlistIdCounter++;
    const createdAt = new Date();
    const entry: WaitlistEntry = { 
      ...insertEntry, 
      id, 
      createdAt 
    };
    this.waitlist.set(id, entry);
    return entry;
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonialsList.values());
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonialsList.get(id);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialIdCounter++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonialsList.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
