
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import { Badge } from "@/components/ui/badge";
import { Share2, MapPin, Award, BarChart3, Recycle, ChevronRight } from "lucide-react";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

// Mock data for the eco-points chart
const ecoPointsData = [
  { month: "Jan", points: 150 },
  { month: "Feb", points: 300 },
  { month: "Mar", points: 450 },
  { month: "Apr", points: 600 },
  { month: "May", points: 900 },
  { month: "Jun", points: 1200 },
  { month: "Jul", points: 1450 },
  { month: "Aug", points: 1700 },
  { month: "Sep", points: 1900 },
  { month: "Oct", points: 2150 },
  { month: "Nov", points: 2350 },
  { month: "Dec", points: 0 },
];

// Chart configuration
const chartConfig = {
  points: {
    label: "Eco-Points",
    theme: {
      light: "#2ECC71",
      dark: "#2ECC71",
    },
  },
};

export default function Recycling() {
  const [showShareToast, setShowShareToast] = useState(false);

  const handleShare = () => {
    // In a real app, this would open native sharing or social media sharing
    console.log("Sharing recycling achievements");
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-erepair-light-green py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Recycle with <span className="text-gradient">eRepair</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Reduce e-waste, earn eco-points, and make a difference! Join our sustainable movement to create a cleaner future for India.
              </p>
              <Button className="btn-primary flex items-center gap-2" size="lg">
                <MapPin className="h-5 w-5" />
                Find Nearest Drop-Off
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1974&auto=format&fit=crop"
                alt="Pile of Recycled Electronics"
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="text-white p-4 text-sm">
                  Help us prevent electronic waste from ending up in landfills
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Tracker Section */}
      <section className="section-container">
        <SectionHeading
          title="Your Recycling Impact"
          subtitle="Track your contributions to a cleaner environment"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <StatCard
            title="E-Waste Recycled"
            value={3}
            suffix="kg"
            icon={Recycle}
            className="hover:border-erepair-green/50"
          />
          <StatCard
            title="CO₂ Emissions Saved"
            value={5}
            suffix="kg"
            icon={BarChart3}
            className="hover:border-erepair-blue/50"
          />
          <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-center items-center text-center">
            <Button 
              variant="outline" 
              className="mb-4 w-full border-erepair-green text-erepair-green hover:bg-erepair-green/10"
            >
              View All Contributions
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Last Drop-off: Pune Hub, Nov 15, 2023
            </p>
          </div>
        </div>
      </section>

      {/* Eco-Points Dashboard Section */}
      <section className="section-container bg-erepair-light-green">
        <SectionHeading
          title="Eco-Points & Achievements"
          subtitle="Earn rewards while saving the planet"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-erepair-green to-erepair-blue flex items-center justify-center text-white">
                    <Award className="h-12 w-12" />
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-erepair-green">
                    New!
                  </Badge>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">2,350</h3>
              <p className="text-muted-foreground mb-4">Eco-Points Earned</p>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 mb-4">
                <p className="font-medium text-erepair-dark-blue">
                  Badge Unlocked: Eco Hero
                </p>
                <p className="text-sm text-muted-foreground">
                  Reached 2,000 points milestone
                </p>
              </div>
              <div className="border border-dashed border-erepair-green/30 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Shareable Stat:</p>
                <p className="bg-white/70 rounded-lg p-2 text-erepair-dark-blue">
                  "I saved 5kg of e-waste with eRepair! 🌱"
                </p>
              </div>
              <Button onClick={handleShare} className="w-full">
                <Share2 className="mr-2 h-4 w-4" />
                Share on Social Media
              </Button>
              {showShareToast && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg animate-fade-in">
                  Ready to share! Opening share dialog...
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl h-full">
              <h3 className="text-xl font-bold mb-4">Eco-Points Growth</h3>
              <div className="h-[300px]">
                <ChartContainer config={chartConfig}>
                  <AreaChart data={ecoPointsData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2ECC71" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#2ECC71" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="points"
                      name="points"
                      stroke="#2ECC71"
                      fillOpacity={1}
                      fill="url(#colorPoints)"
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Continue recycling to earn more points and unlock exclusive rewards.</p>
                <p className="font-medium mt-2">Next milestone: 3,000 points - "Sustainability Champion" badge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-container">
        <SectionHeading
          title="How We Recycle"
          subtitle="Our process ensures maximum recovery of valuable materials"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl text-center relative">
            <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-erepair-green text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div className="mt-6 mb-4">
              <div className="h-16 w-16 mx-auto rounded-full bg-erepair-light-green flex items-center justify-center">
                <MapPin className="h-8 w-8 text-erepair-green" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Drop off at a hub</h3>
            <p className="text-muted-foreground">
              Bring your unused electronics to any eRepair hub near you. We accept all types of electronic devices, regardless of brand or condition.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl text-center relative">
            <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-erepair-blue text-white flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div className="mt-6 mb-4">
              <div className="h-16 w-16 mx-auto rounded-full bg-erepair-light-green flex items-center justify-center">
                <Recycle className="h-8 w-8 text-erepair-blue" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">We process and recycle</h3>
            <p className="text-muted-foreground">
              Our experts disassemble devices, salvage reusable parts, and ensure proper disposal of hazardous materials using eco-friendly methods.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl text-center relative">
            <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-erepair-green text-white flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div className="mt-6 mb-4">
              <div className="h-16 w-16 mx-auto rounded-full bg-erepair-light-green flex items-center justify-center">
                <Award className="h-8 w-8 text-erepair-green" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Earn eco-points</h3>
            <p className="text-muted-foreground">
              Get rewarded for your contribution to a cleaner environment. Redeem your points for discounts on repairs or DIY kits.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-erepair-blue text-erepair-blue hover:bg-erepair-blue/5">
            Learn More About Our Sustainability Efforts
          </Button>
        </div>
      </section>
    </Layout>
  );
}
