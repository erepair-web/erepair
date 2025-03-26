
import { Recycle, Clock, Users, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";

export default function StatsSection() {
  return (
    <section className="section-container bg-erepair-light-green">
      <SectionHeading 
        title="Our Impact" 
        subtitle="Making a difference through sustainable repair practices and community engagement."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <StatCard 
          title="E-Waste Prevented"
          value={1250}
          suffix="kg"
          icon={Recycle}
        />
        <StatCard 
          title="Same-Day Repairs"
          value={85}
          suffix="%"
          icon={Clock}
        />
        <StatCard 
          title="Happy Customers"
          value={5000}
          suffix="+"
          icon={Users}
        />
        <StatCard 
          title="Business Partners"
          value={120}
          suffix="+"
          icon={Briefcase}
        />
      </div>
    </section>
  );
}
