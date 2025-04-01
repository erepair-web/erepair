
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { QuickRepairForm } from "@/components/repair/QuickRepairForm";

interface AIDiagnosticSectionProps {
  onStartChat: () => void;
  showQuickForm: boolean;
}

export function AIDiagnosticSection({ onStartChat, showQuickForm }: AIDiagnosticSectionProps) {
  return (
    <div className="animate-slide-in-bottom">
      <h2 className="text-3xl font-bold mb-6">AI-Powered Diagnostics</h2>
      <p className="text-muted-foreground mb-6">
        Our advanced AI can diagnose common device issues with remarkable accuracy.
        Simply chat with our AI assistant or upload photos of your device for a quick assessment.
      </p>
      
      <div className="glass-card rounded-xl p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="bg-erepair-green/10 rounded-full p-2 text-erepair-green mt-1">
            <MessageSquare size={20} />
          </div>
          <div>
            <h3 className="font-medium mb-2">AI Chatbot Diagnostics</h3>
            <p className="text-sm text-muted-foreground">
              Describe your device issues to our AI and get an instant preliminary diagnosis
              and repair estimate. Our FixBot supports multiple languages and voice input!
            </p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <Button className="btn-primary w-full" onClick={onStartChat}>
          Start AI Diagnostics
        </Button>
        <Button variant="outline" className="w-full">Schedule a Technician Visit</Button>
      </div>
      
      {showQuickForm && (
        <div id="quick-repair-form" className="mt-8">
          <QuickRepairForm />
        </div>
      )}
    </div>
  );
}
