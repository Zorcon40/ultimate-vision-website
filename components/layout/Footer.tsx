import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/images/Logo/UV Full Logo.png"
              alt="Ultimate Vision"
              width={160}
              height={53}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/clark-roberts" className="text-muted-foreground hover:text-foreground">
                  Clark Roberts
                </Link>
              </li>
              <li>
                <Link href="/guide-dogs" className="text-muted-foreground hover:text-foreground">
                  The Guide Dogs
                </Link>
              </li>
              <li>
                <Link href="/store" className="text-muted-foreground hover:text-foreground">
                  Store
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground">
                  News & Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about#schools" className="text-muted-foreground hover:text-foreground">
                  Schools
                </Link>
              </li>
              <li>
                <Link href="/about#corporate" className="text-muted-foreground hover:text-foreground">
                  Corporate
                </Link>
              </li>
              <li>
                <Link href="/about#dine-in-the-dark" className="text-muted-foreground hover:text-foreground">
                  Dine in the Dark
                </Link>
              </li>
              <li>
                <Link href="/about#faith-based" className="text-muted-foreground hover:text-foreground">
                  Faith Based
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Send us a message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Ultimate Vision. All rights reserved. |{" "}
            <Link href="/" className="hover:text-foreground">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/" className="hover:text-foreground">
              Terms of Service
            </Link>
          </p>
          <p className="mt-2 text-xs">
            Ultimate Vision is a registered 501(c)(3) non-profit organization.
          </p>
        </div>
      </div>
    </footer>
  );
}
