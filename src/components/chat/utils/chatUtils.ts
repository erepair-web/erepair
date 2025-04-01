
import { Message } from "../ChatMessage";

export const processUserMessage = (message: string): Message => {
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
