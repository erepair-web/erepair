
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, Send, VolumeX, Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ChatInputAreaProps {
  input: string;
  setInput: (value: string) => void;
  handleSendMessage: (message?: string) => void;
  isRecording: boolean;
  setIsRecording: (value: boolean) => void;
  isSpeaking: boolean;
  setIsSpeaking: (value: boolean) => void;
  toggleVoiceRecognition: () => void;
  toggleSpeechSynthesis: () => void;
}

export function ChatInputArea({
  input,
  setInput,
  handleSendMessage,
  isRecording,
  isSpeaking,
  toggleVoiceRecognition,
  toggleSpeechSynthesis
}: ChatInputAreaProps) {
  return (
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
      <Button 
        size="icon" 
        variant="ghost" 
        onClick={toggleSpeechSynthesis}
        title={isSpeaking ? "Disable voice responses" : "Enable voice responses"}
      >
        {isSpeaking ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </Button>
    </div>
  );
}
