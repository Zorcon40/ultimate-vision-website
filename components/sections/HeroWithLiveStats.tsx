import { Button } from "@/components/ui/button";
import { Play, TrendingUp, TrendingDown, Minus } from "lucide-react";
import Link from "next/link";
import type { ImpactStat } from "@/types";

const impactStats: ImpactStat[] = [
  { value: "50K+", label: "Students This Year", trend: "+15% YoY", trendDirection: "up" },
  { value: "500+", label: "Schools Visited", trend: "+8% YoY", trendDirection: "up" },
  { value: "1.2M", label: "Acts of Kindness", trend: "+22% YoY", trendDirection: "up" },
  { value: "25", label: "States Reached", trend: "Expanding", trendDirection: "neutral" },
];

function getTrendIcon(direction?: 'up' | 'down' | 'neutral') {
  switch (direction) {
    case 'up':
      return <TrendingUp className="h-3 w-3" />;
    case 'down':
      return <TrendingDown className="h-3 w-3" />;
    default:
      return <Minus className="h-3 w-3" />;
  }
}

export function HeroWithLiveStats() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 py-32 flex flex-col items-center text-center">
        <div className="max-w-4xl bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            From Sight Loss to<br />Limitless Vision
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Clark Roberts inspires 50,000+ students annually to embrace adversity, choose kindness, and discover their unlimited potential
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 gap-2 text-base px-8">
              <Link href="#story">
                <Play className="h-5 w-5" />
                Watch His Story
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/90 hover:bg-white text-base px-8">
              <Link href="#impact">
                Explore Impact ↓
              </Link>
            </Button>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="max-w-5xl w-full bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mb-2">
                  {stat.label}
                </div>
                {stat.trend && (
                  <div className={`text-xs flex items-center justify-center gap-1 ${
                    stat.trendDirection === 'up' ? 'text-green-600' :
                    stat.trendDirection === 'down' ? 'text-red-600' :
                    'text-muted-foreground'
                  }`}>
                    {getTrendIcon(stat.trendDirection)}
                    {stat.trend}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
