
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  PhoneCall,
  Mail,
  MapPin,
  ExternalLink
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

          {/* Contact Info with Map Preview */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-erepair-blue pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <PhoneCall size={18} className="text-erepair-green mt-1 flex-shrink-0" />
                <span className="text-sm opacity-80">+91 8999895516</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-erepair-green mt-1 flex-shrink-0" />
                <span className="text-sm opacity-80">mail.erepair@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-erepair-green mt-1 flex-shrink-0" />
                <span className="text-sm opacity-80">
                  eRepair (formerly Electrotech Informatics)<br />
                  1154 Prime Arcade, Shop No-5B<br />
                  Ground Floor, Saifee Street<br />
                  Behind MG Road, Camp<br />
                  Pune - 411001
                </span>
              </li>
            </ul>
            <div className="mt-4 rounded-lg overflow-hidden relative group">
              <a 
                href="https://maps.app.goo.gl/KR61Qg6dJKHG1AXw8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative"
              >
                <img 
                  src="https://maps.googleapis.com/maps/api/staticmap?center=eRepair+Electrotech+Informatics+Camp+Pune&zoom=15&size=400x200&markers=color:green|label:E|eRepair+Electrotech+Informatics+Camp+Pune&key=AIzaSyD_RdUhMYOVxYivNjvfYDSo8gNZ-BI7wnA" 
                  alt="Map to eRepair location" 
                  className="w-full object-cover h-[120px] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
                  <span className="text-transparent group-hover:text-white transition-all duration-300 flex items-center">
                    <ExternalLink size={16} className="mr-1" /> View on Google Maps
                  </span>
                </div>
              </a>
            </div>
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
          <p>© {new Date().getFullYear()} eRepair (formerly Electrotech Informatics). All rights reserved.</p>
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
