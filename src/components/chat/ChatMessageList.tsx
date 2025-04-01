
import React, { useRef, useEffect } from "react";
import { Message, ChatMessage } from "./ChatMessage";

interface ChatMessageListProps {
  messages: Message[];
  onOptionClick: (action: string) => void;
}

export function ChatMessageList({ messages, onOptionClick }: ChatMessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="max-h-[400px] overflow-y-auto border rounded-md p-4 mb-4">
      <div className="flex flex-col gap-4">
        {messages.map((message, index) => (
          <ChatMessage 
            key={index} 
            message={message} 
            onOptionClick={onOptionClick} 
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
