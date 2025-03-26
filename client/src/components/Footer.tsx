import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { logoSvg } from "@/assets/images";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="h-10 w-32 mb-4 text-white" dangerouslySetInnerHTML={{ __html: logoSvg }} />
            <p className="text-primary-foreground/80 mb-6">
              Holistic wellness through authentic Ayurvedic formulations. Restoring balance naturally.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-white/90 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-white/90 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-white/90 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-primary-foreground/80 hover:text-white transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#products">
                  <a className="text-primary-foreground/80 hover:text-white transition-colors">
                    Products
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a className="text-primary-foreground/80 hover:text-white transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#testimonials">
                  <a className="text-primary-foreground/80 hover:text-white transition-colors">
                    Testimonials
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#waitlist">
                  <a className="text-primary-foreground/80 hover:text-white transition-colors">
                    Join Waitlist
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Ayurvedic Supplements
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Herbal Teas
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Natural Skincare
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Wellness Consultations
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Personalized Dosha Kits
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  hello@balanceayurveda.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Wellness Street, Harmony Valley, CA 94123
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Balance Ayurveda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
