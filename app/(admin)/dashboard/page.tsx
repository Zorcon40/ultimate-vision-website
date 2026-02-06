"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Plus, ArrowRight } from "lucide-react";

export default function DashboardPage() {
  const [stats] = useState({
    blogPosts: 0,
    events: 0,
  });

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Content Dashboard</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.blogPosts}</div>
              <p className="text-xs text-muted-foreground">
                Total published posts
              </p>
              <div className="mt-4 flex gap-2">
                <Button asChild size="sm" variant="outline" className="flex-1">
                  <Link href="/dashboard/blog">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="sm" className="flex-1">
                  <Link href="/dashboard/blog/new">
                    <Plus className="mr-2 h-4 w-4" />
                    New Post
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.events}</div>
              <p className="text-xs text-muted-foreground">
                Upcoming events
              </p>
              <div className="mt-4 flex gap-2">
                <Button asChild size="sm" variant="outline" className="flex-1">
                  <Link href="/dashboard/events">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="sm" className="flex-1">
                  <Link href="/dashboard/events/new">
                    <Plus className="mr-2 h-4 w-4" />
                    New Event
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Quick Tips</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Blog posts are instantly published when saved</li>
            <li>• Use clear, descriptive titles for better SEO</li>
            <li>• Add featured images to make posts more engaging</li>
            <li>• Events appear on the events page automatically</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
