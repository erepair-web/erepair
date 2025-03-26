
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  location: z.string().min(3, { message: "Location must be at least 3 characters" }),
  investmentCapacity: z.string().min(1, { message: "Please select your investment capacity" }),
  experience: z.string().optional(),
});

// Define the testimonial interface
interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export default function Franchise() {
  // Form setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      investmentCapacity: "",
      experience: "",
    },
  });

  // Testimonials state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonials: Testimonial[] = [
    {
      quote: "My hub does 15 repairs/day! The AI diagnostic system has increased our efficiency by 40%.",
      author: "Anil Sharma",
      location: "Pune",
    },
    {
      quote: "Our rural van serves 5 villages and has become a trusted name for reliable repairs at affordable rates.",
      author: "Kavita Patel",
      location: "Rajasthan",
    },
    {
      quote: "The VR training was a game-changer for my technicians. We're now handling complex repairs with ease.",
      author: "Rajiv Mehta",
      location: "Bangalore",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast.success("Application submitted successfully! We'll contact you soon.");
    form.reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-erepair-green/10 to-erepair-blue/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Join the eRepair Franchise Network
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Be part of India's leading repair and sustainability movement. Expand your business while making a positive impact on the environment.
              </p>
              <Button size="lg" className="btn-primary" onClick={() => {
                const element = document.getElementById('application-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Apply Now
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="eRepair Franchise Hub" 
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Join eRepair?" 
            subtitle="Discover the benefits of becoming an eRepair franchise partner"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card border-none hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-gradient-to-tr from-erepair-green to-erepair-blue rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">High Profit Margins</h3>
                <p className="text-muted-foreground">30% margin on repair kits and refurbished devices, with potential for 40% ROI in the first year.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-none hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-gradient-to-tr from-erepair-green to-erepair-blue rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Advanced Training</h3>
                <p className="text-muted-foreground">VR training for technicians, AI diagnostics integration, and continuous technical support from our headquarters.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-none hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-gradient-to-tr from-erepair-green to-erepair-blue rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Nationwide Support</h3>
                <p className="text-muted-foreground">Comprehensive support from our Pune headquarters, including marketing, operations, and customer service assistance.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Starter Kit Details Section */}
      <section className="py-16 bg-gradient-to-r from-erepair-green/10 to-erepair-blue/10">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Franchise Starter Kits" 
            subtitle="Choose the right startup package for your business needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Urban Hub</h3>
                  <span className="text-xl font-bold text-erepair-green">₹7 lakh</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Perfect for city locations with high foot traffic and device repair demand.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-erepair-green mr-2 mt-0.5" />
                    <span>Complete branding package</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-erepair-green mr-2 mt-0.5" />
                    <span>2 AI diagnostic tablets</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-erepair-green mr-2 mt-0.5" />
                    <span>VR training headsets for 3 technicians</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-erepair-green mr-2 mt-0.5" />
                    <span>Premium repair toolkit collection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-erepair-green mr-2 mt-0.5" />
                    <span>Initial parts inventory</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Rural Van</h3>
                  <span className="text-xl font-bold text-erepair-green">₹4 lakh</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Mobile solution to serve multiple villages and underserved rural areas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-erepair-green mr-2 mt-0.5" />
                    <span>Vehicle customization package</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-erepair-green mr-2 mt-0.5" />
                    <span>1 AI diagnostic tablet</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-erepair-green mr-2 mt-0.5" />
                    <span>VR training headset for 1 technician</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-erepair-green mr-2 mt-0.5" />
                    <span>Standard repair toolkit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-erepair-green mr-2 mt-0.5" />
                    <span>Solar charging equipment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button variant="secondary" size="lg">
              See Full Details
            </Button>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Apply to Become a Franchisee" 
            subtitle="Take the first step towards joining the eRepair network"
          />
          
          <div className="max-w-2xl mx-auto">
            <Card className="glass-card">
              <CardContent className="p-6 pt-8">
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
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 123 456 7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Location</FormLabel>
                            <FormControl>
                              <Input placeholder="City, State" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="investmentCapacity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Investment Capacity</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter amount in INR" {...field} />
                          </FormControl>
                          <FormDescription>
                            Urban Hubs start at ₹7 lakh, Rural Vans at ₹4 lakh
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Relevant Experience (optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your business experience, especially in electronics or retail" 
                              {...field} 
                              rows={4}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-2">
                      <Button type="submit" className="w-full btn-primary" size="lg">
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gradient-to-r from-erepair-green/10 to-erepair-blue/10">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Success Stories" 
            subtitle="Hear from our franchisee partners across India"
          />
          
          <div className="max-w-3xl mx-auto">
            <Card className="glass-card border-none">
              <CardContent className="p-8 relative">
                <div className="text-4xl text-erepair-green/30 absolute top-6 left-8">❝</div>
                <div className="text-center pt-8 pb-6">
                  <blockquote className="text-xl italic text-foreground/90 mb-6">
                    "{testimonials[currentTestimonialIndex].quote}"
                  </blockquote>
                  <div className="font-bold text-lg">
                    {testimonials[currentTestimonialIndex].author}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonialIndex].location}
                  </div>
                </div>
                <div className="text-4xl text-erepair-green/30 absolute bottom-6 right-8">❞</div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-8 space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                className="rounded-full hover:bg-erepair-green/10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                className="rounded-full hover:bg-erepair-green/10"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
