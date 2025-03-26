
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  PhoneCall,
  Mail,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-erepair-dark-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="/lovable-uploads/d994f3ee-eee5-4604-9502-3352b02031a8.png" 
                alt="eRepair Logo" 
                className="h-12 transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            <p className="text-sm opacity-80">
              India's first AI-powered electronics repair platform, launching in 2025. 
              We're reimagining repair services with cutting-edge technology and a commitment to sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-erepair-green transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-erepair-green transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-erepair-green transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-erepair-green transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-erepair-green transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-erepair-blue pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/book-repair" className="text-sm opacity-80 hover:opacity-100 hover:text-erepair-green transition-colors">Book a Repair</Link>
              </li>
              <li>
                <Link to="/diy-kits" className="text-sm opacity-80 hover:opacity-100 hover:text-erepair-green transition-colors">DIY Repair Kits</Link>
              </li>
              <li>
                <Link to="/recycling" className="text-sm opacity-80 hover:opacity-100 hover:text-erepair-green transition-colors">E-Waste Recycling</Link>
              </li>
              <li>
                <Link to="/for-business" className="text-sm opacity-80 hover:opacity-100 hover:text-erepair-green transition-colors">For Businesses</Link>
              </li>
              <li>
                <Link to="/franchise" className="text-sm opacity-80 hover:opacity-100 hover:text-erepair-green transition-colors">Franchise Opportunities</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-erepair-green transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm opacity-80 hover:opacity-100 hover:text-erepair-green transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-erepair-blue pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <PhoneCall size={18} className="text-erepair-green mt-1 flex-shrink-0" />
                <span className="text-sm opacity-80">+91 1234 567 890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-erepair-green mt-1 flex-shrink-0" />
                <span className="text-sm opacity-80">contact@erepair.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-erepair-green mt-1 flex-shrink-0" />
                <span className="text-sm opacity-80">
                  eRepair Technologies Pvt. Ltd.<br />
                  123 Tech Park, Electronic City<br />
                  Bengaluru, Karnataka 560100
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-erepair-blue pb-2">Newsletter</h3>
            <p className="text-sm opacity-80 mb-4">Subscribe to our newsletter for updates on new services, DIY guides, and sustainability tips.</p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 placeholder:text-white/50 text-white"
              />
              <Button className="w-full bg-erepair-green hover:bg-erepair-green/90">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} eRepair Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-2">
            <Link to="/privacy" className="hover:text-erepair-green transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-erepair-green transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-erepair-green transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
