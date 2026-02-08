"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Heart, Globe, Sparkles } from "lucide-react";

const impactStats = [
  { icon: Users, value: "50,000+", label: "Students Reached Annually", subtext: "K-12 through University" },
  { icon: Globe, value: "500+", label: "Organizations Served", subtext: "Fortune 500 to Nonprofits" },
  { icon: Heart, value: "1.2M+", label: "Acts of Kindness Inspired", subtext: "Through Ultimate Vision Programs" },
  { icon: TrendingUp, value: "25", label: "States Reached", subtext: "And Growing" },
];

export function ImpactSection() {
  return (
    <section id="impact" className="relative py-24 lg:py-32 bg-[#161b2e] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[#2D7A3A]/10 to-transparent rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#5BBF3A]/5 to-transparent rounded-full blur-[80px]" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5BBF3A]/10 border border-[#5BBF3A]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#5BBF3A]" />
            <span className="text-sm font-medium text-[#5BBF3A]">Our Impact</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Measuring <span className="text-gradient-accent">Transformation</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Numbers tell a story, but the real impact lives in the changed perspectives and awakened potential of every person we touch.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-[#5BBF3A]/30 transition-all duration-500 text-center h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#5BBF3A]/20 to-[#2D7A3A]/5 border border-[#5BBF3A]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-[#5BBF3A]" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-white/40">
                  {stat.subtext}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { quote: "Clark made me realize that my limitations were just stories I told myself.", author: "Sarah M.", role: "Student, University of Washington" },
            { quote: "Best speaker we&apos;ve ever had. Our team&apos;s mindset shifted permanently.", author: "David Chen", role: "VP, Microsoft" },
            { quote: "He doesn&apos;t just inspire—he gives you the tools to see differently.", author: "Maria Rodriguez", role: "Principal, Lincoln High School" },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5">
              <p className="text-white/70 italic mb-4">&ldquo;{item.quote}&rdquo;</p>
              <div className="text-sm">
                <span className="text-[#5BBF3A] font-medium">{item.author}</span>
                <span className="text-white/40"> • {item.role}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
