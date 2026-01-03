import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Wall of Love" },
  { href: "#faq", label: "FAQ" },
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
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "top-0 py-2"
          : "top-4 py-0"
      }`}
    >
      <div className={`mx-auto px-4 transition-all duration-300 ${
        isScrolled ? "max-w-6xl" : "max-w-4xl"
      }`}>
        <div className={`flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${
          isScrolled
            ? "h-14 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-lg"
            : "h-14 bg-background/80 backdrop-blur-xl border border-border/50 rounded-full shadow-card"
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-lg tracking-tight">PropelKit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {isHomePage && navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/docs"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
            >
              Docs
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Button 
              onClick={scrollToPricing}
              size="sm"
              className="gradient-primary shadow-glow-sm text-primary-foreground font-medium"
            >
              Get PropelKit
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
          <div className="md:hidden mt-2 p-4 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-lg animate-scale-in">
            <div className="flex flex-col gap-1">
              {isHomePage && navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/docs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Docs
              </Link>
              <div className="pt-2 mt-2 border-t border-border flex flex-col gap-2">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToPricing();
                  }}
                  className="w-full gradient-primary shadow-glow text-primary-foreground font-medium"
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
