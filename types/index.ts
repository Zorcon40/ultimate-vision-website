export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  image?: string;
  published: boolean;
}

export interface Event {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  registrationLink?: string;
  published: boolean;
}

export interface GuideDog {
  name: string;
  years: string;
  breed: string;
  description: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  donationAmount: string;
  type: 'book' | 'ebook' | 'merchandise' | 'audio';
  link?: string;
}

// New types for immersive redesign
export interface ImpactStat {
  value: string;
  label: string;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ProgramFeature {
  icon: string; // lucide icon name
  title: string;
  description: string;
  impact: string;
  category: string;
}

export interface EventItem {
  date: {
    day: string;
    month: string;
  };
  title: string;
  location: string;
  time: string;
  tags: string[];
}

export interface FeedItem {
  id: string;
  author: string;
  avatar: string;
  timestamp: string;
  content: string;
  likes: number;
  comments: number;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
  location?: string;
}

export interface PollOption {
  text: string;
  percentage: number;
}

export type ProgramCategory = 'schools' | 'corporate' | 'dine-in-dark' | 'faith-based';
export type EventTag = 'schools' | 'corporate' | 'dine-in-dark' | 'faith-based' | 'public' | 'private' | 'tickets-available';
export type TrendDirection = 'up' | 'down' | 'neutral';
