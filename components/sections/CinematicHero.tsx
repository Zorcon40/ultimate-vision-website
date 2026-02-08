"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronDown, Sparkles, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CinematicHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FF6B4A]/15 to-transparent blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm font-medium text-[#D4AF37]">Blind Speaker & Visionary</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6"
            >
              <span className="block">See Without</span>
              <span className="block text-gradient">Looking</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl text-white/60 mb-4 max-w-xl font-body"
            >
              Clark Roberts transforms how organizations see potential—turning adversity into advantage through the power of perspective.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-wrap gap-8 mb-10 py-6 border-t border-b border-white/10"
            >
              {[
                { value: "50K+", label: "Students Inspired" },
                { value: "500+", label: "Organizations" },
                { value: "25", label: "States Reached" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] text-[#0a0a0f] hover:opacity-90 font-semibold px-8 py-6 text-base glow-gold"
              >
                <Link href="/contact">
                  Book Clark Now
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base"
              >
                <Link href="#story" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Watch His Story
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 via-[#FF6B4A]/20 to-transparent rounded-3xl blur-3xl scale-95" />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/Clark Roberts Promo.png"
                  alt="Clark Roberts - Blind Speaker & Visionary"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                
                {/* Quote Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-start gap-3">
                    <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <p className="text-white/80 text-sm italic">
                      "I may have lost my sight, but I gained a vision that transforms lives."
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#0a0a0f] border border-[#D4AF37]/30 rounded-xl p-4 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">15+</div>
                  <div className="text-xs text-white/50">Years Speaking</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-[#0a0a0f] border border-[#FF6B4A]/30 rounded-xl p-4 shadow-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-accent">TEDx</div>
                  <div className="text-xs text-white/50">Featured Speaker</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <Link href="#story" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors">
          <span className="text-xs uppercase tracking-widest">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
