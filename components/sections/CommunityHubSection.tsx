import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import type { EventItem, FeedItem } from "@/types";

const upcomingEvents: EventItem[] = [
  {
    date: { day: "15", month: "MAR" },
    title: "Seattle School District Assembly",
    location: "Roosevelt High School",
    time: "9:00 AM - 11:00 AM",
    tags: ["schools", "public"]
  },
  {
    date: { day: "18", month: "MAR" },
    title: "Dine in the Dark Fundraiser",
    location: "Downtown Seattle",
    time: "6:00 PM - 9:00 PM",
    tags: ["tickets-available"]
  },
  {
    date: { day: "22", month: "MAR" },
    title: "Corporate Team Building Workshop",
    location: "Bellevue, WA",
    time: "1:00 PM - 4:00 PM",
    tags: ["corporate", "private"]
  },
];

const feedItems: FeedItem[] = [
  {
    id: "1",
    author: "Lincoln Elementary",
    avatar: "LE",
    timestamp: "2 hours ago",
    content: "Just wrapped an incredible assembly with Clark! Our 500 students are buzzing about choosing kindness every day! 💙✨",
    likes: 47,
    comments: 12
  },
  {
    id: "2",
    author: "Tech Innovations Inc.",
    avatar: "TI",
    timestamp: "5 hours ago",
    content: "Our team building session with Clark completely transformed how we communicate. Eye-opening experience! 🎯",
    likes: 34,
    comments: 8
  },
  {
    id: "3",
    author: "Sarah Martinez",
    avatar: "SM",
    timestamp: "1 day ago",
    content: "Dine in the Dark was absolutely life-changing. I'll never forget the lessons learned through this experience. 🙏",
    likes: 89,
    comments: 23
  },
];

export function CommunityHubSection() {
  return (
    <section className="min-h-screen flex items-center bg-white py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            05
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Join Our Growing Community
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Events Column (2/3) */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-border pb-3">
              📅 Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 text-center bg-muted border-2 border-border rounded-lg p-3 min-w-[80px]">
                        <div className="text-3xl font-bold">{event.date.day}</div>
                        <div className="text-sm text-muted-foreground">{event.date.month}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {event.location} • {event.time}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`text-xs px-2 py-1 rounded ${
                                tag === 'tickets-available'
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-muted text-muted-foreground'
                              }`}
                            >
                              {tag.toUpperCase()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full">
                View All Events →
              </Button>
            </div>
          </div>

          {/* Feed Column (1/3) */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-border pb-3">
              🔴 Live Updates
            </h3>
            <div className="space-y-4">
              {feedItems.map((item) => (
                <Card key={item.id} className="border">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">
                        {item.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm">{item.author}</div>
                        <div className="text-xs text-muted-foreground">{item.timestamp}</div>
                      </div>
                    </div>
                    <p className="text-sm mb-3">{item.content}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" /> {item.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" /> {item.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="h-3 w-3" /> Share
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" size="sm" className="w-full">
                See All Updates →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
