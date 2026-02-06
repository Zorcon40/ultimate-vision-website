"use client";

import { Button } from "@/components/ui/button";
import type { PollOption } from "@/types";

const pollOptions: PollOption[] = [
  { text: "Helped someone in need", percentage: 42 },
  { text: "Received unexpected kindness", percentage: 28 },
  { text: "Witnessed an act of compassion", percentage: 18 },
  { text: "Taught kindness to others", percentage: 12 },
];

export function CommunityPoll() {
  return (
    <section className="min-h-screen flex items-center bg-muted/30 py-20">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 border-2 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Your Voice Matters
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            How has kindness impacted your community this week?
          </p>

          <div className="space-y-4 mb-6">
            {pollOptions.map((option, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2 px-4 py-3 border-2 border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <span className="text-sm font-medium">{option.text}</span>
                  <span className="font-bold text-primary">{option.percentage}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden border border-border">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${option.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mb-6">
            1,247 community votes • Poll closes in 3 days
          </p>

          <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
            Share Your Experience
          </Button>
        </div>
      </div>
    </section>
  );
}
