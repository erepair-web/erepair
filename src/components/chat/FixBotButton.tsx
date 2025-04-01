
import { Button } from "@/components/ui/button";

interface FixBotButtonProps {
  onClick: () => void;
}

export function FixBotButton({ onClick }: FixBotButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="w-16 h-16 rounded-full bg-white hover:bg-gray-100 shadow-lg flex items-center justify-center p-0 border border-gray-200 relative overflow-hidden group"
      aria-label="Chat with FixBot"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-erepair-green/20 to-erepair-blue/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <img 
        src="/lovable-uploads/e19ac999-fdcf-467c-a20d-759b96778474.png" 
        alt="FixBot" 
        className="w-14 h-14 object-contain transition-transform group-hover:scale-110"
      />
    </Button>
  );
}
