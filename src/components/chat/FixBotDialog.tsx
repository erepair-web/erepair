
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, Send, VolumeX, Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "bot";
  content: string;
  options?: {
    text: string;
    action: "repair" | "sell" | "more-info";
  }[];
};

interface FixBotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBookRepair?: () => void;
  onSellDevice?: () => void;
}

export function FixBotDialog({ open, onOpenChange, onBookRepair, onSellDevice }: FixBotDialogProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hi there! I'm FixBot. How can I help with your device today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // For voice recognition
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  
  // For speech synthesis
  const synthRef = useRef<SpeechSynthesis | null>(null);
  
  useEffect(() => {
    // Initialize speech recognition if available
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsRecording(false);
        // Auto-send message after voice recognition
        setTimeout(() => {
          handleSendMessage(transcript);
        }, 500);
      };
      
      recognitionRef.current.onerror = () => {
        setIsRecording(false);
        toast({
          title: "Voice recognition error",
          description: "We couldn't recognize your voice. Please try again or type your message.",
          variant: "destructive",
        });
      };
    }
    
    // Initialize speech synthesis if available
    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, [toast]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (messageText: string = input) => {
    if (!messageText.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      role: "user",
      content: messageText,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    
    // Process the message and generate a response
    setTimeout(() => {
      const response = processUserMessage(messageText);
      setMessages((prev) => [...prev, response]);
      
      // Speak the response if speech synthesis is enabled
      if (isSpeaking && synthRef.current && response.content) {
        const utterance = new SpeechSynthesisUtterance(response.content);
        synthRef.current.speak(utterance);
      }
    }, 1000);
  };

  const processUserMessage = (message: string): Message => {
    const lowerMessage = message.toLowerCase();
    
    // Check for screen-related issues
    if (lowerMessage.includes("screen") || lowerMessage.includes("display") || lowerMessage.includes("cracked")) {
      return {
        role: "bot",
        content: "I've assessed your device issue. Based on your description, you need a screen repair. This typically costs ₹1,200 - ₹3,500 depending on your device model.",
        options: [
          { text: "Book a repair", action: "repair" },
          { text: "Sell my device", action: "sell" },
          { text: "More information", action: "more-info" }
        ]
      };
    }
    
    // Check for battery-related issues
    else if (lowerMessage.includes("battery") || lowerMessage.includes("charge") || lowerMessage.includes("power")) {
      return {
        role: "bot",
        content: "I've diagnosed a potential battery issue. Battery replacements typically cost ₹800 - ₹2,200 depending on your device model.",
        options: [
          { text: "Book a repair", action: "repair" },
          { text: "Sell my device", action: "sell" },
          { text: "More information", action: "more-info" }
        ]
      };
    }
    
    // Check for water damage
    else if (lowerMessage.includes("water") || lowerMessage.includes("liquid") || lowerMessage.includes("dropped in")) {
      return {
        role: "bot",
        content: "Water damage requires immediate attention! Our water damage repair service costs ₹1,500 - ₹4,000 depending on severity and device model.",
        options: [
          { text: "Book urgent repair", action: "repair" },
          { text: "Sell my device", action: "sell" },
          { text: "More information", action: "more-info" }
        ]
      };
    }
    
    // Default response for other issues
    else {
      return {
        role: "bot",
        content: "Based on your description, I'll need more details to accurately diagnose your device issue. Would you like to book a repair appointment or speak with a technician?",
        options: [
          { text: "Book a repair", action: "repair" },
          { text: "Sell my device", action: "sell" },
          { text: "More information", action: "more-info" }
        ]
      };
    }
  };

  const handleOptionClick = (action: string) => {
    switch (action) {
      case "repair":
        if (onBookRepair) {
          onBookRepair();
        } else {
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content: "Great! Let's book a repair for your device. Please tell me what device you have and any other details about the issue.",
            },
          ]);
        }
        break;
      case "sell":
        if (onSellDevice) {
          onSellDevice();
        } else {
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content: "Sure! We can help you sell or recycle your device. Our trade-in program offers competitive rates. Would you like to know the estimated value of your device?",
            },
          ]);
        }
        break;
      case "more-info":
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content: "Our repair service includes a 6-month warranty, and we use only genuine or high-quality compatible parts. Our technicians are certified with years of experience. Would you like to proceed with a repair?",
            options: [
              { text: "Book a repair", action: "repair" },
              { text: "Sell my device", action: "sell" }
            ]
          },
        ]);
        break;
      default:
        break;
    }
  };

  const toggleVoiceRecognition = () => {
    if (!recognitionRef.current) {
      toast({
        title: "Voice recognition not supported",
        description: "Your browser doesn't support voice recognition. Please type your message instead.",
        variant: "destructive",
      });
      return;
    }
    
    if (isRecording) {
      recognitionRef.current.abort();
      setIsRecording(false);
    } else {
      setIsRecording(true);
      recognitionRef.current.start();
      
      toast({
        title: "Listening...",
        description: "Speak now to describe your device issue.",
      });
    }
  };

  const toggleSpeechSynthesis = () => {
    setIsSpeaking(!isSpeaking);
    
    toast({
      title: isSpeaking ? "Voice response disabled" : "Voice response enabled",
      description: isSpeaking ? "Text responses only" : "FixBot will now speak responses",
    });
    
    if (synthRef.current && isSpeaking) {
      synthRef.current.cancel();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <span className="text-erepair-green mr-2">FixBot</span> AI Assistant
            <div className="ml-auto flex items-center gap-2">
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={toggleSpeechSynthesis}
                title={isSpeaking ? "Disable voice responses" : "Enable voice responses"}
              >
                {isSpeaking ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="max-h-[400px] overflow-y-auto border rounded-md p-4 mb-4">
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.role === "bot"
                    ? "bg-muted p-3 rounded-lg rounded-tl-none max-w-[85%] self-start"
                    : "bg-erepair-green/10 p-3 rounded-lg rounded-tr-none max-w-[85%] self-end"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                
                {message.options && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {message.options.map((option, optionIndex) => (
                      <Button 
                        key={optionIndex} 
                        size="sm" 
                        variant={option.action === "repair" ? "default" : "outline"}
                        onClick={() => handleOptionClick(option.action)}
                      >
                        {option.text}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={toggleVoiceRecognition}
            className={isRecording ? "bg-red-100 text-red-500 border-red-200" : ""}
          >
            <Mic size={18} />
          </Button>
          <Input
            placeholder="Type your message..."
            className="flex-grow"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <Button onClick={() => handleSendMessage()}>
            <Send size={18} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
