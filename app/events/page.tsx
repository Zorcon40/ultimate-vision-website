import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { getAllEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events from Ultimate Vision. Join us for workshops, speaking engagements, and special programs.",
};

export default async function EventsPage() {
  const events = await getAllEvents();

  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Events
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90">
              Join us for upcoming workshops, speaking engagements, and special programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          {events.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <Card key={event.slug} className="flex flex-col overflow-hidden">
                  {event.image && (
                    <div className="relative aspect-video">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={event.date}>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {event.description}
                    </p>
                    {event.registrationLink && (
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        Register <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No upcoming events scheduled.</p>
              <p className="text-sm text-muted-foreground">
                Check back soon or <Link href="/contact" className="text-primary hover:underline">contact us</Link> to book an event.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
