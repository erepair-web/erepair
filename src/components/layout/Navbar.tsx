
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const navLinks = [
  { name: "Home", path: "/" },
  { 
    name: "Services", 
    path: "#",
    dropdown: true,
    items: [
      { name: "Book a Repair", path: "/book-repair", description: "Schedule repairs for your electronic devices" },
      { name: "DIY Kits", path: "/diy-kits", description: "Fix it yourself with our repair kits" },
      { name: "Recycling", path: "/recycling", description: "Responsibly dispose of your e-waste" }
    ]
  },
  { name: "For Business", path: "/for-business" },
  { 
    name: "Company", 
    path: "#",
    dropdown: true,
    items: [
      { name: "About Us", path: "/about", description: "Learn more about eRepair" },
      { name: "Franchise", path: "/franchise", description: "Join our growing network" },
      { name: "Blog", path: "/blog", description: "News and insights" }
    ]
  },
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
        {/* Logo - updated size */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/lovable-uploads/d994f3ee-eee5-4604-9502-3352b02031a8.png" 
            alt="eRepair Logo" 
            className="h-14 transition-transform duration-300 group-hover:scale-105"
          />
          <p className="text-sm italic text-muted-foreground">Hum Sab Theek Kardenge!</p>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuTrigger className={cn(
                      "text-sm font-medium",
                      location.pathname === link.path && "active"
                    )}>
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {link.items?.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.name}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              
              return (
                <NavigationMenuItem key={link.name}>
                  <Link 
                    to={link.path}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-sm font-medium",
                      location.pathname === link.path && "bg-accent/50"
                    )}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button - visible on desktop */}
        <div className="hidden lg:block">
          <Link to="/download-app">
            <Button className="btn-primary">
              Download App
            </Button>
          </Link>
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
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.name} className="space-y-2">
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <span className="text-lg font-medium">{link.name}</span>
                    <ChevronDown size={16} />
                  </div>
                  <div className="ml-4 space-y-2">
                    {link.items?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={cn(
                          "block py-2 text-sm hover:text-erepair-green transition-colors",
                          location.pathname === item.path && "text-erepair-green"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-lg font-medium p-2 border-b border-border hover:text-erepair-green transition-colors",
                  location.pathname === link.path && "text-erepair-green"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <Link to="/download-app" className="mt-4">
            <Button className="btn-primary w-full">
              Download App
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
