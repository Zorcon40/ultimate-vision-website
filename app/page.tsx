import { CinematicHero } from "@/components/sections/CinematicHero";
import { StorySection } from "@/components/sections/StorySection";
import { SpeakingSection } from "@/components/sections/SpeakingSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <StorySection />
      <SpeakingSection />
      <ImpactSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
