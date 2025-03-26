
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-erepair-green/10 blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/3 right-1/4 h-72 w-72 rounded-full bg-erepair-blue/10 blur-3xl animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium text-erepair-dark-blue border border-erepair-green/20">
              Launching 2025 🚀
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              India's First <span className="text-gradient">AI-Powered</span> Electronics Repair
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Revolutionizing electronics repair with artificial intelligence, sustainable practices, and doorstep service. Fix, refurbish, or recycle - we make it simple.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/book-repair">Book a Repair</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-erepair-blue text-erepair-blue hover:bg-erepair-blue/5">
                <Link to="/diy-kits">Explore DIY Kits</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-erepair-green/30 animate-spin" style={{ animationDuration: "30s" }}></div>
            <div className="relative z-10 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Phone Repair" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDownCircle className="h-10 w-10 text-erepair-dark-blue/50" />
        </div>
      </div>
    </section>
  );
}
