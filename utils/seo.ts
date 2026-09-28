import type { Metadata } from "next";
import { site, siteUrl } from "../data/site";

export function pageMetadata({ title, description, path, publishedTime }: {
  title: string;
  description: string;
  path: string;
  publishedTime?: string;
}): Metadata {
  const url = new URL(path, siteUrl).href;
  const shareTitle = path === "/" ? title : `${title} | ${site.name}`;
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: publishedTime ? "article" : "website",
      locale: "pl_PL",
      siteName: site.name,
      url,
      title: shareTitle,
      description,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: shareTitle, description },
  };
}

// Prevent text content from closing the JSON-LD script element.
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).href,
    })),
  };
}
