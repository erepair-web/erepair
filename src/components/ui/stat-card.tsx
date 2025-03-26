
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface StatCardProps {
  title: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
  className?: string;
  duration?: number;
}

export function StatCard({
  title,
  value,
  suffix = "",
  icon: Icon,
  className,
  duration = 2000,
}: StatCardProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const interval = 20;
    const steps = duration / interval;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current > value) {
        setCurrentValue(value);
        clearInterval(timer);
      } else {
        setCurrentValue(Math.floor(current));
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-erepair-green to-erepair-blue flex items-center justify-center text-white mr-4">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">
            {currentValue.toLocaleString()}
            {suffix}
          </h3>
          <p className="text-muted-foreground text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
}
