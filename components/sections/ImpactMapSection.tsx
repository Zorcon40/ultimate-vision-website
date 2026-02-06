import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const states = [
  { name: "Washington", students: "2,500", left: "15%", top: "25%" },
  { name: "Oregon", students: "1,800", left: "20%", top: "35%" },
  { name: "Illinois", students: "3,200", left: "45%", top: "35%" },
  { name: "New York", students: "5,100", left: "75%", top: "40%" },
  { name: "Arizona", students: "2,900", left: "30%", top: "55%" },
  { name: "Georgia", students: "4,200", left: "60%", top: "68%" },
  { name: "Massachusetts", students: "3,600", left: "85%", top: "50%" },
];

export function ImpactMapSection() {
  return (
    <section id="impact" className="min-h-screen flex items-center bg-white py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            03
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Nationwide Reach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click any state to see our impact stories and upcoming events
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative bg-muted/30 border-2 border-dashed border-border rounded-xl p-8 md:p-16 min-h-[500px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-sm">Interactive USA Map</p>
              <p className="text-xs mt-2">Showing visits across 25 states</p>
            </div>
            
            {/* Map Markers */}
            {states.map((state, index) => (
              <div
                key={index}
                className="absolute group cursor-pointer"
                style={{ left: state.left, top: state.top }}
                title={`${state.name}: ${state.students} students`}
              >
                <MapPin className="h-6 w-6 text-primary animate-bounce" />
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {state.name}: {state.students} students
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View Full Impact Report →
          </Button>
        </div>
      </div>
    </section>
  );
}
