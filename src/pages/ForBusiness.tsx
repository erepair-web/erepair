
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Building2, BarChart3, Briefcase, HandCoins, Phone, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export default function ForBusiness() {
  // Form setup using react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data);
    toast.success("Your message has been sent! We'll get back to you soon.");
    form.reset();
  };

  return (
    <Layout>
      <PageHeader
        title="eRepair for Businesses"
        subtitle="Bulk repairs, trade-ins, and sustainability reporting for your organization"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Business Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Enterprise Solutions"
            subtitle="Tailored repair and maintenance programs for businesses of all sizes"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="glass-card rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-erepair-green/10 flex items-center justify-center text-erepair-green">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Corporate Device Program</h3>
                  <p className="text-muted-foreground">
                    Comprehensive management and maintenance of your organization's electronic devices, 
                    with priority repairs and scheduled check-ups.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 pl-14">
                {[
                  "Dedicated account manager",
                  "Same-day repair priority",
                  "Scheduled maintenance checks",
                  "Volume discounts",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground list-disc">{item}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-erepair-blue/10 flex items-center justify-center text-erepair-blue">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sustainability Reporting</h3>
                  <p className="text-muted-foreground">
                    Detailed ESG reports on your organization's e-waste reduction, carbon savings, and 
                    circular economy contribution through eRepair's services.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 pl-14">
                {[
                  "Monthly environmental impact reports",
                  "Carbon offset certificates",
                  "ESG compliance documentation",
                  "Sustainability achievement badges",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground list-disc">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="glass-card rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-erepair-green/10 flex items-center justify-center text-erepair-green">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bulk Repair & Trade-in</h3>
                  <p className="text-muted-foreground">
                    Cost-effective solutions for device upgrades with bulk repair services and competitive 
                    trade-in programs for your outdated equipment.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 pl-14">
                {[
                  "Bulk device collection",
                  "Corporate trade-in program",
                  "Secure data wiping",
                  "Asset management tracking",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground list-disc">{item}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-erepair-blue/10 flex items-center justify-center text-erepair-blue">
                  <HandCoins className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Employee Benefits Program</h3>
                  <p className="text-muted-foreground">
                    Extend special repair discounts and services to your employees as part of your 
                    corporate benefits package.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 pl-14">
                {[
                  "Employee discount codes",
                  "Family plan extensions",
                  "Priority scheduling",
                  "Educational workshops",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground list-disc">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials and Case Study Section */}
      <section className="py-16 bg-erepair-light-green">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Success Stories"
            subtitle="How businesses across India are benefiting from our services"
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 -left-4 text-4xl text-erepair-green opacity-50">❝</div>
              <div className="pt-6">
                <p className="text-lg italic mb-6">
                  "eRepair has reduced our IT maintenance costs by 35% while extending our device 
                  lifespan by an average of 14 months. Their on-site support and bulk repair services 
                  have been invaluable to our operations."
                </p>
                <div className="border-t border-border pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold">TechPrime Solutions</p>
                    <p className="text-sm text-muted-foreground">IT Services, Bangalore</p>
                  </div>
                  <div className="text-erepair-green font-bold text-2xl">
                    35%
                    <div className="text-xs font-normal text-muted-foreground">cost reduction</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden relative">
              <div className="h-64">
                <img 
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
                  alt="Corporate repair service" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Case Study: Sustainable IT at MicroTech</h3>
                <p className="text-muted-foreground mb-4">
                  How MicroTech achieved their sustainability goals with eRepair's corporate device program.
                </p>
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-erepair-green font-bold text-2xl">120+</div>
                    <div className="text-xs text-muted-foreground">devices repaired</div>
                  </div>
                  <div className="text-center">
                    <div className="text-erepair-green font-bold text-2xl">1.2 tons</div>
                    <div className="text-xs text-muted-foreground">e-waste prevented</div>
                  </div>
                  <div className="text-center">
                    <div className="text-erepair-green font-bold text-2xl">₹8L+</div>
                    <div className="text-xs text-muted-foreground">savings</div>
                  </div>
                </div>
                <Button variant="link" className="mt-4 text-erepair-blue p-0">
                  Read full case study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Contact Our Business Team"
            subtitle="Get in touch to discuss custom repair and sustainability solutions for your organization"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-erepair-green/10 rounded-full p-2 text-erepair-green">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us Directly</h3>
                    <p className="text-muted-foreground">+91 2345 678 910</p>
                    <p className="text-sm text-muted-foreground">Monday to Friday, 9am - 6pm IST</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-erepair-green/10 rounded-full p-2 text-erepair-green">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">business@erepair.in</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
                <h3 className="font-medium mb-3">Why partner with eRepair?</h3>
                <ul className="space-y-3">
                  {[
                    "Reduce IT maintenance costs by up to 35%",
                    "Extend device lifespan by an average of 14 months",
                    "Support your organization's sustainability goals",
                    "Provide valuable employee benefits",
                    "Access detailed ESG reporting for your sustainability initiatives"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="bg-erepair-green/10 rounded-full p-1 text-erepair-green mt-0.5 flex-shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="glass-card rounded-xl p-8 shadow-lg">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="ABC Corporation" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
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
                              <Input placeholder="+91 123 456 7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How can we help?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your business needs..." 
                              {...field} 
                              rows={5}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full btn-primary" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      Send Inquiry
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
