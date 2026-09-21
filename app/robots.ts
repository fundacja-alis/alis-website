import type { MetadataRoute } from "next";
import { siteUrl, indexable } from "@/data/site";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(indexable ? { allow: "/" } : { disallow: "/" }),
    },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
