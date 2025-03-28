
import { useState } from "react";
import { FixBotDialog } from "@/components/chat/FixBotDialog";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function FixBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
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
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-erepair-green hover:bg-erepair-green/90 shadow-lg flex items-center justify-center"
          aria-label="Chat with FixBot"
        >
          <Bot className="h-6 w-6" />
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
