
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { ChatMessageList } from "./ChatMessageList";
import { ChatInputArea } from "./ChatInputArea";
import { Message } from "./ChatMessage";
import { processUserMessage } from "./utils/chatUtils";

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
          </DialogTitle>
        </DialogHeader>
        
        <ChatMessageList
          messages={messages}
          onOptionClick={handleOptionClick}
        />
        
        <ChatInputArea
          input={input}
          setInput={setInput}
          handleSendMessage={handleSendMessage}
          isRecording={isRecording}
          setIsRecording={setIsRecording}
          isSpeaking={isSpeaking}
          setIsSpeaking={setIsSpeaking}
          toggleVoiceRecognition={toggleVoiceRecognition}
          toggleSpeechSynthesis={toggleSpeechSynthesis}
        />
      </DialogContent>
    </Dialog>
  );
}
