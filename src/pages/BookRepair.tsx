
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { MessageSquare, Smartphone, Laptop, Tablet, Tv, Speaker, Clock, Check } from "lucide-react";

const BookRepair = () => {
  return (
    <Layout>
      <PageHeader
        title="Book a Repair"
        subtitle="Fast, reliable repairs for all your electronic devices"
        backgroundImage="https://images.unsplash.com/photo-1597739239353-50270a473397?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-bottom">
              <h2 className="text-3xl font-bold mb-6">AI-Powered Diagnostics</h2>
              <p className="text-muted-foreground mb-6">
                Our advanced AI can diagnose common device issues with remarkable accuracy.
                Simply chat with our AI assistant or upload photos of your device for a quick assessment.
              </p>
              
              <div className="glass-card rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-erepair-green/10 rounded-full p-2 text-erepair-green mt-1">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">AI Chatbot Diagnostics</h3>
                    <p className="text-sm text-muted-foreground">
                      Describe your device issues to our AI and get an instant preliminary diagnosis
                      and repair estimate.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button className="btn-primary w-full">Start AI Diagnostics</Button>
                <Button variant="outline" className="w-full">Schedule a Technician Visit</Button>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8 animate-slide-in-bottom" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-6 text-center">Select Your Device Type</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Smartphone, name: "Phone" },
                  { icon: Laptop, name: "Laptop" },
                  { icon: Tablet, name: "Tablet" },
                  { icon: Tv, name: "TV" },
                  { icon: Speaker, name: "Audio" },
                  { icon: Clock, name: "Wearable" },
                ].map((device) => (
                  <button 
                    key={device.name}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-background/50 hover:bg-erepair-green/5 hover:border-erepair-green/30 transition-colors"
                  >
                    <device.icon className="h-8 w-8 mb-2 text-erepair-dark-blue" />
                    <span className="text-sm font-medium">{device.name}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Why Choose eRepair?</h4>
                <ul className="space-y-3">
                  {[
                    "6-month warranty on all repairs",
                    "Transparent pricing with no hidden fees",
                    "Skilled technicians at your doorstep",
                    "Eco-friendly repair practices",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-erepair-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookRepair;
