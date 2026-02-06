import type { Metadata } from "next";
import "./globals.css";
import { MinimalHeader } from "@/components/layout/MinimalHeader";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/accessibility/SkipLink";
import { AccessibilityToolbar } from "@/components/accessibility/AccessibilityToolbar";
import { FloatingCTA } from "@/components/ui/floating-cta";
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
        <SkipLink />
        <div className="relative flex min-h-screen flex-col">
          <MinimalHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <AccessibilityToolbar />
          <FloatingCTA />
        </div>
      </body>
    </html>
  );
}
