
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, Phone, Battery, Monitor } from "lucide-react";

const kitCategories = [
  "Phone Screens", "Batteries", "Laptop Parts", "Tablet Repairs", "Audio Devices"
];

const featuredKits = [
  {
    id: 1,
    name: "iPhone 13 Screen Replacement Kit",
    price: 3999,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115929?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Phone
  },
  {
    id: 2,
    name: "MacBook Pro Battery Replacement Kit",
    price: 4499,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Battery
  },
  {
    id: 3,
    name: "Dell Monitor Power Supply Repair Kit",
    price: 1999,
    image: "https://images.unsplash.com/photo-1563770660941-10a2b3961f72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Monitor
  },
];

const DIYKits = () => {
  return (
    <Layout>
      <PageHeader
        title="DIY Repair Kits"
        subtitle="Everything you need to fix your devices at home"
        backgroundImage="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 mb-8">
              <div className="flex justify-center gap-4 flex-wrap">
                <Button variant="ghost" className="bg-background">All Kits</Button>
                {kitCategories.map((category) => (
                  <Button key={category} variant="ghost">{category}</Button>
                ))}
              </div>
            </div>
            
            {featuredKits.map((kit) => (
              <div 
                key={kit.id} 
                className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl animate-scale-up"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={kit.image} 
                    alt={kit.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold">{kit.name}</h3>
                      <p className="text-white/80">Includes all tools & parts</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-erepair-green/10 flex items-center justify-center text-erepair-green">
                        <kit.icon size={18} />
                      </div>
                      <span className="text-sm font-medium">Complete Kit</span>
                    </div>
                    <p className="text-xl font-bold">₹{kit.price}</p>
                  </div>
                  
                  <div className="flex items-center justify-between gap-4">
                    <Button variant="outline" className="flex-1">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button className="flex-1 btn-primary">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">How Our DIY Kits Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-10">
              {[
                {
                  title: "Select Your Kit",
                  description: "Choose the repair kit specific to your device model and issue."
                },
                {
                  title: "Follow AR Guide",
                  description: "Use our AR app to get step-by-step visual instructions."
                },
                {
                  title: "Fix With Confidence",
                  description: "Complete the repair with all the right tools and parts."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-erepair-green text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DIYKits;
