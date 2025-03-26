
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, WrenchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Book a Repair", path: "/book-repair" },
  { name: "DIY Kits", path: "/diy-kits" },
  { name: "Recycling", path: "/recycling" },
  { name: "For Business", path: "/for-business" },
  { name: "Franchise", path: "/franchise" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300", 
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-erepair-green to-erepair-blue flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
            <WrenchIcon className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">eRepair</h1>
            <p className="text-xs italic text-muted-foreground">Hum Sab Theek Kardenge!</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "nav-link transition-colors text-sm font-medium",
                location.pathname === link.path && "active"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button - visible on desktop */}
        <div className="hidden lg:block">
          <Button className="btn-primary">
            Download App
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden rounded-md p-2 text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background pt-20 transition-transform duration-300 ease-in-out lg:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-lg font-medium p-2 border-b border-border hover:text-erepair-green transition-colors",
                location.pathname === link.path && "text-erepair-green"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="btn-primary w-full mt-6">
            Download App
          </Button>
        </nav>
      </div>
    </header>
  );
}
