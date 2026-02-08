"use client";

import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Clark's keynote at our annual conference was the highlight of the entire event. He doesn't just speak—he transforms the room. Six months later, employees are still referencing his message on seeing potential in others.",
    author: "Jennifer Walsh",
    role: "Chief People Officer",
    company: "Salesforce",
    rating: 5,
  },
  {
    quote: "I've booked hundreds of speakers over my career. Clark is in a category of his own. His ability to connect with our sales team and help them see past rejection was nothing short of remarkable.",
    author: "Marcus Thompson",
    role: "VP of Sales",
    company: "Oracle",
    rating: 5,
  },
  {
    quote: "After Clark spoke to our student body, we saw a measurable decrease in bullying incidents and an increase in peer support. His message of kindness as strength actually changed our school culture.",
    author: "Dr. Amanda Chen",
    role: "Superintendent",
    company: "Bellevue School District",
    rating: 5,
  },
  {
    quote: "Blindfolded and vulnerable, Clark demonstrated what true leadership looks like. Our executives were deeply moved—several said it was the most impactful professional development experience of their careers.",
    author: "Robert Kim",
    role: "CEO",
    company: "Pacific Northwest Healthcare",
    rating: 5,
  },
  {
    quote: "We brought Clark in for our diversity and inclusion summit, but what we got was so much more. He helped every person in that room examine their own unconscious biases about ability and potential.",
    author: "Lisa Morrison",
    role: "Head of DEI",
    company: "Amazon",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-32 bg-[#0d0d12] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#D4AF37]/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Words That <span className="text-gradient">Change</span> Lives
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what leaders, educators, and organizations say about working with Clark.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E4BC] flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#0a0a0f]" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-body">
                "{testimonials[current].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#FF6B4A]/20 border border-[#D4AF37]/30" />
                <div>
                  <div className="text-lg font-semibold text-white">
                    {testimonials[current].author}
                  </div>
                  <div className="text-white/50">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-[#D4AF37]" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
