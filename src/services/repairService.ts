
import { useToast } from "@/hooks/use-toast";

// Types for our service
export type RepairRequest = {
  name: string;
  email: string;
  phone: string;
  address?: string;
  deviceType: string;
  issueDescription: string;
  preferredDate?: string;
};

export type DiagnosticResult = {
  deviceType: string;
  issueType: string;
  severity: 'low' | 'medium' | 'high';
  estimatedCost: {
    min: number;
    max: number;
  };
  estimatedTime: string;
  recommendation: string;
};

// Mock API service that could be replaced with real API calls
export const repairService = {
  // Submit a repair request
  submitRepairRequest: async (data: RepairRequest): Promise<{ success: boolean; referenceId?: string }> => {
    // Simulate API call
    console.log("Submitting repair request:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For a real implementation, this would call your backend API
    return {
      success: true,
      referenceId: `REP-${Math.floor(Math.random() * 10000)}`
    };
  },
  
  // Get AI diagnostic results
  getDiagnosticResults: async (userDescription: string): Promise<DiagnosticResult> => {
    // Simulate AI processing
    console.log("Processing diagnostic for:", userDescription);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simple keyword-based logic to simulate AI diagnosis
    // In a real implementation, this would call an AI service API
    const lowerCase = userDescription.toLowerCase();
    
    if (lowerCase.includes("screen") || lowerCase.includes("display") || lowerCase.includes("crack")) {
      return {
        deviceType: "smartphone",
        issueType: "screen damage",
        severity: "medium",
        estimatedCost: { min: 1200, max: 3500 },
        estimatedTime: "1-2 hours",
        recommendation: "Screen replacement recommended"
      };
    } else if (lowerCase.includes("battery") || lowerCase.includes("charge") || lowerCase.includes("power")) {
      return {
        deviceType: "smartphone",
        issueType: "battery issue",
        severity: "low",
        estimatedCost: { min: 800, max: 2200 },
        estimatedTime: "30-60 minutes",
        recommendation: "Battery replacement recommended"
      };
    } else if (lowerCase.includes("water") || lowerCase.includes("liquid")) {
      return {
        deviceType: "smartphone",
        issueType: "water damage",
        severity: "high",
        estimatedCost: { min: 1500, max: 4000 },
        estimatedTime: "24-48 hours",
        recommendation: "Immediate service required to prevent corrosion"
      };
    }
    
    // Default fallback
    return {
      deviceType: "electronic device",
      issueType: "unknown issue",
      severity: "medium",
      estimatedCost: { min: 500, max: 2500 },
      estimatedTime: "To be determined after inspection",
      recommendation: "Professional diagnosis recommended"
    };
  },
  
  // Get available time slots for a selected date
  getAvailableTimeSlots: async (date: string): Promise<string[]> => {
    // Simulate API call to get available slots
    console.log("Getting slots for date:", date);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Generate random available time slots
    const allSlots = [
      "09:00 AM", "10:00 AM", "11:00 AM", 
      "12:00 PM", "01:00 PM", "02:00 PM", 
      "03:00 PM", "04:00 PM", "05:00 PM"
    ];
    
    // Randomly remove some slots to simulate unavailability
    return allSlots.filter(() => Math.random() > 0.3);
  }
};

// Hook for using the repair service
export const useRepairService = () => {
  const { toast } = useToast();
  
  const submitRepair = async (data: RepairRequest) => {
    try {
      const result = await repairService.submitRepairRequest(data);
      if (result.success) {
        toast({
          title: "Repair request submitted successfully!",
          description: `Your reference ID is ${result.referenceId}. We'll contact you shortly.`,
        });
        return result;
      } else {
        throw new Error("Failed to submit repair request");
      }
    } catch (error) {
      toast({
        title: "Error submitting repair request",
        description: "Please try again or contact customer support.",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  return {
    submitRepair,
    getDiagnostic: repairService.getDiagnosticResults,
    getTimeSlots: repairService.getAvailableTimeSlots,
  };
};
