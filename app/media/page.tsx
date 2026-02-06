import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Media",
  description: "Videos, press mentions, and media coverage of Ultimate Vision and Clark Roberts.",
};

const pressMentions = [
  {
    title: "Local Non-Profit Inspires Community Through Unique Programs",
    publication: "Community News",
    date: "2024",
    link: "#",
  },
  {
    title: "Blind Speaker Motivates Students to Embrace Differences",
    publication: "Education Weekly",
    date: "2024",
    link: "#",
  },
];

export default function MediaPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Media & Press
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90">
              Videos, press coverage, and media appearances featuring Ultimate Vision.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video - Sizzle Reel */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-white">Featured Video</h2>
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video
                controls
                poster="/images/Clark Roberts Promo.png"
                className="w-full h-full object-cover"
                preload="metadata"
              >
                <source src="/videos/Axe Throwing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">Clark Roberts: The Full Testimony</h3>
              <p className="text-white/70 mt-1">Watch Clark share his inspiring journey of turning sight loss into a gift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">In Action</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/IMG_0696.jpg" alt="Clark speaking at a school assembly" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/IMG_0705.jpg" alt="Kindness is Cool - classroom visit" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/IMG_1723.heic.png" alt="Dine in the Dark event" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/IMG_1093.HEIC.png" alt="Students learning braille" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/IMG_3881.HEIC.png" alt="Corporate team building exercise" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/IMG_9375 (2).jpg" alt="Children meeting a guide dog" fill className="object-cover hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Press Mentions</h2>
          <div className="space-y-4 max-w-3xl">
            {pressMentions.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.publication} • {item.date}
                    </p>
                  </div>
                  <a
                    href={item.link}
                    className="text-primary hover:underline text-sm flex items-center"
                  >
                    Read <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
            <p className="text-muted-foreground mb-6">
              Interested in featuring Clark or Ultimate Vision? We&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
