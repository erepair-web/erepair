
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Electronic Repairs in India",
    excerpt: "With the growing electronic waste problem in India, repair and refurbishment services are becoming increasingly important...",
    category: "Industry News",
    date: "May 15, 2023",
    readTime: "5 min read",
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
    title: "How to Choose the Right Repair Service for Your Device",
    excerpt: "With so many repair options available, it can be difficult to know which one to trust. Here's what to look for...",
    category: "Consumer Guide",
    date: "October 15, 2023",
    readTime: "5 min read",
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  }
];

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
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
              
              {/* Featured post */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
                <div className="relative h-64 md:h-80">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <Badge className="bg-erepair-green text-white mb-3 self-start">{blogPosts[0].category}</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">{blogPosts[0].title}</h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <div className="flex items-center mr-4">
                        <Calendar size={14} className="mr-1" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <Clock size={14} className="mr-1" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                  <Button variant="link" className="text-erepair-green p-0 flex items-center gap-1">
                    Read Full Article <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
              
              {/* Recent posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.slice(1, 5).map((post) => (
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
            
            <div className="md:w-1/3 md:pl-8">
              <div className="sticky top-24">
                {/* Categories */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {["Industry News", "DIY Guides", "Tips & Tricks", "Sustainability", "Troubleshooting", "Consumer Guide"].map((category) => (
                      <li key={category} className="flex items-center justify-between">
                        <Link to="#" className="text-muted-foreground hover:text-erepair-green transition-colors">
                          {category}
                        </Link>
                        <Badge variant="outline">
                          {Math.floor(Math.random() * 10) + 1}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Popular posts */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <div className="h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2 hover:text-erepair-green transition-colors">
                            <Link to="#">{post.title}</Link>
                          </h4>
                          <div className="flex items-center mt-1">
                            <Calendar size={12} className="text-muted-foreground mr-1" />
                            <span className="text-xs text-muted-foreground">{post.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter */}
                <div className="bg-erepair-light-green rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Stay updated with the latest repair tips and industry news.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-md border border-gray-200"
                    />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
