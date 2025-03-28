
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookRepair from "./pages/BookRepair";
import DIYKits from "./pages/DIYKits";
import About from "./pages/About";
import Recycling from "./pages/Recycling";
import ForBusiness from "./pages/ForBusiness";
import NotFound from "./pages/NotFound";
import DownloadApp from "./pages/DownloadApp";

// Create placeholder pages for the routes we haven't fully implemented yet
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground">This page is coming soon!</p>
    </div>
  </div>
);

const Franchise = () => <PlaceholderPage title="Franchise Opportunities" />;
const Blog = () => <PlaceholderPage title="Blog" />;
const Contact = () => <PlaceholderPage title="Contact Us" />;
const Privacy = () => <PlaceholderPage title="Privacy Policy" />;
const Terms = () => <PlaceholderPage title="Terms of Service" />;
const Sitemap = () => <PlaceholderPage title="Sitemap" />;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book-repair" element={<BookRepair />} />
          <Route path="/diy-kits" element={<DIYKits />} />
          <Route path="/recycling" element={<Recycling />} />
          <Route path="/for-business" element={<ForBusiness />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download-app" element={<DownloadApp />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
