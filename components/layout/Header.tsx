"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Ultimate Vision", href: "/about" },
      { name: "Clark Roberts", href: "/about/clark-roberts" },
      { name: "The Guide Dogs", href: "/guide-dogs" },
    ],
  },
  { name: "Store", href: "/store" },
  {
    name: "News",
    href: "/news",
    children: [
      { name: "Blog", href: "/news" },
      { name: "Media", href: "/media" },
      { name: "Events", href: "/events" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/Logo/UV Full Logo.png"
            alt="Ultimate Vision"
            width={180}
            height={60}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="text-sm font-medium">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-2">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  {child.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <a href="tel:425-891-9008" className="hidden xl:flex items-center text-sm text-muted-foreground hover:text-foreground">
              <Phone className="mr-1 h-4 w-4" />
              425-891-9008
            </a>
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a href="/donate">Donate</a>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container py-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.children ? (
                    <div className="space-y-2">
                      <span className="font-medium">{item.name}</span>
                      <ul className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.href}
                              className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 font-medium hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-4 border-t">
                <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <a href="/donate">Donate</a>
                </Button>
              </li>
              <li className="text-center">
                <a href="tel:425-891-9008" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <Phone className="mr-1 h-4 w-4" />
                  425-891-9008
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
