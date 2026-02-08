"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Users, Mic2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const speakingCategories = [
  {
    icon: Building2,
    title: "Corporate Keynotes",
    description: "Transform organizational culture with powerful messages on resilience, inclusion, and seeing potential in every team member.",
    topics: ["Leadership Through Adversity", "Building Inclusive Cultures", "Innovation Beyond Limits"],
    color: "from-[#D4AF37] to-[#F4E4BC]",
  },
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    description: "Inspire the next generation to embrace challenges, practice compassion, and discover their unique vision for impact.",
    topics: ["Embracing Your Journey", "Kindness as Strength", "Potential Without Limits"],
    color: "from-[#FF6B4A] to-[#FF8E6B]",
  },
  {
    icon: Users,
    title: "Conferences & Events",
    description: "Elevate your event with a speaker who doesn't just talk—he creates transformational moments that audiences never forget.",
    topics: ["TED-Style Keynotes", "Panel Moderation", "Fireside Chats"],
    color: "from-[#D4AF37] to-[#FF6B4A]",
  },
  {
    icon: Mic2,
    title: "Virtual & Hybrid",
    description: "Engaging digital experiences that break through the screen barrier and create genuine connection with remote audiences.",
    topics: ["Live Virtual Keynotes", "Recorded Content", "Interactive Workshops"],
    color: "from-[#F4E4BC] to-[#D4AF37]",
  },
];

export function SpeakingSection() {
  return (
    <section id="speaking" className="relative py-32 bg-[#0d0d12] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#D4AF37]/5 to-transparent rounded-full blur-[120px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm font-medium text-[#D4AF37]">Speaking Engagements</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Where Words <span className="text-gradient">Transform</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From Fortune 500 boardrooms to university auditoriums, Clark delivers experiences that reshape how audiences see themselves and their world.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {speakingCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-7 h-7 text-[#0a0a0f]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-white/60">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Topics */}
                <div className="space-y-3">
                  {category.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] hover:gap-4 transition-all"
                  >
                    Inquire About Availability
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] text-[#0a0a0f] hover:opacity-90 font-semibold px-10 py-6 text-base glow-gold"
          >
            <Link href="/contact">
              Book Clark for Your Event
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
