"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerLinks = {
  explore: [
    { name: "Home", href: "/" },
    { name: "About Clark", href: "/about" },
    { name: "Speaking", href: "/#speaking" },
    { name: "Impact", href: "/#impact" },
    { name: "Events", href: "/events" },
  ],
  connect: [
    { name: "Book Clark", href: "/contact" },
    { name: "Media Kit", href: "/media" },
    { name: "News", href: "/news" },
    { name: "Donate", href: "/donate" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

export function CinematicFooter() {
  return (
    <footer className="relative bg-[#050508] border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F4E4BC] flex items-center justify-center">
                <span className="text-[#0a0a0f] font-bold text-xl">UV</span>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white block">Ultimate Vision</span>
                <span className="text-xs text-white/40">Clark Roberts</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Inspiring organizations and individuals to see beyond limitations and discover their ultimate vision.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-[#D4AF37] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-6">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-[#D4AF37] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-white/50">
                <a href="tel:425-891-9008" className="hover:text-[#D4AF37] transition-colors">
                  425-891-9008
                </a>
              </li>
              <li className="text-white/50">
                <a href="mailto:info@ultimate-vision.org" className="hover:text-[#D4AF37] transition-colors">
                  info@ultimate-vision.org
                </a>
              </li>
              <li className="text-white/50">
                Based in Seattle, WA<br />
                Available Worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Ultimate Vision. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-[#FF6B4A]" /> to inspire change
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-white/40 hover:text-white/60 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
