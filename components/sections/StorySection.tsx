"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Heart, Target, Sparkles } from "lucide-react";

const storyPoints = [
  {
    icon: Eye,
    title: "Losing Sight",
    description: "At 24, Clark faced every person&apos;s nightmare—complete vision loss. But instead of surrendering to darkness, he discovered something extraordinary.",
  },
  {
    icon: Target,
    title: "Finding Vision",
    description: "Without sight, Clark developed an unparalleled ability to perceive human potential—the invisible barriers holding people back and the limitless possibilities beyond.",
  },
  {
    icon: Heart,
    title: "Transforming Lives",
    description: "Today, Clark stands before Fortune 500 companies, universities, and schools, helping thousands see their world—and themselves—like never before.",
  },
];

export function StorySection() {
  return (
    <section id="story" className="relative py-24 lg:py-32 bg-[#161b2e] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#2D7A3A]/5 to-transparent rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-l from-[#2D7A3A]/5 to-transparent rounded-full blur-[80px]" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5BBF3A]/10 border border-[#5BBF3A]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#5BBF3A]" />
            <span className="text-sm font-medium text-[#5BBF3A]">The Journey</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            From <span className="text-gradient">Darkness</span> to Vision
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            The story of how one person&apos;s greatest challenge became their greatest gift to the world.
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D7A3A]/20 to-transparent rounded-3xl blur-3xl scale-90" />
              
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/IMG_0696.jpg"
                  alt="Clark Roberts speaking at an event"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b2e]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card - Fixed position */}
              <motion.div
                className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-[#2D7A3A] border border-[#5BBF3A]/30 rounded-2xl p-4 lg:p-6 shadow-2xl z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#5BBF3A] mb-1">2010</div>
                <div className="text-xs lg:text-sm text-white/50">Vision Journey Began</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Story Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2D7A3A]/20 to-[#5BBF3A]/5 border border-[#5BBF3A]/30 flex items-center justify-center group-hover:border-[#5BBF3A]/60 transition-colors">
                    <point.icon className="w-6 h-6 text-[#5BBF3A]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#5BBF3A] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#2D7A3A]/10 to-transparent border border-[#5BBF3A]/20"
            >
              <p className="text-lg italic text-white/80 mb-4">
                &ldquo;I don&apos;t see with my eyes anymore—I see with my heart. And when you see with your heart, you see things that were invisible before.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D7A3A] to-[#5BBF3A]" />
                <div>
                  <div className="font-semibold text-white">Clark Roberts</div>
                  <div className="text-sm text-white/50">Founder, Ultimate Vision</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
