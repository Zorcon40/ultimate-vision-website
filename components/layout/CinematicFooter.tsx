"use client";

import Link from "next/link";
import Image from "next/image";
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
    <footer className="relative bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-16 w-auto">
                <Image
                  src="/images/Logo/UV Full Logo.png"
                  alt="Ultimate Vision"
                  width={200}
                  height={64}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Inspiring organizations and individuals to see beyond limitations and discover their ultimate vision.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#2D7A3A] hover:border-[#2D7A3A]/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#2D7A3A] hover:border-[#2D7A3A]/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#2D7A3A] hover:border-[#2D7A3A]/30 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#2D7A3A] hover:border-[#2D7A3A]/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[#1B3A5C] font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-[#2D7A3A] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[#1B3A5C] font-semibold mb-6">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-[#2D7A3A] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#1B3A5C] font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-500">
                <a href="tel:425-891-9008" className="hover:text-[#2D7A3A] transition-colors">
                  425-891-9008
                </a>
              </li>
              <li className="text-gray-500">
                <a href="mailto:info@ultimate-vision.org" className="hover:text-[#2D7A3A] transition-colors">
                  info@ultimate-vision.org
                </a>
              </li>
              <li className="text-gray-500">
                Based in Seattle, WA<br />
                Available Worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ultimate Vision. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-[#2D7A3A]" /> to inspire change
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-400 hover:text-gray-600 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
