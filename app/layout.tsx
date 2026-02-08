import type { Metadata } from "next";
import "./globals.css";
import { CinematicHeader } from "@/components/layout/CinematicHeader";
import { CinematicFooter } from "@/components/layout/CinematicFooter";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        <div className="relative flex min-h-screen flex-col">
          <CinematicHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <CinematicFooter />
        </div>
      </body>
    </html>
  );
}
