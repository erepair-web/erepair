
import { useState } from "react";
import { FixBotDialog } from "@/components/chat/FixBotDialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function FixBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const navigate = useNavigate();

  const handleBookRepair = () => {
    setIsOpen(false);
    navigate("/book-repair");
  };

  const handleSellDevice = () => {
    setIsOpen(false);
    navigate("/recycling#trade-in");
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {showGreeting && (
          <div className="absolute bottom-24 right-0 bg-white p-3 rounded-lg shadow-lg text-sm mb-2 animate-fadeIn">
            <div className="relative">
              <p className="font-medium">Hi there! 👋</p>
              <p className="text-muted-foreground">Need help with your device?</p>
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
          className="w-16 h-16 rounded-full bg-white hover:bg-gray-100 shadow-lg flex items-center justify-center p-0 border border-gray-200"
          aria-label="Chat with FixBot"
        >
          <img 
            src="/lovable-uploads/e19ac999-fdcf-467c-a20d-759b96778474.png" 
            alt="FixBot" 
            className="w-14 h-14 object-contain"
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
