
import { MessageSquare, CalendarDays, Truck, Wrench, Zap, Check } from "lucide-react";

export function RepairProcessSection() {
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

  return (
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
  );
}

