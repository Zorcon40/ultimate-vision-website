import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Dog } from "lucide-react";

export const metadata: Metadata = {
  title: "Guide Dogs",
  description: "Meet Clark Roberts' seven guide dogs and learn about their unique personalities and years of service.",
};

const guideDogs = [
  {
    name: "Uri",
    years: "2003-2010",
    breed: "Yellow Labrador Retriever",
    description: "Uri was Clark's first guide dog, providing faithful service for 7 years. He was a gentle giant who loved to play fetch.",
    current: false,
  },
  {
    name: "Emma",
    years: "2010-2016",
    breed: "Black Labrador Retriever",
    description: "Emma was a spirited and energetic guide who loved to work. She had an incredible ability to navigate busy city streets.",
    current: false,
  },
  {
    name: "Molly",
    years: "2016-2019",
    breed: "Golden Retriever",
    description: "Molly was a sweet and patient guide dog who excelled in crowd work. She loved belly rubs and was always ready to work.",
    current: false,
  },
  {
    name: "Abbie",
    years: "2019-2021",
    breed: "Yellow Labrador Retriever",
    description: "Abbie was a confident and intelligent guide dog. She had a special bond with Clark and was known for her tail wags.",
    current: false,
  },
  {
    name: "Petunia",
    years: "2021-2022",
    breed: "Black Labrador Retriever",
    description: "Petunia was a playful and loving guide dog. Despite her short time in harness, she made a lasting impact.",
    current: false,
  },
  {
    name: "Jasmine",
    years: "2022-2024",
    breed: "Yellow Labrador/Golden Mix",
    description: "Jasmine was a devoted guide dog with a calm demeanor. She loved long walks and was excellent at guiding.",
    current: false,
  },
  {
    name: "Luna",
    years: "2024-Present",
    breed: "Black Labrador Retriever",
    description: "Luna is Clark's current guide dog. She is energetic, intelligent, and already showing great promise in her work.",
    current: true,
  },
];

export default function GuideDogsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Meet the Guide Dogs
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90">
                Clark has had the privilege of working with seven incredible guide dogs over the years. Each one has been a loyal companion and trusted partner.
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/IMG_9375 (2).jpg"
                alt="Children gathered around one of Clark&apos;s guide dogs"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guideDogs.map((dog) => (
              <Card key={dog.name} className={dog.current ? "border-2 border-secondary" : ""}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-full p-3 ${dog.current ? "bg-secondary/10" : "bg-primary/10"}`}>
                      <Dog className={`h-6 w-6 ${dog.current ? "text-secondary" : "text-primary"}`} />
                    </div>
                    {dog.current && (
                      <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{dog.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {dog.years} &bull; {dog.breed}
                  </p>
                  <p className="text-muted-foreground">{dog.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
