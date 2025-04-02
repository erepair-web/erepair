
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall, MessageSquare, MapPin } from "lucide-react";

export function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Show widget after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/918999895516`, '_blank');
  };

  const openCall = () => {
    window.open(`tel:+918999895516`, '_blank');
  };

  const openMaps = () => {
    window.open(`https://g.co/kgs/bgMHfDh`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-fadeIn flex flex-col gap-2 items-start">
      {isExpanded && (
        <div className="bg-white rounded-lg shadow-lg p-3 animate-fadeIn mb-2">
          <div className="flex flex-col space-y-2">
            <h3 className="font-medium text-sm">eRepair – Electronics & Appliance Repair</h3>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin size={12} /> Pune, Maharashtra
            </div>
            <div className="flex space-x-2 mt-2">
              <Button 
                onClick={openCall} 
                size="sm" 
                variant="outline" 
                className="flex items-center gap-1 text-xs h-8 px-2"
              >
                <PhoneCall size={14} />
                Call
              </Button>
              <Button 
                onClick={openMaps} 
                size="sm" 
                variant="outline" 
                className="flex items-center gap-1 text-xs h-8 px-2"
              >
                <MapPin size={14} />
                Directions
              </Button>
              <Button 
                onClick={openWhatsApp} 
                size="sm" 
                className="flex items-center gap-1 text-xs h-8 px-2 bg-[#25D366] hover:bg-[#128C7E]"
              >
                <MessageSquare size={14} />
                Chat
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <Button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg flex items-center justify-center p-0 border-none relative overflow-hidden group"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
        
        <div className="absolute opacity-0 bg-white text-black font-medium px-3 py-1 rounded-lg -top-10 left-1/2 transform -translate-x-1/2 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm pointer-events-none">
          {isExpanded ? "Close" : "Contact Us"}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
        </div>
      </Button>
    </div>
  );
}
