
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for the e-waste reduction chart
const eWasteData = [
  { year: 2025, amount: 5000 },
  { year: 2026, amount: 8000 },
  { year: 2027, amount: 12000 },
  { year: 2028, amount: 16000 },
  { year: 2029, amount: 20000 },
];

// Team member data
const teamMembers = [
  {
    name: "Amit Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&auto=format&fit=crop&q=80",
    bio: "Former tech executive with 15+ years experience in consumer electronics."
  },
  {
    name: "Priya Patel",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&auto=format&fit=crop&q=80",
    bio: "AI researcher and hardware specialist focused on predictive repair diagnostics."
  },
  {
    name: "Ravi Kumar",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=400&h=400&auto=format&fit=crop&q=80",
    bio: "Supply chain expert with experience scaling operations across India."
  }
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[50vh] flex items-center relative overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-erepair-green/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 h-72 w-72 rounded-full bg-erepair-blue/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                About <span className="text-gradient">eRepair</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Pioneering electronics repair with AI and sustainability in India. We're revolutionizing how electronics get fixed while building a greener future.
              </p>
              <Button 
                className="btn-secondary"
                onClick={() => {
                  document.getElementById('mission-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=80" 
                alt="eRepair Team" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission-section" className="section-container py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=80" 
                alt="Eco-Friendly Repair" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-erepair-green font-medium">
                <Target size={18} />
                <span>Our Purpose</span>
              </div>
              <SectionHeading 
                title="Our Mission" 
                centered={false}
              />
              <p className="text-lg">
                To provide fast, affordable, and eco-conscious repair solutions across India, minimizing e-waste and extending the life of electronic devices.
              </p>
              
              <div className="bg-erepair-blue/5 p-6 rounded-lg border border-erepair-blue/20 mt-8">
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  Lead India's repair industry with innovative technology, creating a circular tech economy where nothing goes to waste and devices live longer.
                </p>
              </div>
              
              <div className="pt-4">
                <Link to="/recycling">
                  <Button variant="outline" className="border-erepair-green text-erepair-green hover:bg-erepair-green/5">
                    Explore Our Recycling Program
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-container bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 text-erepair-blue font-medium">
            <Users size={18} />
            <span>Leadership</span>
          </div>
          
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The passionate people behind eRepair's mission to transform electronics repair in India."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-erepair-blue font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Button className="btn-primary">
              View All Team Members
            </Button>
          </div>
        </div>
      </section>

      {/* Sustainability Impact Section */}
      <section className="section-container bg-white">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 text-erepair-green font-medium">
            <Recycle size={18} />
            <span>Environmental Impact</span>
          </div>
          
          <SectionHeading 
            title="Our Sustainability Impact" 
            subtitle="Every device repaired is a step toward a cleaner, more sustainable future."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <StatCard
              title="CO2 Saved Per User"
              value={15}
              suffix="kg"
              icon={Recycle}
              className="md:col-span-1"
            />
            <StatCard
              title="Devices Recycled"
              value={20000}
              icon={Recycle}
              className="md:col-span-1"
            />
            <StatCard
              title="Extended Device Lifespan"
              value={3}
              suffix="+ years"
              icon={Recycle}
              className="md:col-span-1"
            />
          </div>
          
          <div className="mt-16 bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6">E-Waste Reduction Over Time</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={eWasteData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#eaeaea" />
                  <XAxis 
                    dataKey="year" 
                    label={{ value: 'Year', position: 'insideBottom', offset: -20 }}
                  />
                  <YAxis 
                    label={{ value: 'Devices Recycled', angle: -90, position: 'insideLeft', offset: -5 }}
                  />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    name="Devices" 
                    stroke="#2ECC71" 
                    strokeWidth={3} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button className="btn-secondary">
                See More Stats
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-erepair-green to-erepair-blue py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the eRepair Movement</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you're looking to repair a device, start a sustainable business, or reduce your e-waste footprint, eRepair is here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/book-repair">
              <Button className="bg-white text-erepair-green hover:bg-white/90">
                Book a Repair
              </Button>
            </Link>
            <Link to="/franchise">
              <Button className="bg-white/20 hover:bg-white/30 border border-white">
                Join as a Franchise
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
