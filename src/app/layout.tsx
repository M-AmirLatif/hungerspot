import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { BUSINESS_INFO } from "@/data/menuData";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0a09",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Hunger Spot | Fast Food Restaurant Kasur — One Spot. Every Craving.",
  description:
    "Kasur's 5.0★ Fast Food Restaurant at Satluj Filling Station (Shell) Kasur Bypass. Savor our famous Zingrato Burgers, Crown Crust & Behari Kabab Pizzas, Crunchy Pasta (10/10), juicy Chicken Shawarma, loaded fries & super saver deals. Free Home Delivery: 0303 8023907.",
  keywords: [
    "Hunger Spot",
    "Hunger Spot Kasur",
    "Hunger Spot Bypass",
    "Fast Food Kasur",
    "Satluj Filling Station Shell Kasur Bypass",
    "Zingrato Burger Kasur",
    "Crown Crust Pizza Kasur",
    "Crunchy Pasta Kasur",
    "Best Burger in Kasur",
    "Pizza Delivery Kasur",
    "Fast Food Delivery Kasur 0303 8023907",
  ],
  authors: [{ name: "Hunger Spot" }],
  openGraph: {
    title: "Hunger Spot — One Spot. Every Craving. | Kasur Fast Food",
    description:
      "Kasur's 5.0★ rated fast food at Satluj Filling Station (Shell) Kasur Bypass. Fresh Zingrato burgers, Crown Crust & Special Pizzas, crunchy pasta, shawarma & super value deals. WhatsApp Order: 0303 8023907.",
    url: "https://hungerspot.pk",
    siteName: "Hunger Spot",
    images: [
      {
        url: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Hunger Spot Kasur - Sizzling Burgers, Pizzas, Wings & Loaded Fries",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunger Spot Kasur | 5.0★ Fast Food Restaurant",
    description: "Famous Zingrato Burger, Crown Crust & Behari Kabab Pizza, Crunchy Pasta & Deals at Satluj Shell Kasur Bypass. Call 0303 8023907.",
    images: ["https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1200&auto=format&fit=crop&q=80"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  "name": BUSINESS_INFO.name,
  "image": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=1200&auto=format&fit=crop&q=80",
  "telephone": "+923038023907",
  "servesCuisine": ["Fast Food", "Burgers", "Pizza", "Shawarma", "Fried Chicken", "Pasta", "Fries", "Pakistani Fast Food"],
  "priceRange": "PKR 70 - 4999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Satluj Filling Station (Shell) Kasur Bypass",
    "addressLocality": "Kasur",
    "addressRegion": "Punjab",
    "addressCountry": "PK",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.1350",
    "longitude": "74.4500",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "13:00",
      "closes": "02:00",
    },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "3",
  },
  "potentialAction": {
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `https://wa.me/${BUSINESS_INFO.whatsappNumber}`,
      "inLanguage": "en",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    "deliveryMethod": "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Kasur" />
        <meta name="geo.position" content="31.1350;74.4500" />
        <meta name="ICBM" content="31.1350, 74.4500" />
      </head>
      <body className="font-body selection:bg-brand-red selection:text-white bg-[#0a0a0a] text-zinc-100 overflow-x-hidden min-h-screen">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
