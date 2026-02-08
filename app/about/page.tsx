import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Briefcase, Heart, Church, Utensils, Sparkles, ArrowRight, Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ultimate Vision's mission, vision, and the programs we offer to inspire compassion and kindness.",
};

const programs = [
  {
    icon: GraduationCap,
    title: "Schools",
    image: "/images/IMG_0696.jpg",
    description:
      "We teach students to live a life where they have a growth mindset, choosing kindness and actions that support and encourage others to be inclusive and to celebrate diversity, in themselves and in their peers. We challenge them to continue to grow into confident, compassionate leaders who live and lead through adversity.",
  },
  {
    icon: Briefcase,
    title: "Corporate",
    image: "/images/IMG_3881.HEIC.png",
    description:
      "Rediscover the power and the importance of working as part of a team, discover tools that are useful in not only your professional lives, but in your personal lives as well! Experience group exercises that challenge you, are fun and give opportunity to take a step back and re-examine your approach in stressful or challenging situations.",
  },
  {
    icon: Utensils,
    title: "Dine in the Dark",
    image: "/images/IMG_1723.heic.png",
    description:
      'You and your group can participate in this unique opportunity. You will be challenged with activities and experiences that will bring you to a greater understanding of empathy and understanding (all under blindfold). Discover that the best "sense" that you can have in life is your "sense of humor" as you Dine in the Dark.',
  },
  {
    icon: Church,
    title: "Faith Based Organizations",
    image: null,
    description:
      'Do you struggle with trust and hope when your plans get redirected? Clark lost his sight at age 24 and had to learn to trust and to find hope in the "unseen." He will tell you that God gave him the gift of sight-loss and that because of this, he has been able to share and encourage others in an entirely new way.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#161b2e] pt-44 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#2D7A3A]/15 to-transparent blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#5BBF3A]/10 to-transparent blur-[80px]" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5BBF3A]/10 border border-[#5BBF3A]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#5BBF3A]" />
              <span className="text-sm font-medium text-[#5BBF3A]">About Us</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Educate. Motivate. <span className="text-gradient">Inspire.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Ultimate Vision is on a mission to inspire measurable acts of compassion and kindness in communities around the world. Communities that you work in and your children walk, play and engage in.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-[#2D7A3A]/10 border border-[#2D7A3A]/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#2D7A3A]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We guide future leaders to see life through a lens of Compassion, Kindness, and Empathy, being Confident, embracing their potential to live a life of significance.
              </p>
            </div>
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-[#5BBF3A]/10 border border-[#5BBF3A]/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#5BBF3A]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We inspire youth to identify their potential through a greater understanding of Kindness, Compassion, and Inclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D7A3A]/10 border border-[#2D7A3A]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#2D7A3A]" />
              <span className="text-sm font-medium text-[#2D7A3A]">What We Do</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3A5C] mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book us in your school, business, or place of worship, and allow us to Educate, Motivate, and Inspire, meeting you at your greatest need.
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                  program.image ? "grid md:grid-cols-2" : ""
                }`}
              >
                {program.image && (
                  <div className={`relative aspect-[4/3] md:aspect-auto ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-xl bg-[#2D7A3A]/10 border border-[#2D7A3A]/20 flex items-center justify-center mb-5">
                    <program.icon className="w-6 h-6 text-[#2D7A3A]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1B3A5C] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scholarship & Miles of Smiles */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <Image
                  src="/images/Logo/Arby Paws Scholarship.jpg"
                  alt="Arby&apos;s P.A.W.S. Scholarship logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#5BBF3A]/10 border border-[#5BBF3A]/20 flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-6 h-6 text-[#5BBF3A]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1B3A5C] mb-2">
                Arby&apos;s P.A.W.S. Scholarship
              </h3>
              <p className="text-gray-600">
                Recognizing students who demonstrate exceptional kindness and creativity.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <Image
                  src="/images/Logo/Miles of Smiles.png"
                  alt="Miles of Smiles program logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#5BBF3A]/10 border border-[#5BBF3A]/20 flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-6 h-6 text-[#5BBF3A]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1B3A5C] mb-2">
                Miles of Smiles
              </h3>
              <p className="text-gray-600">
                Spreading joy and kindness one mile at a time through community outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Clark CTA */}
      <section className="relative py-20 lg:py-28 bg-[#161b2e] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-[#2D7A3A]/10 to-transparent rounded-full blur-[80px] -translate-y-1/2" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/Headshots/Clark - Headshot.jpg"
                alt="Clark Roberts"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161b2e]/60 via-transparent to-transparent" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Meet <span className="text-gradient">Clark Roberts</span>
              </h2>
              <div className="space-y-4 text-lg text-white/70 leading-relaxed">
                <p>
                  Clark lost his sight at age 24 to Retinitis Pigmentosa. He discovered that when life hits, you have to learn how to embrace the challenge, find your potential and live life to its fullest!
                </p>
                <p>
                  Clark is a subject matter expert who has dedicated his life to sharing a message of hope, resiliency, and encouragement. He shows each person how to reach beyond their limitations to live a life of significance, one with compassion, kindness and confidence.
                </p>
              </div>
              <Link
                href="/about/clark-roberts"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg bg-gradient-to-r from-[#2D7A3A] to-[#5BBF3A] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Read Clark&apos;s Full Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
