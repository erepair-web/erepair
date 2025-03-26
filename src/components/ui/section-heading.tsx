
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "space-y-2 mb-10", 
        centered && "text-center", 
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
