import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "News, stories, and updates from Ultimate Vision. Read about our programs, scholarship recipients, and upcoming events.",
};

export default async function NewsPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Blog
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90">
              Stay updated with the latest news, stories, and events from Ultimate Vision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.slug} className="flex flex-col overflow-hidden">
                  {post.image && (
                    <div className="relative aspect-video">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString()}
                      </time>
                    </div>
                    <CardTitle className="text-xl">
                      <Link href={`/news/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/news/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
