
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/section-heading";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "How to Find a Reliable Electronic Repair Shop: Tips and Tricks",
    excerpt: "Looking for a trustworthy place to repair your electronics? Learn how to choose the right repair shop with these expert tips and avoid common pitfalls...",
    category: "Consumer Guide",
    date: "February 26, 2025",
    readTime: "7 min read",
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "DIY Smartphone Screen Replacement Guide",
    excerpt: "Replacing your smartphone screen might seem daunting, but with the right tools and guidance, it can be a straightforward process...",
    category: "DIY Guides",
    date: "June 3, 2023",
    readTime: "8 min read",
    author: "Rahul Verma",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "How to Extend Your Laptop's Battery Life",
    excerpt: "With proper care and usage habits, you can significantly extend the lifespan of your laptop battery. Here are our top tips...",
    category: "Tips & Tricks",
    date: "July 12, 2023",
    readTime: "6 min read",
    author: "Amit Patel",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "The Environmental Impact of E-Waste in India",
    excerpt: "India generates millions of tons of electronic waste annually. Learn about the environmental consequences and how recycling helps...",
    category: "Sustainability",
    date: "August 24, 2023",
    readTime: "7 min read",
    author: "Neha Singh",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "Common Laptop Problems and Their Solutions",
    excerpt: "From overheating to slow performance, discover the most common laptop issues and learn how to troubleshoot them...",
    category: "Troubleshooting",
    date: "September 9, 2023",
    readTime: "10 min read",
    author: "Vikram Mehta",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "The Future of Electronic Repairs in India",
    excerpt: "With the growing electronic waste problem in India, repair and refurbishment services are becoming increasingly important...",
    category: "Industry News",
    date: "October 15, 2023",
    readTime: "5 min read",
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  }
];

// Sample full blog post content
const fullBlogPost = {
  title: "How to Find a Reliable Electronic Repair Shop: Tips and Tricks",
  publishDate: "February 26, 2025",
  author: "Priya Sharma",
  readTime: "7 min read",
  category: "Consumer Guide",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
  content: [
    {
      type: "intro",
      text: "Welcome to eRepair's blog, your go-to resource for all things related to electronic repair. In this post, we'll guide you through finding a reliable electronic repair shop, ensuring your devices are fixed safely and efficiently. Whether it's a broken phone or a malfunctioning laptop, choosing the right service is crucial."
    },
    {
      type: "heading",
      text: "Why Choosing the Right Repair Shop Matters"
    },
    {
      type: "paragraph",
      text: "Our lives depend on electronic devices, from smartphones to laptops. A reliable repair shop prevents further damage and saves money. Choosing poorly can lead to frustration and additional costs, so research is key."
    },
    {
      type: "heading",
      text: "Tips to Find a Reliable Electronic Repair Shop"
    },
    {
      type: "list",
      items: [
        "<strong>Research and Read Reviews:</strong> Start by checking online directories like eRepair to find verified, highly rated shops. Customer reviews offer insights into quality and service.",
        "<strong>Check for Certifications:</strong> Ensure the shop has manufacturer authorizations, indicating expertise and access to genuine parts.",
        "<strong>Ask About Technician Experience:</strong> Inquire about their training and experience with your device model for quality repairs.",
        "<strong>Inquire About Parts and Warranty:</strong> Confirm they use genuine parts and offer a warranty, ensuring long-term reliability.",
        "<strong>Get a Written Estimate:</strong> Request a detailed cost breakdown to avoid surprises, and be wary of unclear pricing.",
        "<strong>Visit the Shop:</strong> If possible, check their location for a professional environment, ensuring convenience for drop-offs.",
        "<strong>Ask for Recommendations:</strong> Seek advice from friends or family for trusted shops based on their experiences."
      ]
    },
    {
      type: "heading",
      text: "Red Flags to Avoid"
    },
    {
      type: "paragraph",
      text: "Watch for signs like unusually low prices, no warranty, poor communication, or negative online reviews, which may indicate substandard service."
    },
    {
      type: "heading",
      text: "Case Study: eRepair in Action"
    },
    {
      type: "paragraph",
      text: "Consider John, whose phone screen shattered. Using eRepair, he filtered shops by location and ratings, chose a highly rated service, and was satisfied with the timely, quality repair. This shows how eRepair simplifies finding reliable shops."
    },
    {
      type: "heading",
      text: "What to Do If You're Not Satisfied"
    },
    {
      type: "paragraph",
      text: "If the repair fails, review the warranty, document interactions, and consider filing complaints with consumer agencies. Reputable shops will address issues, protecting your rights."
    },
    {
      type: "heading",
      text: "Conclusion"
    },
    {
      type: "paragraph",
      text: "Finding a reliable electronic repair shop requires diligence. Follow these tips to make informed choices and avoid pitfalls. For easy access to trusted services, visit eRepair today."
    },
    {
      type: "cta",
      text: "Ready to find a reliable repair shop? Check out eRepair for verified, rated services near you.",
      buttonText: "Book a Repair Now",
      link: "/book-repair"
    }
  ]
};

