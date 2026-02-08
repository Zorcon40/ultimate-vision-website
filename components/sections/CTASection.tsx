"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#161b2e] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D7A3A]/10 via-transparent to-[#5BBF3A]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#2D7A3A]/20 to-[#5BBF3A]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to See Your World <span className="text-gradient">Differently</span>?
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Whether you&apos;re planning a corporate event, school assembly, or conference, Clark will create an experience your audience will never forget.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#2D7A3A] to-[#5BBF3A] text-white hover:opacity-90 font-semibold px-10 py-6 text-base glow-green"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Check Availability
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-10 py-6 text-base"
              >
                <Link href="mailto:info@ultimate-vision.org" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send a Message
                </Link>
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-2 text-white/60">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#5BBF3A]" />
                </div>
                <span className="text-sm">425-891-9008</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-white/60">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#5BBF3A]" />
                </div>
                <span className="text-sm">info@ultimate-vision.org</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-white/60">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#5BBF3A]" />
                </div>
                <span className="text-sm">Available Worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
