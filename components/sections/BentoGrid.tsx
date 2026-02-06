import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Utensils, Church } from "lucide-react";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import Image from "next/image";

const programs = [
  {
    icon: GraduationCap,
    title: "Schools",
    description: "Kids EDGE program for preschool-2nd grade",
    impact: "30K+ students/year",
    category: "Education"
  },
  {
    icon: Briefcase,
    title: "Corporate",
    description: "Team building & leadership development",
    impact: "200+ companies",
    category: "Business"
  },
  {
    icon: Utensils,
    title: "Dine in Dark",
    description: "Unique empathy-building dining experience",
    impact: "5K+ participants",
    category: "Experience"
  },
  {
    icon: Church,
    title: "Faith Based",
    description: "Messages of hope & trust in the unseen",
    impact: "100+ congregations",
    category: "Spiritual"
  },
];

export function BentoGrid() {
  return (
    <section className="min-h-screen flex items-center bg-muted/30 py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            02
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transform Your Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our proven programs designed to educate, motivate, and inspire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Large Video Tile */}
          <div className="md:col-span-2 lg:row-span-2">
            <Card className="h-full bg-muted border-2 overflow-hidden">
              <CardContent className="p-0 h-full flex items-center justify-center min-h-[400px]">
                <div className="text-center p-8">
                  <div className="mb-4 text-muted-foreground">
                    <Play className="h-16 w-16 mx-auto" />
                  </div>
                  <p className="text-sm text-muted-foreground">Video: Kids EDGE in Action</p>
                  <p className="text-xs text-muted-foreground mt-2">See the program transform lives</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Program Cards */}
          {programs.map((program, index) => (
            <Card key={index} className="bg-white border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <program.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {program.description}
                  </p>
                  <div className="bg-muted/50 border border-border rounded px-3 py-2 text-xs mb-4">
                    <strong>{program.impact}</strong>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-auto">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Testimonial Wide */}
          <div className="md:col-span-2">
            <TestimonialCard
              quote="Clark's presentation was transformational. Our students still talk about it months later, actively choosing kindness every single day."
              author="Dr. Sarah Martinez"
              role="Principal"
              organization="Roosevelt Elementary"
            />
          </div>

          {/* Recent Impact Photo */}
          <div className="md:col-span-2">
            <Card className="h-full overflow-hidden border-2">
              <CardContent className="p-0 h-full">
                <div className="relative h-full min-h-[200px]">
                  <Image
                    src="/images/IMG_0696.jpg"
                    alt="Recent school assembly with 500+ students"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-semibold">Last week at Roosevelt High School</p>
                    <p className="text-white/80 text-xs">500+ students engaged</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Play(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
