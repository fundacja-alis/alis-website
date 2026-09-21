import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { news } from "@/data/news";
import { siteUrl } from "@/data/site";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  return item
    ? {
        title: item.title,
        description: item.excerpt,
        alternates: {
          canonical: siteUrl ? `${siteUrl}/aktualnosci/${slug}` : undefined,
        },
        openGraph: {
          type: "article",
          title: item.title,
          description: item.excerpt,
          publishedTime: item.date,
        },
      }
    : { title: "Nie znaleziono aktualności" };
}
export default async function NewsPage({ params }: Props) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();
  return (
    <main id="main" className="shell section document">
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
