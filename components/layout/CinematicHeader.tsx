"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Speaking", href: "/#speaking" },
  { name: "Impact", href: "/#impact" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export function CinematicHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F4E4BC] flex items-center justify-center">
                <span className="text-[#0a0a0f] font-bold text-lg">UV</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-xl font-bold text-white">Ultimate Vision</span>
                <span className="block text-xs text-white/40 -mt-1">Clark Roberts</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#FF6B4A] group-hover:w-4/5 transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* CTA & Contact */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:425-891-9008"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>425-891-9008</span>
              </a>
              <Button
                asChild
                className="bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] text-[#0a0a0f] hover:opacity-90 font-semibold"
              >
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#0a0a0f]/95 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="relative flex flex-col items-center justify-center h-full gap-8">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-display font-bold text-white hover:text-gradient transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] text-[#0a0a0f] hover:opacity-90 font-semibold px-8"
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Book Clark Now
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
