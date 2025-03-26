
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  author: string;
  role?: string;
  avatar?: string;
  className?: string;
}

export function TestimonialCard({
  content,
  author,
  role,
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 flex flex-col transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-400">★</span>
        ))}
      </div>
      <blockquote className="mb-4 italic text-foreground/90 text-sm md:text-base">
        "{content}"
      </blockquote>
      <div className="mt-auto flex items-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={author} 
            className="h-10 w-10 rounded-full mr-3 object-cover"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-erepair-green to-erepair-blue mr-3 flex items-center justify-center text-white font-bold">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium">{author}</p>
          {role && <p className="text-xs text-muted-foreground">{role}</p>}
        </div>
      </div>
    </div>
  );
}
