import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Sparkles, BookOpen, Tag, TrendingUp, Clock } from "lucide-react";
import { getAllBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog - Stories of Impact, Compassion & Leadership | Ultimate Vision",
  description: "Explore inspiring stories, leadership insights, and updates from Ultimate Vision. Learn about compassion-driven programs, scholarship recipients, speaking engagements, and transformational events.",
  keywords: "Ultimate Vision blog, leadership stories, compassion education, Clark Roberts insights, motivational speaking, inclusion programs, scholarship updates",
  openGraph: {
    title: "Ultimate Vision Blog - Stories That Transform",
    description: "Inspiring stories of compassion, leadership, and transformation from Ultimate Vision.",
    type: "website",
  },
};

const categories = [
  { name: "All Stories", slug: "all", icon: BookOpen },
  { name: "Impact Stories", slug: "impact", icon: TrendingUp },
  { name: "Speaking Insights", slug: "speaking", icon: Sparkles },
  { name: "Program Updates", slug: "programs", icon: Tag },
];

export default async function NewsPage() {
  const posts = await getAllBlogPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

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
              <span className="text-sm font-medium text-[#5BBF3A]">Blog & Stories</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Stories That <span className="text-gradient">Inspire Change</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Insights on leadership, compassion, and transformation from Ultimate Vision. Real stories, real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.slug}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 hover:bg-[#2D7A3A]/5 hover:border-[#2D7A3A]/30 hover:text-[#2D7A3A] transition-colors whitespace-nowrap first:bg-gradient-to-r first:from-[#2D7A3A] first:to-[#5BBF3A] first:text-white first:border-transparent"
              >
                <category.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {posts.length > 0 ? (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <section className="py-16 lg:py-20 bg-white">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center gap-2 mb-8">
                  <TrendingUp className="w-5 h-5 text-[#2D7A3A]" />
                  <h2 className="font-display text-2xl font-bold text-[#1B3A5C]">Featured Story</h2>
                </div>
                <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  {featuredPost.image && (
                    <Link href={`/news/${featuredPost.slug}`} className="relative aspect-[4/3] lg:aspect-auto overflow-hidden group">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161b2e]/60 via-transparent to-transparent" />
                    </Link>
                  )}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <time dateTime={featuredPost.date} className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 text-[#2D7A3A]" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        5 min read
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-4 hover:text-[#2D7A3A] transition-colors">
                      <Link href={`/news/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Link
                      href={`/news/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-[#2D7A3A] font-semibold hover:gap-3 transition-all"
                    >
                      Read Full Story
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </article>
              </div>
            </section>
          )}

          {/* Recent Posts Grid */}
          {recentPosts.length > 0 && (
            <section className="py-16 lg:py-20 bg-gray-50">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center gap-2 mb-8">
                  <BookOpen className="w-5 h-5 text-[#2D7A3A]" />
                  <h2 className="font-display text-2xl font-bold text-[#1B3A5C]">Recent Stories</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recentPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      {post.image && (
                        <Link href={`/news/${post.slug}`} className="relative aspect-[16/10] overflow-hidden block">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#161b2e]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      )}
                      <div className="p-6">
                        <time dateTime={post.date} className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4 text-[#2D7A3A]" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                        <h3 className="font-display text-xl font-bold text-[#1B3A5C] mb-3 group-hover:text-[#2D7A3A] transition-colors line-clamp-2">
                          <Link href={`/news/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <Link
                          href={`/news/${post.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D7A3A] hover:gap-3 transition-all"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Newsletter CTA */}
          <section className="py-20 lg:py-24 bg-[#161b2e]">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#2D7A3A]/20 border border-[#5BBF3A]/30 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-[#5BBF3A]" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Never Miss a <span className="text-gradient">Story</span>
                </h2>
                <p className="text-lg text-white/60 mb-8">
                  Get the latest stories of impact, leadership insights, and program updates delivered to your inbox.
                </p>
                <a
                  href="https://mailchi.mp/121b6a8c06c8/ultimate-vision-newsletter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#2D7A3A] to-[#5BBF3A] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-[#2D7A3A]/10 border border-[#2D7A3A]/20 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-[#2D7A3A]" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#1B3A5C] mb-3">
                Stories Coming Soon
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We&apos;re crafting inspiring stories to share. Check back soon or subscribe to our newsletter to be notified.
              </p>
              <a
                href="https://mailchi.mp/121b6a8c06c8/ultimate-vision-newsletter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#2D7A3A] to-[#5BBF3A] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
