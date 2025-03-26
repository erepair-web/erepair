
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative glass-card rounded-3xl overflow-hidden bg-gradient-to-r from-erepair-dark-blue to-erepair-blue p-10 md:p-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-erepair-green/20 blur-3xl"></div>
            <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-erepair-green/20 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Stop Throwing Away Fixable Devices?
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-90">
              Join the eRepair revolution and be part of a sustainable future where repair is the first option, not the last resort.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-erepair-green hover:bg-erepair-green/90">
                <Link to="/book-repair">Book Your First Repair</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/download-app">Download Our App</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
