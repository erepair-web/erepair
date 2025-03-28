
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FixBotWidget } from "@/components/chat/FixBotWidget";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
      <FixBotWidget />
    </div>
  );
}
