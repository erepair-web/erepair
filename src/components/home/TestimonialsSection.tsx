
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    content: "My laptop was diagnosed and repaired within hours. The technician was professional and explained everything clearly. Great service!",
    author: "Priya Sharma",
    role: "Marketing Manager"
  },
  {
    content: "The DIY kit for my phone screen replacement saved me thousands of rupees. The video guide was so easy to follow!",
    author: "Rohan Mehta",
    role: "Software Engineer"
  },
  {
    content: "We've partnered with eRepair for our company's IT maintenance. Their bulk repair system is efficient and has saved us both time and money.",
    author: "Anita Desai",
    role: "Operations Director, TechCorp"
  },
  {
    content: "I was skeptical about the AI diagnosis, but it accurately identified my tablet's issue. The repair was quick and affordable.",
    author: "Vikram Singh",
    role: "Teacher"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="section-container">
      <SectionHeading 
        title="What Our Customers Say" 
        subtitle="Don't just take our word for it. Here's what people are saying about eRepair."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="animate-slide-in-bottom"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <TestimonialCard 
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
