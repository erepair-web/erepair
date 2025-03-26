
import { WalletCards, Cpu, Recycle, Smartphone, Shield, Truck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";

const features = [
  {
    title: "AI Diagnostics",
    description: "Our AI system can diagnose device issues with 95% accuracy through photos and symptom descriptions.",
    icon: Cpu
  },
  {
    title: "Doorstep Service",
    description: "Skilled technicians come to your doorstep, equipped with tools and parts for on-site repairs.",
    icon: Truck
  },
  {
    title: "Transparent Pricing",
    description: "Upfront cost estimates with no hidden fees. Pay only for the services you need.",
    icon: WalletCards
  },
  {
    title: "DIY Repair Kits",
    description: "Get professionally assembled repair kits with video guides for simple fixes.",
    icon: Smartphone
  },
  {
    title: "E-Waste Recycling",
    description: "Responsible recycling of old devices with tracking of your environmental impact.",
    icon: Recycle
  },
  {
    title: "Extended Warranty",
    description: "All repairs come with a 6-month warranty on parts and service.",
    icon: Shield
  }
];

export default function FeaturesSection() {
  return (
    <section className="section-container">
      <SectionHeading 
        title="How eRepair Works" 
        subtitle="We've revolutionized the electronics repair experience with AI technology, skilled technicians, and sustainable practices."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className="animate-slide-in-bottom"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <FeatureCard 
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
