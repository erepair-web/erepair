
import { Button } from "@/components/ui/button";

interface FixBotGreetingProps {
  onClose: () => void;
}

export function FixBotGreeting({ onClose }: FixBotGreetingProps) {
  return (
    <div className="absolute bottom-24 right-0 bg-white p-3 rounded-lg shadow-lg text-sm mb-2 animate-fadeIn max-w-xs">
      <div className="relative">
        <p className="font-medium">Hi there! 👋</p>
        <p className="text-muted-foreground">Need help diagnosing device issues? Chat with our AI assistant!</p>
        <Button 
          variant="ghost" 
          size="sm" 
          className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0"
          onClick={onClose}
        >
          ×
        </Button>
        <div className="absolute -bottom-3 right-4 w-3 h-3 bg-white transform rotate-45"></div>
      </div>
    </div>
  );
}
