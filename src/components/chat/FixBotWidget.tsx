
import { useState, useEffect } from "react";
import { FixBotDialog } from "@/components/chat/FixBotDialog";
import { FixBotButton } from "@/components/chat/FixBotButton";
import { FixBotGreeting } from "@/components/chat/FixBotGreeting";
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

  const handleCloseGreeting = () => {
    setShowGreeting(false);
  };

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {showGreeting && <FixBotGreeting onClose={handleCloseGreeting} />}
        <FixBotButton onClick={handleOpenDialog} />
      </div>
      
      <FixBotDialog 
        open={isOpen} 
        onOpenChange={setIsOpen} 
        onBookRepair={handleBookRepair}
        onSellDevice={handleSellDevice}
      />
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        `}
      </style>
    </>
  );
}