const BlogPage = () => {
  return (
    <Layout>
      <PageHeader
        title="eRepair Blog"
        subtitle="Expert advice, industry insights, and DIY guides for all your electronic devices"
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Featured blog post - full content */}
          <article className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-80 md:h-96">
              <img
                src={fullBlogPost.image}
                alt={fullBlogPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <Badge className="bg-erepair-green text-white mb-3 self-start">{fullBlogPost.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{fullBlogPost.title}</h1>
                <div className="flex items-center text-white/90 text-sm flex-wrap gap-y-2">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{fullBlogPost.publishDate}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Clock size={14} className="mr-1" />
                    <span>{fullBlogPost.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{fullBlogPost.author}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-10">
              {fullBlogPost.content.map((item, index) => {
                switch (item.type) {
                  case 'intro':
                    return <p key={index} className="text-lg font-medium mb-6">{item.text}</p>;
                  case 'heading':
                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{item.text}</h2>;
                  case 'paragraph':
                    return <p key={index} className="mb-6 text-muted-foreground">{item.text}</p>;
                  case 'list':
                    return (
                      <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                        {item.items.map((listItem, i) => (
                          <li key={i} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: listItem }}></li>
                        ))}
                      </ul>
                    );
                  case 'cta':
                    return (
                      <div key={index} className="bg-erepair-light-green rounded-lg p-6 mt-8">
                        <p className="font-medium mb-4">{item.text}</p>
                        <Button asChild className="bg-erepair-green hover:bg-erepair-green/90">
                          <Link to={item.link}>{item.buttonText}</Link>
                        </Button>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
              
              {/* Social sharing */}
              <div className="border-t border-gray-100 mt-10 pt-6">
                <p className="font-medium mb-4">Share this article:</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.375 2.625c-1.035 0-2.1.39-2.85 1.215l-3.601 3.6-6.789 6.789v4.5h4.5l10.39-10.389a4.05 4.05 0 0 0 0-5.715 4.125 4.125 0 0 0-1.65-1Zm-2.7 2.7c.69-.69 1.8-.69 2.49 0 .33.33.51.765.51 1.215 0 .45-.18.885-.51 1.215L8.775 17.145h-1.5l-.75-.75v-1.5l9.15-9.57Z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </article>
          
          {/* More articles section */}
          <SectionHeading
            title="More Articles"
            subtitle="Discover more helpful guides, tips, and industry insights"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1, 7).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-erepair-green text-white">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {post.date}
                  </span>
                  <Button variant="link" className="text-erepair-green p-0 flex items-center gap-1">
                    Read More <ArrowRight size={14} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-erepair-dark-blue hover:bg-erepair-blue">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
