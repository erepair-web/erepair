import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FixBotDialog } from "@/components/chat/FixBotDialog";
import { QuickRepairForm } from "@/components/repair/QuickRepairForm";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageSquare, Smartphone, Laptop, Tablet, Tv, Speaker, Clock, Check, CalendarDays, Wrench, Truck, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      deviceType: "",
      issueDescription: "",
      preferredDate: "",
      termsAccepted: false,
    },
  });

  const handleDeviceSelect = (device: string) => {
    setSelectedDevice(device);
    form.setValue("deviceType", device);
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data);
    toast({
      title: "Repair Booking Submitted",
      description: "We've received your repair request. Our team will contact you shortly!",
    });
    form.reset();
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

  const repairProcess = [
    {
      icon: MessageSquare,
      title: "Diagnose",
      description: "AI-powered diagnostics to identify the issue"
    },
    {
      icon: CalendarDays,
      title: "Schedule",
      description: "Book a convenient time slot for repair"
    },
    {
      icon: Truck,
      title: "Pickup",
      description: "Our technician will collect your device"
    },
    {
      icon: Wrench,
      title: "Repair",
      description: "Expert technicians fix your device"
    },
    {
      icon: Zap,
      title: "Test",
      description: "Rigorous quality testing"
    },
    {
      icon: Check,
      title: "Deliver",
      description: "Return your device, good as new"
    }
  ];

  const commonIssues = [
    { device: "Phone", issues: ["Screen Repair", "Battery Replacement", "Water Damage", "Charging Port"], prices: ["₹1,200", "₹800", "₹1,500", "₹600"] },
    { device: "Laptop", issues: ["Screen Repair", "Battery Replacement", "Keyboard Replacement", "Hard Drive Upgrade"], prices: ["₹3,500", "₹2,200", "₹1,800", "₹1,500"] },
    { device: "Tablet", issues: ["Screen Repair", "Battery Replacement", "Charging Port", "Button Replacement"], prices: ["₹2,200", "₹1,500", "₹800", "₹600"] },
  ];

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
                <Button className="btn-primary w-full" onClick={() => setIsChatOpen(true)}>
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
            
            <div className="glass-card rounded-xl p-8 animate-slide-in-bottom" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-6 text-center">Select Your Device Type</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Smartphone, name: "Phone" },
                  { icon: Laptop, name: "Laptop" },
                  { icon: Tablet, name: "Tablet" },
                  { icon: Tv, name: "TV" },
                  { icon: Speaker, name: "Audio" },
                  { icon: Clock, name: "Wearable" },
                ].map((device) => (
                  <button 
                    key={device.name}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                      selectedDevice === device.name 
                        ? "border-erepair-green bg-erepair-green/10" 
                        : "border-border bg-background/50 hover:bg-erepair-green/5 hover:border-erepair-green/30"
                    } transition-colors`}
                    onClick={() => handleDeviceSelect(device.name)}
                  >
                    <device.icon className="h-8 w-8 mb-2 text-erepair-dark-blue" />
                    <span className="text-sm font-medium">{device.name}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Why Choose eRepair?</h4>
                <ul className="space-y-3">
                  {[
                    "6-month warranty on all repairs",
                    "Transparent pricing with no hidden fees",
                    "Skilled technicians at your doorstep",
                    "Eco-friendly repair practices",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-erepair-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common Issues & Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commonIssues.map((deviceIssues) => (
              <div key={deviceIssues.device} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-erepair-dark-blue text-white p-4">
                  <h3 className="text-xl font-bold text-center">{deviceIssues.device}</h3>
                </div>
                <div className="p-6">
                  <ul className="divide-y">
                    {deviceIssues.issues.map((issue, index) => (
                      <li key={issue} className="py-3 flex justify-between items-center">
                        <span>{issue}</span>
                        <span className="font-semibold text-erepair-green">{deviceIssues.prices[index]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            *Prices may vary based on device model and complexity of the repair.
            Our technicians will provide a precise quote after diagnosis.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Repair Process</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We've streamlined our repair process to make it as convenient as possible for you.
            Here's how it works:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-erepair-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-erepair-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Step {index + 1}: {step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-erepair-light-green">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Book Your Repair</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fill out the form below to schedule a repair. Our team will contact you to confirm the details.
          </p>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 XXXXX XXXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Your complete address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="deviceType"
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="issueDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Describe the Issue</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Please provide details about the issue with your device" className="min-h-[100px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I accept the <a href="#" className="text-erepair-blue underline">terms and conditions</a>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full btn-primary">Book Repair</Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

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
