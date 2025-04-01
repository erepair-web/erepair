
import React from "react";
import { Button } from "@/components/ui/button";

export type MessageOption = {
  text: string;
  action: "repair" | "sell" | "more-info";
};

export type Message = {
  role: "user" | "bot";
  content: string;
  options?: MessageOption[];
};

interface ChatMessageProps {
  message: Message;
  onOptionClick: (action: string) => void;
}

export function ChatMessage({ message, onOptionClick }: ChatMessageProps) {
  return (
    <div
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
              onClick={() => onOptionClick(option.action)}
            >
              {option.text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
