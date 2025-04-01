
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Sitemap = () => {
  const siteLinks = [
    {
      category: "Main Pages",
      links: [
        { title: "Home", path: "/" },
        { title: "Book a Repair", path: "/book-repair" },
        { title: "DIY Repair Kits", path: "/diy-kits" },
        { title: "E-Waste Recycling", path: "/recycling" },
        { title: "For Businesses", path: "/for-business" },
        { title: "About Us", path: "/about" },
      ]
    },
    {
      category: "Support",
      links: [
        { title: "Contact Us", path: "/contact" },
        { title: "Blog", path: "/blog" },
        { title: "Download App", path: "/download-app" },
      ]
    },
    {
      category: "Opportunities",
      links: [
        { title: "Franchise Opportunities", path: "/franchise" },
      ]
    },
    {
      category: "Legal",
      links: [
        { title: "Privacy Policy", path: "/privacy" },
        { title: "Terms of Service", path: "/terms" },
      ]
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="Sitemap"
        subtitle="Find your way around our website"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteLinks.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-bold mb-4 text-erepair-dark-blue">{category.category}</h2>
                  <ul className="space-y-2">
                    {category.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link 
                          to={link.path} 
                          className="flex items-center hover:text-erepair-green transition-colors group"
                        >
                          <ChevronRight className="h-4 w-4 mr-2 text-erepair-green opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-erepair-light-green rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="mb-6">Our customer support team is here to help you navigate our services.</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-erepair-green text-white hover:bg-erepair-green/90 h-10 py-2 px-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
