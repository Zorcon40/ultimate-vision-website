"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/about#programs" },
  { name: "Impact", href: "/#impact" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export function MinimalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Logo/UV Full Logo.png"
            alt="Ultimate Vision"
            width={120}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Book Now</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container py-4 flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 mt-2">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Book Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
