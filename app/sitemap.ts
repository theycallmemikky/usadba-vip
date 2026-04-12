import type { MetadataRoute } from "next";
import { cottages, apartments, flats } from "@/lib/data";

export const dynamic = "force-static";

const SITE_URL = "https://usadba-vip.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/cottages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/apartments`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/flats`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contacts`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];

  const cottageRoutes: MetadataRoute.Sitemap = cottages.map((c) => ({
    url: `${SITE_URL}/cottages/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const apartmentRoutes: MetadataRoute.Sitemap = apartments.map((a) => ({
    url: `${SITE_URL}/apartments/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const flatRoutes: MetadataRoute.Sitemap = flats.map((f) => ({
    url: `${SITE_URL}/flats/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...cottageRoutes, ...apartmentRoutes, ...flatRoutes];
}
