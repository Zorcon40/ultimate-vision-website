import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Plus, Calendar, Edit } from "lucide-react";
import { getAllBlogPosts } from "@/lib/content";

export default function BlogListPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" asChild className="pl-0">
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard/blog/new">
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            {posts.length > 0 ? (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div
                    key={post.slug}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate">{post.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/news/${post.slug}`} target="_blank">
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No blog posts yet.</p>
                <Button asChild>
                  <Link href="/dashboard/blog/new">
                    <Plus className="mr-2 h-4 w-4" />
                    Create your first post
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
