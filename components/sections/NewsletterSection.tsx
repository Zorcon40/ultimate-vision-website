"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
  };

  return (
    <section className="min-h-screen flex items-center bg-white py-20">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 border-b-4 border-primary pb-4 inline-block">
            Stay Inspired
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join 10,000+ subscribers receiving stories of kindness, program updates, and inspiration delivered monthly
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 text-base"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 px-10 h-12 text-base"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mb-10">
            We respect your privacy. Unsubscribe anytime.
          </p>

          <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-6">
            <p className="font-semibold mb-3">What you&apos;ll receive:</p>
            <p className="text-sm text-muted-foreground">
              ✓ Monthly impact stories • ✓ Event invitations • ✓ Exclusive content • ✓ Acts of kindness ideas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
