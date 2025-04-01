
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
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";
import { FixBotWidget } from "./components/chat/FixBotWidget";

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
        <FixBotWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
