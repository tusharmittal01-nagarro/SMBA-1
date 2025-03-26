import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

// Waitlist form schema
const waitlistSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export default function WaitlistForm() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  // Initialize form
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission using mutation
  const { mutate, isPending } = useMutation({
    mutationFn: async (values: WaitlistFormValues) => {
      const res = await apiRequest("POST", "/api/waitlist", values);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      setSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Form submission handler
  const onSubmit = (values: WaitlistFormValues) => {
    mutate(values);
  };

  // If form is successfully submitted, show the success message
  if (submitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-semibold text-primary mb-4">Thank You for Joining Our Waitlist!</h3>
        <p className="text-lg mb-4">
          We're thrilled to have you join us on this journey to wellness. You'll be among the first to know when our new products launch.
        </p>
        <p>We'll be in touch soon with exclusive updates and offers.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us what products you're interested in or any specific wellness concerns..."
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" size="lg" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
            </>
          ) : (
            "Join the Waitlist"
          )}
        </Button>
      </form>
    </Form>
  );
}
