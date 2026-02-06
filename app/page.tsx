import { HeroWithLiveStats } from "@/components/sections/HeroWithLiveStats";
import { SplitStorySection } from "@/components/sections/SplitStorySection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { ImpactMapSection } from "@/components/sections/ImpactMapSection";
import { ImpactTimeline } from "@/components/sections/ImpactTimeline";
import { CommunityHubSection } from "@/components/sections/CommunityHubSection";
import { CommunityPoll } from "@/components/sections/CommunityPoll";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { CTASplitSection } from "@/components/sections/CTASplitSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <>
      {/* Hero with Live Stats */}
      <HeroWithLiveStats />

      {/* Story Section */}
      <SplitStorySection />

      {/* Quote */}
      <QuoteSection />

      {/* Programs Bento Grid */}
      <BentoGrid />

      {/* Interactive Impact Map */}
      <ImpactMapSection />

      {/* Journey Timeline */}
      <ImpactTimeline />

      {/* Community Hub */}
      <CommunityHubSection />

      {/* Community Poll */}
      <CommunityPoll />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Dual CTA */}
      <CTASplitSection />

      {/* Newsletter */}
      <NewsletterSection />
    </>
  );
}
