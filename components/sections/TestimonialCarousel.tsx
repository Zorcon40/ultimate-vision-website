"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TestimonialItem } from "@/types";

const testimonials: TestimonialItem[] = [
  {
    quote: "Clark's presentation was the single most powerful experience our school has had in 20 years. Students are still talking about it months later, actively choosing kindness in hallways, classrooms, and beyond.",
    author: "Dr. Sarah Martinez",
    role: "Principal",
    organization: "Roosevelt Elementary School",
    location: "Seattle, Washington"
  },
  {
    quote: "The Dine in the Dark experience completely shifted my perspective on empathy and understanding. It's something I'll carry with me forever.",
    author: "Michael Chen",
    role: "CEO",
    organization: "Tech Innovations Inc.",
    location: "Bellevue, Washington"
  },
  {
    quote: "Our corporate team emerged from Clark's workshop with a renewed sense of purpose and genuine connection. The transformation was remarkable.",
    author: "Jennifer Williams",
    role: "HR Director",
    organization: "Pacific Northwest Corp",
    location: "Portland, Oregon"
  },
];

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="min-h-screen flex items-center bg-white py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            06
          </div>
          <h2 className="text-4xl md:text-5xl font-bold border-b-4 border-primary pb-4 mb-6 inline-block">
            Stories of Transformation
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-muted-foreground mb-8 leading-relaxed">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-muted border-2 border-border flex items-center justify-center text-lg font-bold">
              {current.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="text-left">
              <div className="text-lg font-bold">{current.author}</div>
              <div className="text-sm text-muted-foreground">
                {current.role}, {current.organization}
              </div>
              {current.location && (
                <div className="text-xs text-muted-foreground">{current.location}</div>
              )}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full border-2 transition-colors ${
                  index === activeIndex
                    ? 'bg-primary border-primary'
                    : 'bg-white border-border hover:border-primary'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={previousTestimonial}
              className="gap-2"
            >
              <ChevronLeft className="h-5 w-5" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={nextTestimonial}
              className="gap-2"
            >
              Next
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
