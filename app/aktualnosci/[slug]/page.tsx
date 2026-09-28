import { pageMetadata, breadcrumbSchema } from "@/utils/seo";
import { JsonLd } from "@/components/json-ld";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { publishedNews as news } from "@/data/news";
import { site, siteUrl } from "@/data/site";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();
  return pageMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/aktualnosci/${slug}`,
    publishedTime: item.date,
  });
}
export default async function NewsPage({ params }: Props) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();
  return (
    <main id="main" className="shell section document">
      <JsonLd data={breadcrumbSchema([{ name: "Strona główna", path: "/" }, { name: item.title, path: `/aktualnosci/${item.slug}` }])} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${siteUrl}/aktualnosci/${item.slug}#article`,
        headline: item.title,
        description: item.excerpt,
        datePublished: item.date,
        inLanguage: "pl-PL",
        mainEntityOfPage: `${siteUrl}/aktualnosci/${item.slug}`,
        publisher: {
          "@type": "NGO",
          "@id": `${siteUrl}/#organization`,
          name: site.name,
          url: siteUrl,
          logo: { "@type": "ImageObject", url: `${siteUrl}/images/logo.webp` },
        },
        ...(item.image ? { image: new URL(item.image, siteUrl).href } : {}),
      }} />
      <Link href="/#aktualnosci" className="text-link">
        ← Aktualności
      </Link>
      <article>
        <p className="eyebrow">
          {item.category} ·{" "}
          <time dateTime={item.date}>
            {new Date(item.date).toLocaleDateString("pl-PL", {
              timeZone: "UTC",
            })}
          </time>
        </p>
        <h1>{item.title}</h1>
        <p className="lead">{item.excerpt}</p>
        {item.image && (
          <Image
            className="article-image"
            src={item.image}
            alt={item.imageAlt ?? ""}
            width={1200}
            height={800}
          />
        )}{" "}
        {item.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
    </main>
  );
}
