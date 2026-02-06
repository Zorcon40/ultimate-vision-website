import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Ultimate Vision's mission to inspire compassion and kindness in communities worldwide. Your donation makes a difference.",
};

export default function DonatePage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Support Our Mission
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90">
              Your generous donation helps us continue inspiring measurable acts of compassion and kindness in communities nationwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="bg-muted p-8 rounded-lg text-center">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Alignmint Donation Portal</h3>
              <p className="text-muted-foreground mb-4">
                Click below to visit our secure donation page hosted by Alignmint.
              </p>
              <a 
                href="https://alignmint-donation-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/90"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Or contact us at <a href="tel:425-891-9008" className="text-primary hover:underline">425-891-9008</a> for other donation methods.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Your Impact</h2>
            <p className="text-muted-foreground">
              Every donation helps us reach more students, support more communities, and spread our message of compassion, kindness, and inclusion. Thank you for being part of our mission.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
