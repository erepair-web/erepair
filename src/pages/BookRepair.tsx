
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { FixBotDialog } from "@/components/chat/FixBotDialog";
import { QuickRepairForm } from "@/components/repair/QuickRepairForm";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { DeviceSelection } from "@/components/repair/DeviceSelection";
import { AIDiagnosticSection } from "@/components/repair/AIDiagnosticSection";
import { RepairProcessSection } from "@/components/repair/RepairProcessSection";
import { PricingSection } from "@/components/repair/PricingSection";
import { RepairBookingForm } from "@/components/repair/RepairBookingForm";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().min(10, { message: "Please provide your complete address." }),
  deviceType: z.string().min(1, { message: "Please select a device type." }),
  issueDescription: z.string().min(10, { message: "Please describe the issue in detail." }),
  preferredDate: z.string().min(1, { message: "Please select a preferred date." }),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

const BookRepair = () => {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showQuickForm, setShowQuickForm] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleDeviceSelect = (device: string) => {
    setSelectedDevice(device);
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data);
    toast({
      title: "Repair Booking Submitted",
      description: "We've received your repair request. Our team will contact you shortly!",
    });
    setSelectedDevice("");
  };

  const handleBookFromChat = () => {
    setIsChatOpen(false);
    setShowQuickForm(true);
    
    setTimeout(() => {
      document.getElementById("quick-repair-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSellDeviceFromChat = () => {
    setIsChatOpen(false);
    navigate("/recycling#trade-in");
  };

  return (
    <Layout>
      <PageHeader
        title="Book a Repair"
        subtitle="Fast, reliable repairs for all your electronic devices"
        backgroundImage="https://images.unsplash.com/photo-1597739239353-50270a473397?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AIDiagnosticSection
              onStartChat={() => setIsChatOpen(true)}
              showQuickForm={showQuickForm}
            />
            
            <DeviceSelection
              selectedDevice={selectedDevice}
              onDeviceSelect={handleDeviceSelect}
            />
          </div>
        </div>
      </section>

      <PricingSection />
      <RepairProcessSection />
      
      <RepairBookingForm 
        onSubmit={onSubmit} 
        selectedDevice={selectedDevice} 
      />

      <FixBotDialog 
        open={isChatOpen} 
        onOpenChange={setIsChatOpen}
        onBookRepair={handleBookFromChat}
        onSellDevice={handleSellDeviceFromChat}
      />
    </Layout>
  );
};

export default BookRepair;
