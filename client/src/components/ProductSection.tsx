import { Leaf, Droplet, Sun, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { herbImages, treatmentImages } from "@/assets/images";

export default function ProductSection() {
  // Product data
  const products = [
    {
      title: "Vata Balance",
      description: "Calming herbs and oils that help ground and nourish restless energy.",
      image: herbImages[0],
      icon: <Leaf className="h-6 w-6 text-primary" />,
      link: "#waitlist"
    },
    {
      title: "Pitta Harmony",
      description: "Cooling formulations to soothe intense emotions and promote clarity.",
      image: herbImages[1],
      icon: <Droplet className="h-6 w-6 text-primary" />,
      link: "#waitlist"
    },
    {
      title: "Kapha Vitality",
      description: "Energizing blends that invigorate and stimulate natural metabolism.",
      image: herbImages[2],
      icon: <Sun className="h-6 w-6 text-primary" />,
      link: "#waitlist"
    },
    {
      title: "Tri-Dosha Wellness",
      description: "Universal balance for all constitution types to promote overall wellbeing.",
      image: herbImages[3],
      icon: <Heart className="h-6 w-6 text-primary" />,
      link: "#waitlist"
    }
  ];

  // Treatment data
  const treatments = [
    {
      title: "Abhyanga Massage",
      description: "Traditional Ayurvedic oil massage that nourishes tissues and promotes circulation.",
      image: treatmentImages[0]
    },
    {
      title: "Shirodhara Therapy",
      description: "Gentle pouring of warm oil on the forehead to calm the mind and nervous system.",
      image: treatmentImages[1]
    },
    {
      title: "Udvartana Treatment",
      description: "Herbal powder massage that exfoliates and reduces Kapha accumulation.",
      image: treatmentImages[2]
    },
    {
      title: "Nasya Cleansing",
      description: "Nasal administration of herbal oils to clear sinuses and improve breathing.",
      image: treatmentImages[3]
    }
  ];

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="section-title">Our Ayurvedic Collection</h2>
          <p className="section-subtitle">
            Discover our comprehensive line of Ayurvedic products formulated with traditional wisdom and modern science.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <div key={index} className="product-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="product-image transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {product.icon}
                  <h3 className="product-title ml-2">{product.title}</h3>
                </div>
                <p className="product-description">{product.description}</p>
                <a 
                  href={product.link} 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Join Waitlist
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Treatments Section */}
        <div className="mb-16 text-center">
          <h2 className="section-title">Traditional Treatments</h2>
          <p className="section-subtitle">
            Experience authentic Ayurvedic therapies that have been perfected over thousands of years to balance mind, body, and spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2">{treatment.title}</h3>
                  <p className="text-muted-foreground">{treatment.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <a href="#waitlist">Sign Up For Early Access</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
