import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Heart, Church, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ultimate Vision's mission, vision, and the programs we offer to inspire compassion and kindness.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              About Ultimate Vision
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90">
              Empowering communities through compassion, kindness, and inclusive education.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                Ultimate Vision is dedicated to inspiring measurable acts of compassion, kindness, and empathy in communities nationwide. Through innovative programs and engaging presentations, we empower individuals to see beyond limitations and embrace their full potential.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                A world where every individual, regardless of ability or background, is valued, included, and empowered to make a positive difference in their community through acts of kindness and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Programs</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive programs designed to educate, motivate, and inspire.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card id="schools" className="overflow-hidden">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/IMG_0696.jpg"
                  alt="Clark speaking at a school assembly"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <GraduationCap className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Schools</h3>
                <p className="text-muted-foreground">
                  Kids EDGE program for preschool to 2nd grade, prioritizing kindness and inclusion.
                </p>
              </CardContent>
            </Card>

            <Card id="corporate" className="overflow-hidden">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/IMG_3881.HEIC.png"
                  alt="Corporate team building with blindfolds"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <Briefcase className="mb-4 h-8 w-8 text-secondary" />
                <h3 className="text-xl font-semibold mb-2">Corporate</h3>
                <p className="text-muted-foreground">
                  Team building and leadership development programs for businesses.
                </p>
              </CardContent>
            </Card>

            <Card id="dine-in-the-dark" className="overflow-hidden">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/IMG_1723.heic.png"
                  alt="Dine in the Dark event with blindfolded guests"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <Utensils className="mb-4 h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Dine in the Dark</h3>
                <p className="text-muted-foreground">
                  A unique dining experience under blindfold to build empathy and understanding.
                </p>
              </CardContent>
            </Card>

            <Card id="faith-based">
              <CardContent className="pt-6">
                <Church className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Faith Based</h3>
                <p className="text-muted-foreground">
                  Messages of hope and trust in the unseen for religious communities.
                </p>
              </CardContent>
            </Card>

            <Card id="scholarships" className="overflow-hidden">
              <div className="relative aspect-[3/2] bg-white flex items-center justify-center p-4">
                <Image
                  src="/images/Logo/Arby Paws Scholarship.jpg"
                  alt="Arby&apos;s P.A.W.S. Scholarship logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <CardContent className="pt-6">
                <Heart className="mb-4 h-8 w-8 text-secondary" />
                <h3 className="text-xl font-semibold mb-2">Arby&apos;s P.A.W.S. Scholarship</h3>
                <p className="text-muted-foreground">
                  Recognizing students who demonstrate exceptional kindness and creativity.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative aspect-[3/2] bg-white flex items-center justify-center p-4">
                <Image
                  src="/images/Logo/Miles of Smiles.png"
                  alt="Miles of Smiles program logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <CardContent className="pt-6">
                <Heart className="mb-4 h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Miles of Smiles</h3>
                <p className="text-muted-foreground">
                  Spreading joy and kindness one mile at a time through community outreach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clark CTA */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
              <Image
                src="/images/Headshots/Clark - Headshot.jpg"
                alt="Clark Roberts"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Meet Clark Roberts</h2>
              <p className="text-lg text-muted-foreground">
                Clark lost his sight at age 24 to Retinitis Pigmentosa but gained a deeper vision for life. He has dedicated his life to sharing a message of hope, resiliency, and encouragement.
              </p>
              <Link href="/about/clark-roberts" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Read Clark&apos;s Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
