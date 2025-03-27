
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Check, CheckCircle, PieChart, MapPin, TrendingUp, Users, DollarSign } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  city: z.string().min(2, { message: "Please enter your city." }),
  investment: z.string().min(1, { message: "Please select your investment capacity." }),
  message: z.string().min(10, { message: "Please tell us more about your interest." })
});

const Franchise = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      investment: "",
      message: ""
    }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data);
    toast({
      title: "Franchise Application Submitted",
      description: "Thank you for your interest. Our team will contact you shortly!",
    });
    form.reset();
  };

  return (
    <Layout>
      <PageHeader
        title="Franchise Opportunities"
        subtitle="Join India's most innovative electronics repair network"
        backgroundImage="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Partner with eRepair?</h2>
            <p className="text-lg text-muted-foreground">
              eRepair is revolutionizing the electronics repair industry in India with our
              AI-powered diagnostics, doorstep service, and exceptional customer experience.
              Join us as we expand our network across the country.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: TrendingUp,
                title: "High-Growth Industry",
                description: "The electronics repair market in India is projected to grow at 8% annually over the next decade."
              },
              {
                icon: DollarSign,
                title: "Strong ROI",
                description: "Low setup cost with high margins and multiple revenue streams including repairs, DIY kits, and recycling."
              },
              {
                icon: Users,
                title: "Comprehensive Support",
                description: "Full training, marketing assistance, operations guidance, and proprietary AI diagnostic technology."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-erepair-green/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-erepair-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Franchise Business Model</h2>
              <p className="text-muted-foreground mb-6">
                Our franchise model is designed to be scalable, profitable, and rewarding. We provide
                you with all the tools, technology, and support you need to build a successful business.
              </p>
              
              <div className="space-y-4">
                {[
                  "Exclusive territory rights",
                  "Proprietary AI diagnostic technology",
                  "Comprehensive training program",
                  "Marketing and branding support",
                  "Inventory management system",
                  "Customer relationship management tools",
                  "Ongoing operational support"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-erepair-green mt-1 flex-shrink-0" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="btn-primary">
                  Download Franchise Brochure
                </Button>
              </div>
            </div>
            
            <div className="bg-erepair-light-green rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Investment Overview</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Initial Investment</h4>
                    <span className="text-erepair-green font-bold">₹15-25 Lakhs</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Covers setup, equipment, initial inventory, and franchise fee
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Royalty Fee</h4>
                    <span className="text-erepair-green font-bold">8%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on monthly gross sales
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Marketing Fee</h4>
                    <span className="text-erepair-green font-bold">2%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Contributes to national and regional marketing efforts
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Expected Break-Even</h4>
                    <span className="text-erepair-green font-bold">12-18 Months</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on current franchise performance metrics
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Franchise Process</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-erepair-green/20 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    step: "Application",
                    description: "Fill out the inquiry form and our team will reach out to discuss your interest."
                  },
                  {
                    step: "Initial Meeting",
                    description: "Meet with our franchise development team to learn more about the opportunity."
                  },
                  {
                    step: "Due Diligence",
                    description: "Review our franchise disclosure document and conduct your research."
                  },
                  {
                    step: "Location Selection",
                    description: "We'll help you identify and secure the perfect location for your franchise."
                  },
                  {
                    step: "Training Program",
                    description: "Complete our comprehensive 4-week training program at our headquarters."
                  },
                  {
                    step: "Grand Opening",
                    description: "Launch your eRepair franchise with our marketing and operational support."
                  }
                ].map((phase, index) => (
                  <div 
                    key={index} 
                    className={`relative z-10 flex ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    } ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 max-w-sm relative">
                      {/* Timeline dot */}
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 md:top-6 md:left-auto md:transform-none md:right-0 md:translate-x-1/2">
                        <div className="h-8 w-8 rounded-full bg-erepair-green flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{phase.step}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Application Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-center mb-6">Apply for a Franchise</h2>
            
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
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City of Interest</FormLabel>
                        <FormControl>
                          <Input placeholder="Mumbai" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="investment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Investment Capacity</FormLabel>
                      <FormControl>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          {...field}
                        >
                          <option value="">Select investment range</option>
                          <option value="15-20 Lakhs">₹15-20 Lakhs</option>
                          <option value="20-25 Lakhs">₹20-25 Lakhs</option>
                          <option value="25-30 Lakhs">₹25-30 Lakhs</option>
                          <option value="30+ Lakhs">₹30+ Lakhs</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tell us more about your interest</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please share your background and why you're interested in an eRepair franchise"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">Submit Application</Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
      
      {/* Franchisee Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Available Territories</h2>
            <p className="text-muted-foreground">
              We're expanding rapidly across India and have franchise opportunities available in these key regions.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-10">
            <div className="aspect-[16/9] bg-gray-100 rounded-lg relative mb-4">
              {/* This would be a map of India showing available territories */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Interactive map would display here</p>
              </div>
              
              {/* Sample markers */}
              {[
                { left: "28%", top: "35%", city: "Delhi" },
                { left: "22%", top: "60%", city: "Mumbai" },
                { left: "30%", top: "75%", city: "Bangalore" },
                { left: "37%", top: "65%", city: "Hyderabad" },
                { left: "35%", top: "48%", city: "Kolkata" },
              ].map((marker, index) => (
                <div
                  key={index}
                  className="absolute h-4 w-4 bg-erepair-green rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: marker.left, top: marker.top }}
                >
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 whitespace-nowrap bg-white px-2 py-1 text-xs rounded shadow-md">
                    {marker.city}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["North India", "South India", "East India", "West India"].map((region, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4 text-center">
                  <h3 className="font-medium mb-2">{region}</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    {index === 0 && ["Delhi NCR", "Chandigarh", "Lucknow", "Jaipur"].map((city, i) => (
                      <p key={i}>{city}</p>
                    ))}
                    {index === 1 && ["Bangalore", "Chennai", "Hyderabad", "Kochi"].map((city, i) => (
                      <p key={i}>{city}</p>
                    ))}
                    {index === 2 && ["Kolkata", "Bhubaneswar", "Guwahati", "Patna"].map((city, i) => (
                      <p key={i}>{city}</p>
                    ))}
                    {index === 3 && ["Mumbai", "Pune", "Ahmedabad", "Indore"].map((city, i) => (
                      <p key={i}>{city}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Don't see your city listed? Contact us to discuss other available territories.
            </p>
            <Button variant="outline" className="mr-4">View All Territories</Button>
            <Button>Contact Franchise Team</Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hear From Our Franchisees</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Bangalore",
                quote: "Joining eRepair was the best business decision I've made. The support system is exceptional, and the technology gives us a clear edge over competitors.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&ixlib=rb-4.0.3"
              },
              {
                name: "Sanjana Patel",
                location: "Mumbai",
                quote: "I've been an eRepair franchisee for a year now, and we're already exceeding our financial targets. The AI diagnostic system has been a game-changer for our operations.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&ixlib=rb-4.0.3"
              },
              {
                name: "Vivek Sharma",
                location: "Delhi",
                quote: "As someone without prior experience in electronics repair, the training program provided by eRepair gave me all the knowledge and confidence needed to run a successful franchise.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&ixlib=rb-4.0.3"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">Franchisee, {testimonial.location}</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Franchise;
