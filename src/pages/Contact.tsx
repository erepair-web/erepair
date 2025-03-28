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
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  subject: z.string().min(3, { message: "Please enter a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data);
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll respond to your inquiry shortly.",
    });
    form.reset();
  };

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help with all your repair needs"
        backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you have questions about our services, need technical support, or want to explore
                business opportunities, our team is ready to assist you. Fill out the form and we'll get
                back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    details: "+91 8999895516",
                    subdetails: "Mon-Sat, 9am-6pm IST"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    details: "mail.erepair@gmail.com",
                    subdetails: "We'll respond within 24 hours"
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    details: "1154 Prime Arcade, Shop No-5B, Ground Floor",
                    subdetails: "Saifee Street, Behind MG Road, Camp, Pune - 411001"
                  },
                  {
                    icon: Clock,
                    title: "Working Hours",
                    details: "Monday to Saturday",
                    subdetails: "9:00 AM to 6:00 PM IST"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-erepair-green/10 p-3 rounded-full text-erepair-green">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p>{item.details}</p>
                      <p className="text-sm text-muted-foreground">{item.subdetails}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-erepair-light-green rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-erepair-green text-white p-3 rounded-full">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Live Chat Support</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Need immediate assistance? Chat with our support team on WhatsApp or through our website chat.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" className="gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                        WhatsApp
                      </Button>
                      <Button className="gap-2">
                        <MessageSquare size={16} />
                        Website Chat
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                
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
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help you?" {...field} />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide details about your inquiry"
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Visit Our Office</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="aspect-[16/9] bg-gray-200">
              {/* This would be a Google Map iframe */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Map would be displayed here</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-start gap-3 mb-4 md:mb-0">
                  <MapPin className="h-5 w-5 text-erepair-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">eRepair Technologies</h3>
                    <p className="text-muted-foreground">1154 Prime Arcade, Shop No-5B, Ground Floor, Saifee Street, Behind MG Road, Camp, Pune - 411001</p>
                  </div>
                </div>
                
                <Button variant="outline">Get Directions</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What repair services do you offer?",
                  answer: "We offer repair services for a wide range of electronic devices including smartphones, laptops, tablets, TVs, audio equipment, and wearables. Our services include screen replacements, battery replacements, water damage repair, charging port fixes, and more."
                },
                {
                  question: "How do I schedule a repair?",
                  answer: "You can schedule a repair through our website by filling out the booking form, calling our customer service number, or visiting one of our service centers directly. For added convenience, we also offer doorstep repair services in select locations."
                },
                {
                  question: "What are your warranty terms?",
                  answer: "All our repairs come with a 6-month warranty covering both parts and labor. The warranty is valid for the specific repair performed and does not cover physical damage, water damage, or any issues unrelated to the original repair."
                },
                {
                  question: "How long does a typical repair take?",
                  answer: "Most common repairs such as screen replacements or battery replacements are completed within 1-2 hours. More complex issues may take 24-48 hours. We always provide an estimated timeframe when you book your repair."
                },
                {
                  question: "Do you offer any pickup and delivery services?",
                  answer: "Yes, we offer doorstep pickup and delivery services in major cities across India. There is a nominal fee for this service, which varies based on your location."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
