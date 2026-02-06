import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Clark & Karrie Roberts",
  description: "Meet Clark Roberts, Executive Director and founder of Ultimate Vision, and Karrie Roberts, co-founder and creative director.",
};

export default function ClarkRobertsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Meet Clark & Karrie
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
              <Image
                src="/images/Headshots/Clark - Headshot.jpg"
                alt="Clark Roberts"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Clark Roberts</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hey everyone, my name is Clark Roberts. I am the Executive Director and founder of Ultimate Vision. I am a husband, a father, and a PaPa.
                </p>
                <p>
                  I love dogs and am thankful for each of the 7 guide dogs I have had. I am also an outdoor enthusiast who loves to snow ski, water ski, hike, and more.
                </p>
                <p className="font-semibold text-foreground">
                  Oh, and did I mention that I&apos;m blind?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Karrie Roberts</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hi, my name is Karrie Roberts. I am the co-founder of Ultimate Vision in charge of creative content. I am a wife, a mother, and a Gramma.
                </p>
                <p>
                  I love the water and swimming, and I love to write stories, poetry, songs, and children&apos;s books.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square bg-muted rounded-lg overflow-hidden">
              <Image
                src="/images/IMG_0705.jpg"
                alt="Clark and Karrie Roberts in a classroom with Kindness is Cool sign"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Clark&apos;s Story</h2>
            <div className="space-y-4 text-lg text-white/80 mb-10">
              <p>
                At age 24 Clark lost his sight to Retinitis Pigmentosa. He discovered that when life hits, you have to learn how to embrace the challenge, find your potential and live life to its fullest!
              </p>
              <p>
                Clark is a subject matter expert who has dedicated his life to sharing a message of hope, resiliency, and encouragement.
              </p>
            </div>
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
          </div>
        </div>
      </section>
    </>
  );
}
