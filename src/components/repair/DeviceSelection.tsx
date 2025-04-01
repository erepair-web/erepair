
import { useState } from "react";
import { Smartphone, Laptop, Tablet, Tv, Speaker, Clock, Check } from "lucide-react";

interface DeviceSelectionProps {
  selectedDevice: string;
  onDeviceSelect: (device: string) => void;
}

export function DeviceSelection({ selectedDevice, onDeviceSelect }: DeviceSelectionProps) {
  const devices = [
    { icon: Smartphone, name: "Phone" },
    { icon: Laptop, name: "Laptop" },
    { icon: Tablet, name: "Tablet" },
    { icon: Tv, name: "TV" },
    { icon: Speaker, name: "Audio" },
    { icon: Clock, name: "Wearable" },
  ];

  return (
    <div className="glass-card rounded-xl p-8 animate-slide-in-bottom" style={{ animationDelay: "0.2s" }}>
      <h3 className="text-xl font-bold mb-6 text-center">Select Your Device Type</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {devices.map((device) => (
          <button 
            key={device.name}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
              selectedDevice === device.name 
                ? "border-erepair-green bg-erepair-green/10" 
                : "border-border bg-background/50 hover:bg-erepair-green/5 hover:border-erepair-green/30"
            } transition-colors`}
            onClick={() => onDeviceSelect(device.name)}
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
  );
}
