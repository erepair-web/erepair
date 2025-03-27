
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Sitemap = () => {
  // Define all site sections and pages
  const siteStructure = [
    {
      section: "Main Pages",
      pages: [
        { title: "Home", url: "/" },
        { title: "Book a Repair", url: "/book-repair" },
        { title: "DIY Kits", url: "/diy-kits" },
        { title: "Recycling", url: "/recycling" },
        { title: "For Business", url: "/for-business" },
        { title: "About Us", url: "/about" }
      ]
    },
    {
      section: "Support",
      pages: [
        { title: "Contact Us", url: "/contact" },
        { title: "Blog", url: "/blog" },
        { title: "Download App", url: "/download-app" }
      ]
    },
    {
      section: "Business",
      pages: [
        { title: "Franchise Opportunities", url: "/franchise" },
        { title: "Corporate Services", url: "/for-business" }
      ]
    },
    {
      section: "Legal",
      pages: [
        { title: "Privacy Policy", url: "/privacy" },
        { title: "Terms of Service", url: "/terms" }
      ]
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="Sitemap"
        subtitle="Find your way around our website"
        backgroundImage="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {siteStructure.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-bold mb-4 pb-2 border-b">{section.section}</h2>
                  <ul className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <Link 
                          to={page.url} 
                          className="flex items-center hover:text-erepair-green transition-colors"
                        >
                          <ArrowRight size={16} className="mr-2" />
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-16">
              <h2 className="text-xl font-bold mb-4">All Pages (A-Z)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {siteStructure.flatMap(section => section.pages)
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((page, index) => (
                    <Link 
                      key={index}
                      to={page.url}
                      className="hover:text-erepair-green transition-colors"
                    >
                      {page.title}
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
