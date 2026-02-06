import type { TimelineItem } from "@/types";

const timelineItems: TimelineItem[] = [
  {
    year: "1998",
    title: "The Diagnosis",
    description: "At age 24, Clark Roberts was diagnosed with Retinitis Pigmentosa, beginning an unexpected journey that would transform thousands of lives."
  },
  {
    year: "2005",
    title: "First Guide Dog",
    description: "Karrie became Clark's first guide dog, opening doors to new independence and a partnership that would inspire countless others."
  },
  {
    year: "2010",
    title: "Ultimate Vision Founded",
    description: "Clark turned personal adversity into a mission to inspire others, founding Ultimate Vision to spread compassion and kindness."
  },
  {
    year: "2015",
    title: "Kids EDGE Launch",
    description: "The Kids EDGE program launches, reaching the first 10,000 students with innovative kindness curriculum and hands-on learning."
  },
  {
    year: "2020",
    title: "Virtual Expansion",
    description: "During the pandemic, Ultimate Vision adapted to reach students virtually, maintaining connection during isolation."
  },
  {
    year: "2024",
    title: "50,000+ Students",
    description: "Ultimate Vision expands to 25 states, reaching over 50,000 students annually and inspiring 1.2 million acts of kindness."
  },
];

export function ImpactTimeline() {
  return (
    <section className="min-h-screen flex items-center bg-muted/30 py-20">
      <div className="container px-4">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            04
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            A Journey of Impact
          </h2>
        </div>

        <div className="max-w-4xl">
          <div className="relative border-l-4 border-primary pl-8 md:pl-12 ml-4 md:ml-8 space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Dot */}
                <div className="absolute -left-[43px] md:-left-[55px] w-6 h-6 rounded-full bg-primary border-4 border-white shadow" />
                
                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {item.year} - {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
