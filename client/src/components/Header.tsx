import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logoSvg } from "@/assets/images";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm py-3 shadow-sm" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center">
              <div className="h-10 w-32" dangerouslySetInnerHTML={{ __html: logoSvg }} />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/#products">
              <a className="nav-link">Products</a>
            </Link>
            <Link href="/#about">
              <a className="nav-link">About</a>
            </Link>
            <Link href="/#testimonials">
              <a className="nav-link">Testimonials</a>
            </Link>
            <Link href="/#waitlist">
              <Button className="ml-2">Join Waitlist</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`mobile-nav ${
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col">
          <Link href="/">
            <a className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
          </Link>
          <Link href="/#products">
            <a className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Products
            </a>
          </Link>
          <Link href="/#about">
            <a className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
          </Link>
          <Link href="/#testimonials">
            <a className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </a>
          </Link>
          <Link href="/#waitlist">
            <a className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Join Waitlist
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
