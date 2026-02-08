import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ExternalLink, Sparkles, ArrowRight, CalendarDays } from "lucide-react";
import { getAllEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events from Ultimate Vision. Join us for workshops, speaking engagements, and special programs.",
};

export default async function EventsPage() {
  const events = await getAllEvents();

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
              <span className="text-sm font-medium text-[#5BBF3A]">Upcoming Events</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Join Us at an <span className="text-gradient">Event</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Workshops, speaking engagements, Dine in the Dark experiences, and special programs — find an event near you.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {events.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <div
                  key={event.slug}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {event.image && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 lg:p-8 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-bold text-[#1B3A5C] mb-3">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#2D7A3A]" />
                        <time dateTime={event.date}>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#2D7A3A]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                      {event.description}
                    </p>
                    {event.registrationLink && (
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#2D7A3A] to-[#5BBF3A] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                      >
                        Register Now
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-lg mx-auto text-center py-16">
              <div className="w-20 h-20 rounded-2xl bg-[#2D7A3A]/10 border border-[#2D7A3A]/20 flex items-center justify-center mx-auto mb-6">
                <CalendarDays className="w-10 h-10 text-[#2D7A3A]" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#1B3A5C] mb-3">
                No Upcoming Events
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We&apos;re planning something great. Check back soon or reach out to book Clark for your next event.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#2D7A3A] to-[#5BBF3A] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Book an Event
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Past Events / Gallery Teaser */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4">
              Event Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A look back at some of our most impactful gatherings.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/images/Gala/Ultimate Vision Gala_Event_10_12_24-44.jpg",
              "/images/Gala/Ultimate Vision Gala_Dinner_10_12_24-13.jpg",
              "/images/Gala/Ultimate Vision Gala_Event_10_12_24-54.jpg",
              "/images/Gala/Ultimate Vision Gala_Dessert Table_10_12_24.jpg",
              "/images/Gala/Ultimate Vision Gala_Event_10_12_24-63.jpg",
              "/images/Gala/Ultimate Vision Gala_Dinner_10_12_24-24.jpg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Event highlight ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#161b2e]/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-24 bg-[#161b2e] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-[#2D7A3A]/10 to-transparent rounded-full blur-[80px] -translate-y-1/2" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Want Clark at <span className="text-gradient">Your Event?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-8">
            From school assemblies to corporate retreats, Clark brings a message that transforms perspectives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#2D7A3A] to-[#5BBF3A] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
