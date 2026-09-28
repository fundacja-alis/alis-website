import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { projects } from "@/data/projects";
import { news } from "@/data/news";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [
    { url: siteUrl, priority: 1 },
    { url: `${siteUrl}/dokumenty`, priority: 0.3 },
    { url: `${siteUrl}/dokumenty/statut`, priority: 0.3 },
    ...projects.map((p) => ({
      url: `${siteUrl}/projekty/${p.slug}`,
      priority: 0.7,
    })),
    ...news.map((n) => ({
      url: `${siteUrl}/aktualnosci/${n.slug}`,
      lastModified: n.date,
      priority: 0.6,
    })),
  ];
}
