import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ProductSection from "@/components/ProductSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import WaitlistForm from "@/components/WaitlistForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Slider Section */}
        <HeroSlider />
        
        {/* Products Section */}
        <ProductSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Testimonials Section */}
        <TestimonialSection />
        
        {/* Waitlist Section */}
        <section id="waitlist" className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-title">Join Our Waitlist</h2>
                <p className="section-subtitle">
                  Be the first to experience our new Ayurvedic formulations. Sign up to receive early access and exclusive offers.
                </p>
              </div>
              
              <Card className="border border-border shadow-md">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Reserve Your Spot</CardTitle>
                </CardHeader>
                <CardContent>
                  <WaitlistForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
