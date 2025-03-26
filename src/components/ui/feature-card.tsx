
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  className 
}: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group",
        className
      )}
    >
      <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-erepair-green to-erepair-blue flex items-center justify-center mb-4 text-white transform transition-transform duration-300 group-hover:rotate-3">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
