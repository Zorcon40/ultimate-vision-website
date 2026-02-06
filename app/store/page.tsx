import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Store",
  description: "Support Ultimate Vision through our donation-based store. All proceeds go directly to funding our programs.",
};

const products = [
  {
    id: "gift-basket",
    name: "Ultimate Vision Gift Basket",
    description: "A curated gift basket including Clark's books, coloring activities, crayons, and a plush guide dog. Perfect for young readers!",
    suggestedDonation: 50,
    image: "/images/IMG_5115.jpg.png",
    externalLink: null,
  },
  {
    id: "book",
    name: "Wags to You - Short & Long Dog Tails",
    description: "Clark L. Roberts' heartwarming book about the bond between guide dogs and their handlers. A story of trust, love, and adventure.",
    suggestedDonation: 20,
    image: "/images/IMG_5115.jpg.png",
    externalLink: "https://www.amazon.com",
  },
  {
    id: "coloring-book",
    name: "A Guide Dog Named Arby - Activity Book",
    description: "A jumbo coloring and activity book featuring Arby the guide dog. Fun and educational for kids of all ages!",
    suggestedDonation: 15,
    image: "/images/IMG_5115.jpg.png",
    externalLink: null,
  },
];

export default function StorePage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ultimate Vision Store
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90">
              All items are available through donation. Your support helps us continue inspiring compassion and kindness in communities nationwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col">
                <div className="relative aspect-square bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">
                    {product.description}
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Suggested Donation: <span className="font-semibold text-foreground">${product.suggestedDonation}</span>
                    </p>
                    {product.externalLink ? (
                      <a
                        href={product.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 w-full"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View on Amazon
                      </a>
                    ) : (
                      <Link
                        href={`/donate?product=${product.id}`}
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 w-full"
                      >
                        <Heart className="mr-2 h-4 w-4" />
                        Donate to Receive
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <strong>501(c)(3) Notice:</strong> Ultimate Vision is a registered non-profit organization. 
              All donations are tax-deductible to the fullest extent allowed by law.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
