
import { useState, useEffect } from "react";
import { FixBotDialog } from "@/components/chat/FixBotDialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export function FixBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [hasShownInitialGreeting, setHasShownInitialGreeting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Show greeting after a delay when user first visits the site
  useEffect(() => {
    const hasSeenGreeting = localStorage.getItem('hasSeenFixBotGreeting');
    
    if (!hasSeenGreeting && !hasShownInitialGreeting) {
      const timer = setTimeout(() => {
        setShowGreeting(true);
        setHasShownInitialGreeting(true);
        localStorage.setItem('hasSeenFixBotGreeting', 'true');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [hasShownInitialGreeting]);

  const handleBookRepair = () => {
    setIsOpen(false);
    toast({
      title: "Repair booking initiated",
      description: "Redirecting you to our booking page",
    });
    navigate("/book-repair");
  };

  const handleSellDevice = () => {
    setIsOpen(false);
    toast({
      title: "Trade-in process initiated",
      description: "Redirecting you to our recycling page",
    });
    navigate("/recycling");
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {showGreeting && (
          <div className="absolute bottom-24 right-0 bg-white p-3 rounded-lg shadow-lg text-sm mb-2 animate-fadeIn max-w-xs">
            <div className="relative">
              <p className="font-medium">Hi there! 👋</p>
              <p className="text-muted-foreground">Need help diagnosing device issues? Chat with our AI assistant!</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0"
                onClick={() => setShowGreeting(false)}
              >
                ×
              </Button>
              <div className="absolute -bottom-3 right-4 w-3 h-3 bg-white transform rotate-45"></div>
            </div>
          </div>
        )}
        <Button
          onClick={() => setIsOpen(true)}
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
      </div>
      
      <FixBotDialog 
        open={isOpen} 
        onOpenChange={setIsOpen} 
        onBookRepair={handleBookRepair}
        onSellDevice={handleSellDevice}
      />
    </>
  );
}
