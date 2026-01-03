import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#pricing", label: "Pricing" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Wall of Love" },
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
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "top-0 py-0" : "top-0 py-0"
      }`}
    >
      <div className="mx-auto px-4">
        <div className={`flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${
          isScrolled
            ? "h-14 bg-background/95 backdrop-blur-xl border-b border-border"
            : "h-16 bg-transparent"
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <Rocket className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg tracking-tight">PropelKit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {isHomePage && navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Button 
              onClick={scrollToPricing}
              className="gradient-primary shadow-glow-sm text-primary-foreground font-medium"
            >
              Get PropelKit Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden p-4 bg-background/95 backdrop-blur-xl border-b border-border">
            <div className="flex flex-col gap-1">
              {isHomePage && navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Button 
                  onClick={scrollToPricing}
                  className="w-full gradient-primary shadow-glow text-primary-foreground font-medium"
                >
                  Get PropelKit Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
