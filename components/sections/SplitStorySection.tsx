import Image from "next/image";

export function SplitStorySection() {
  return (
    <section id="story" className="min-h-screen flex items-center bg-white">
      <div className="container px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
            <Image
              src="/images/Headshots/Clark - Headshot.jpg"
              alt="Clark Roberts before diagnosis at age 24"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
              01
            </div>
            <h2 className="text-4xl md:text-5xl font-bold border-b-4 border-primary pb-4 mb-6">
              The Unexpected Gift
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At 24, Clark Roberts received life-altering news: Retinitis Pigmentosa would progressively steal his sight.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              Instead of accepting defeat, Clark chose to see differently. Partnering with guide dogs Karrie and Arby, he discovered that true vision transcends what our eyes can see—it&apos;s found in the heart.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              Today, he teaches thousands that our greatest limitations often become our most powerful gifts.
            </p>

            {/* Mini Timeline */}
            <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-6 mt-8">
              <div className="font-semibold mb-3 text-sm">Journey Highlights:</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>1998 → Diagnosed at 24</div>
                <div>2005 → First Guide Dog (Karrie)</div>
                <div>2010 → Ultimate Vision Founded</div>
                <div>2024 → 50,000+ Students Annually</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
