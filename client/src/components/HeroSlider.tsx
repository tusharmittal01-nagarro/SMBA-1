import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/assets/images";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slide content data
  const slides = [
    {
      image: heroImages[0],
      title: "Balance for Body & Mind",
      subtitle: "Experience the ancient wisdom of Ayurveda with our modern, scientifically formulated products.",
      buttonText: "Join Waitlist",
      buttonLink: "#waitlist"
    },
    {
      image: heroImages[1],
      title: "Natural Healing Solutions",
      subtitle: "Our botanically-rich, ethically sourced formulations support holistic wellness for your unique needs.",
      buttonText: "Discover More",
      buttonLink: "#products"
    },
    {
      image: heroImages[2],
      title: "Your Ayurvedic Journey",
      subtitle: "Find your perfect balance with personalized wellness solutions based on your dosha type.",
      buttonText: "Learn More",
      buttonLink: "#about"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  // Navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative overflow-hidden">
      {/* Slides */}
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <Button size="lg" className="mt-8" asChild>
                <a href={slide.buttonLink}>{slide.buttonText}</a>
              </Button>
            </div>
          </div>
        ))}
        
        {/* Make the current slide visible without absolute positioning for proper height */}
        <div 
          className="hero-slide invisible"
          style={{ backgroundImage: `url(${slides[0].image})` }}
        ></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ArrowLeft size={24} />
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ArrowRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-6" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
