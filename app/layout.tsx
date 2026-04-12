import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://usadba-vip.ru";
const SITE_NAME = "Усадьба VIP Сочи";
const OG_IMAGE = `${SITE_URL}/Usadba/territory/territory_cottages/00c3af2c.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Усадьба VIP — Элитный отдых в Сочи | Коттеджи, апартаменты, квартиры",
    template: "%s | Усадьба VIP Сочи",
  },
  description:
    "Усадьба VIP — элитный коттеджный комплекс в Хостинском районе Сочи. Аренда коттеджей, апартаментов и квартир с видом на море. Бассейн, баня, барбекю, охраняемая территория. До моря 15 минут.",
  keywords: [
    "усадьба vip",
    "усадьба vip сочи",
    "аренда коттеджа в сочи",
    "элитный отдых в сочи",
    "коттеджи у моря сочи",
    "апартаменты сочи аренда",
    "квартира посуточно сочи",
    "хостинский район сочи",
    "звёздная улица сочи",
    "снять коттедж в сочи",
    "отдых в сочи с бассейном",
    "вилла у моря сочи",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Усадьба VIP — Элитный отдых в Сочи",
    description:
      "Элитный коттеджный комплекс в Хостинском районе Сочи. Коттеджи, апартаменты и квартиры с видом на море. Бассейн, баня, барбекю, охраняемая территория.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Усадьба VIP — элитный коттеджный комплекс в Сочи",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Усадьба VIP — Элитный отдых в Сочи",
    description:
      "Элитный коттеджный комплекс в Хостинском районе Сочи. Коттеджи, апартаменты и квартиры с видом на море.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "travel",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: "Усадьба VIP",
  description:
    "Элитный коттеджный комплекс в Хостинском районе Сочи. Аренда коттеджей, апартаментов и квартир с видом на море.",
  url: SITE_URL,
  telephone: "+7 988 880-00-04",
  email: "usadba89888800004@gmail.com",
  image: OG_IMAGE,
  priceRange: "₽₽₽",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Звёздная, 22",
    addressLocality: "Сочи",
    addressRegion: "Краснодарский край",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.529256,
    longitude: 39.843310,
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Бассейн", value: true },
    { "@type": "LocationFeatureSpecification", name: "Баня", value: true },
    { "@type": "LocationFeatureSpecification", name: "Зона барбекю", value: true },
    { "@type": "LocationFeatureSpecification", name: "Охраняемая территория", value: true },
    { "@type": "LocationFeatureSpecification", name: "Парковка", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Вид на море", value: true },
  ],
  openingHours: "Mo-Su 09:00-21:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
