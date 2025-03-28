
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Smartphone, Shield, Zap, Clock, Wrench, Recycle } from "lucide-react";

const DownloadApp = () => {
  return (
    <Layout>
      <PageHeader
        title="Download eRepair App"
        subtitle="Repair services at your fingertips"
        backgroundImage="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Repairs Made Simple</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download the eRepair app and experience the most convenient way to get your electronic devices fixed. Book repairs, track progress, and much more right from your phone.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: Smartphone,
                    title: "AI Diagnostics",
                    description: "Upload photos of your device or chat with our AI to diagnose issues before booking a repair."
                  },
                  {
                    icon: Clock,
                    title: "Quick Booking",
                    description: "Schedule repairs in just a few taps and choose between doorstep service or drop-off."
                  },
                  {
                    icon: Shield,
                    title: "Transparent Pricing",
                    description: "Get upfront price estimates with no hidden fees. Pay only for what you approve."
                  },
                  {
                    icon: Zap,
                    title: "Real-time Updates",
                    description: "Track your repair status in real-time and receive notifications at each step."
                  },
                  {
                    icon: Wrench,
                    title: "DIY Guides",
                    description: "Access step-by-step repair guides and video tutorials for simple fixes."
                  },
                  {
                    icon: Recycle,
                    title: "E-Waste Management",
                    description: "Schedule e-waste pickups and earn rewards for recycling old devices."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-erepair-green/10 p-3 rounded-full text-erepair-green flex-shrink-0">
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <p className="font-medium">Download Now</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="flex gap-2 h-14 px-6">
                    <div>
                      <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1903 4.94626C14.2971 3.5652 15.0976 1.74743 14.9033 0C13.3311 0.0748288 11.4617 1.06557 10.3167 2.44663C9.28399 3.68847 8.33481 5.5372 8.55162 7.21703C10.3549 7.35873 12.0834 6.32732 13.1903 4.94626Z" />
                        <path d="M19.5438 16.9518C19.5819 13.7344 22.2262 11.6872 22.3442 11.6124C20.6157 9.01615 17.9524 8.6682 17.0414 8.64334C14.7883 8.39434 12.6352 10.0196 11.4903 10.0196C10.3454 10.0196 8.61685 8.66819 6.71525 8.71791C4.28682 8.76765 2.03371 10.1188 0.841784 12.2705C-1.6665 16.6234 0.229303 23.0834 2.63773 26.5245C3.83966 28.2291 5.2588 30.1333 7.13223 30.0338C8.95723 29.9343 9.67048 28.8282 11.8999 28.8282C14.1292 28.8282 14.7883 30.0338 16.7137 29.9841C18.6964 29.9343 19.9175 28.2543 21.0624 26.5369C22.4434 24.612 23.007 22.7337 23.0452 22.6342C23.007 22.6093 19.5057 21.2283 19.5438 16.9518Z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </Button>
                  
                  <Button className="flex gap-2 h-14 px-6">
                    <div>
                      <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.994141 0.587891L12.5142 11.8379L1.03565 22.9986H1.46691L12.3525 12.4194L20.9905 20.8517V21.2829L12.6762 13.1431L20.9905 5.10425V4.67299L12.3734 13.0022L1.48725 2.36486V2.79612L11.7917 12.4402L0.994141 23.021V0.587891Z" />
                        <path d="M0.994141 0.567383V1.00739L20.5613 20.8732L20.9925 20.442L1.42539 0.567383H0.994141Z" />
                        <path d="M1.42539 23.0408H0.994141L20.5613 3.13499L20.9925 3.56624L1.42539 23.0408Z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-16 -left-16 h-64 w-64 bg-erepair-green/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 h-64 w-64 bg-erepair-blue/10 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="bg-white rounded-3xl shadow-xl p-4 md:p-6 mx-auto max-w-xs">
                  <div className="rounded-2xl overflow-hidden border border-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
                      alt="eRepair App Screenshot"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="absolute -right-10 bottom-40 bg-white rounded-xl shadow-lg p-4 max-w-[200px]">
                  <div className="flex items-start gap-2 mb-2">
                    <Shield className="h-5 w-5 text-erepair-green flex-shrink-0" />
                    <p className="text-sm font-medium">6-Month Warranty on all repairs</p>
                  </div>
                </div>
                
                <div className="absolute -left-10 top-20 bg-white rounded-xl shadow-lg p-4 max-w-[200px]">
                  <div className="flex items-start gap-2 mb-2">
                    <Zap className="h-5 w-5 text-erepair-green flex-shrink-0" />
                    <p className="text-sm font-medium">AI diagnoses your device issues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join thousands of satisfied users</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Our app is rated 4.8/5 by over 10,000 users across India
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 max-w-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 font-bold">5.0</span>
                </div>
                <p className="italic text-muted-foreground mb-4">
                  "The app made it so easy to get my phone fixed. The technician came to my home and repaired my screen in just 30 minutes. Highly recommended!"
                </p>
                <p className="font-medium">Priya S., Mumbai</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 max-w-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 font-bold">4.8</span>
                </div>
                <p className="italic text-muted-foreground mb-4">
                  "The AI diagnostics feature is amazing! It correctly identified my laptop issue and gave me an accurate price estimate before booking the repair."
                </p>
                <p className="font-medium">Rahul M., Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DownloadApp;
