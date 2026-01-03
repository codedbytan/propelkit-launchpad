import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#pricing", label: "Pricing" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Wall of love" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg text-white">PropelKit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {isHomePage && navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Leaderboard badge */}
            <div className="flex items-center gap-2 text-sm text-white/50">
              <span>Press</span>
              <span className="px-2 py-0.5 bg-white/10 border border-white/20 text-white text-xs font-medium">L</span>
              <span>to see the Leaderboards</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-2">
              {isHomePage && navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <Button 
                  onClick={scrollToPricing}
                  className="w-full bg-primary text-primary-foreground"
                >
                  Get PropelKit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
