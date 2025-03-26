import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Testimonial data type
type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
};

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([]);
  
  // Fetch testimonials from the API
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  // Calculate how many testimonials to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let visibleCount = 1;
      
      if (width >= 1024) {
        visibleCount = 3;
      } else if (width >= 640) {
        visibleCount = 2;
      }
      
      if (testimonials && testimonials.length > 0) {
        // Get a slice of visible testimonials starting from activeIndex
        const visibleItems = [];
        for (let i = 0; i < visibleCount; i++) {
          const index = (activeIndex + i) % testimonials.length;
          visibleItems.push(testimonials[index]);
        }
        setVisibleTestimonials(visibleItems);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, testimonials]);

  const goToPrev = () => {
    if (testimonials && testimonials.length > 0) {
      setActiveIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (testimonials && testimonials.length > 0) {
      setActiveIndex((prevIndex) => 
        (prevIndex + 1) % testimonials.length
      );
    }
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
      />
    ));
  };

  // Loading state
  if (isLoading) {
    return (
      <section id="testimonials" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  // Error state
  if (error || !testimonials) {
    return (
      <section id="testimonials" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle text-red-500">
            {error ? "Error loading testimonials." : "No testimonials available."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Hear from people who have experienced the transformative power of our Ayurvedic products.
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <div className="flex mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons (only show if there are more testimonials than visible) */}
          {testimonials.length > visibleTestimonials.length && (
            <div className="flex justify-center mt-8 space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="rounded-full"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
