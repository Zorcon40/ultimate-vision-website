import type { Metadata } from "next";
import { Phone, Mail, Clock, Send, Sparkles, MapPin, GraduationCap, Briefcase, Church, Utensils, Users, Newspaper } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ultimate Vision. We're here to answer your questions about programs, bookings, and how to get involved.",
};

const services = [
  { icon: GraduationCap, label: "School presentations & assemblies" },
  { icon: Briefcase, label: "Corporate team building events" },
  { icon: Church, label: "Faith-based group speaking" },
  { icon: Utensils, label: "Dine in the Dark events" },
  { icon: Users, label: "Community outreach programs" },
  { icon: Newspaper, label: "Media and press inquiries" },
];

export default function ContactPage() {
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
              <span className="text-sm font-medium text-[#5BBF3A]">Get in Touch</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              We&apos;d love to hear from you. Reach out to learn more about our programs or to book Clark for your next event.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form - Takes 3 cols */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#1B3A5C] mb-2">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D7A3A]/50 focus:border-[#2D7A3A] transition-colors text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#1B3A5C] mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D7A3A]/50 focus:border-[#2D7A3A] transition-colors text-base"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1B3A5C] mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D7A3A]/50 focus:border-[#2D7A3A] transition-colors text-base"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#1B3A5C] mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D7A3A]/50 focus:border-[#2D7A3A] transition-colors text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1B3A5C] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your event or question..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D7A3A]/50 focus:border-[#2D7A3A] transition-colors text-base resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#2D7A3A] to-[#5BBF3A] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar - Takes 2 cols */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-8">
                Contact Info
              </h2>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#2D7A3A]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#2D7A3A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B3A5C] mb-1">Phone</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-600 hover:text-[#2D7A3A] transition-colors text-lg">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#2D7A3A]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#2D7A3A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B3A5C] mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-[#2D7A3A] transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#2D7A3A]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#2D7A3A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B3A5C] mb-1">Office Hours</h3>
                    <p className="text-gray-600">Mon – Fri: 9:00 AM – 5:00 PM PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#2D7A3A]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#2D7A3A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B3A5C] mb-1">Location</h3>
                    <p className="text-gray-600">Based in Seattle, WA<br />Available Worldwide</p>
                  </div>
                </div>
              </div>

              {/* Ways We Can Help */}
              <div className="p-6 rounded-2xl bg-[#161b2e] border border-white/10">
                <h3 className="font-display text-lg font-bold text-white mb-4">Ways We Can Help</h3>
                <ul className="space-y-3">
                  {services.map((service, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#2D7A3A]/20 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-4 h-4 text-[#5BBF3A]" />
                      </div>
                      <span className="text-white/70 text-sm">{service.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
