"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 shadow-2xl transition-transform hover:scale-105"
    >
      <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-6 text-base">
        <Calendar className="h-5 w-5" />
        Book Clark
      </Button>
    </Link>
  );
}
