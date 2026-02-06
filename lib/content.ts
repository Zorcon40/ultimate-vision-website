import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, Event } from "@/types";

const contentDirectory = path.join(process.cwd(), "content");
const blogDirectory = path.join(contentDirectory, "blog");
const eventsDirectory = path.join(contentDirectory, "events");

function ensureDirectories() {
  fs.mkdirSync(blogDirectory, { recursive: true });
  fs.mkdirSync(eventsDirectory, { recursive: true });
}

export function getAllBlogPosts(): BlogPost[] {
  ensureDirectories();

  const files = fs.readdirSync(blogDirectory);
  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(blogDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        content,
        author: data.author || "Ultimate Vision",
        image: data.image,
        published: data.published !== false,
      } as BlogPost;
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  ensureDirectories();
  
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    content,
    author: data.author || "Ultimate Vision",
    image: data.image,
    published: data.published !== false,
  } as BlogPost;
}

export function getAllEvents(): Event[] {
  ensureDirectories();

  const files = fs.readdirSync(eventsDirectory);
  const events = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(eventsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        location: data.location || "",
        description: content,
        image: data.image,
        registrationLink: data.registrationLink,
        published: data.published !== false,
      } as Event;
    })
    .filter((event) => event.published)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return events;
}

export function saveBlogPost(post: BlogPost): void {
  ensureDirectories();
  
  const filePath = path.join(blogDirectory, `${post.slug}.md`);
  const fileContent = matter.stringify(post.content, {
    title: post.title,
    date: post.date,
    excerpt: post.excerpt,
    author: post.author,
    image: post.image,
    published: post.published,
  });
  fs.writeFileSync(filePath, fileContent);
}

export function saveEvent(event: Event): void {
  ensureDirectories();
  
  const filePath = path.join(eventsDirectory, `${event.slug}.md`);
  const fileContent = matter.stringify(event.description, {
    title: event.title,
    date: event.date,
    location: event.location,
    image: event.image,
    registrationLink: event.registrationLink,
    published: event.published,
  });
  fs.writeFileSync(filePath, fileContent);
}
