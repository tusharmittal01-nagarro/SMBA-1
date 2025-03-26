import { Shield, LeafyGreen, Wind } from "lucide-react";
import { spaImages } from "@/assets/images";

export default function AboutSection() {
  // Ayurvedic principles
  const principles = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Holistic Approach",
      description: "Ayurveda treats the whole person—mind, body, and spirit—not just symptoms."
    },
    {
      icon: <LeafyGreen className="h-12 w-12 text-primary" />,
      title: "Natural Healing",
      description: "Our formulations use only pure, ethically sourced botanical ingredients."
    },
    {
      icon: <Wind className="h-12 w-12 text-primary" />,
      title: "Personal Balance",
      description: "Each product is designed to balance specific doshas for personalized wellness."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="section-title">Ancient Wisdom for Modern Wellness</h2>
            <p className="text-lg mb-6">
              At Balance Ayurveda, we merge time-tested Ayurvedic principles with contemporary scientific understanding to create effective, authentic wellness solutions.
            </p>
            <p className="text-lg mb-6">
              Founded by practitioners with over 30 years of combined experience, our mission is to make the transformative power of Ayurveda accessible to everyone seeking natural balance.
            </p>
            <p className="text-lg">
              Every formulation is meticulously crafted in small batches using sustainable harvesting practices and traditional processing methods to preserve the potency of each herb and ingredient.
            </p>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <img
              src={spaImages[0]}
              alt="Ayurvedic Wellness Center"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-2/3 h-48">
              <img
                src={spaImages[1]}
                alt="Ayurvedic Treatments"
                className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-background"
              />
            </div>
          </div>
        </div>

        {/* Ayurvedic Principles */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Ayurvedic Principles</h2>
            <p className="section-subtitle">
              We are guided by traditional Ayurvedic philosophy that has stood the test of time for over 5,000 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="ayurveda-card text-center">
                <div className="flex justify-center mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Mission</h2>
            <p className="text-xl mb-6">
              "To revitalize the ancient wisdom of Ayurveda for contemporary wellness needs, empowering individuals to achieve optimal health through natural balance."
            </p>
            <p className="text-lg text-primary-foreground/80">
              We are committed to sustainability, ethical sourcing, and preserving traditional Ayurvedic knowledge while embracing modern scientific advancements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
