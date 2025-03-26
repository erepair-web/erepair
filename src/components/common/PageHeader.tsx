
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage,
  className,
}: PageHeaderProps) {
  return (
    <section 
      className={cn(
        "relative py-24 lg:py-32 overflow-hidden",
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={cn(
              "text-4xl md:text-5xl font-bold mb-4", 
              backgroundImage ? "text-white" : ""
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p 
              className={cn(
                "text-lg md:text-xl", 
                backgroundImage ? "text-white/90" : "text-muted-foreground"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
