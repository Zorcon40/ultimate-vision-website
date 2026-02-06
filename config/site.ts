export const siteConfig = {
  name: "Ultimate Vision",
  description: "Inspiring measurable acts of compassion and kindness in communities worldwide. We guide future leaders to see life through a lens of Compassion, Kindness, and Empathy.",
  url: "https://www.ultimate-vision.org",
  ogImage: "/images/og-image.jpg",
  contact: {
    phone: "425-891-9008",
    email: "info@ultimate-vision.org",
  },
  social: {
    facebook: "https://facebook.com/ultimatevision",
    instagram: "https://instagram.com/ultimatevision",
    youtube: "https://youtube.com/ultimatevision",
    linkedin: "https://linkedin.com/company/ultimatevision",
  },
  navigation: {
    main: [
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
    ],
  },
  mission: "We guide future leaders to see life through a lens of Compassion, Kindness, and Empathy, being Confident, embracing their potential to live a life of significance.",
  vision: "We inspire youth to identify their potential through a greater understanding of Kindness, Compassion, and Inclusion.",
};
