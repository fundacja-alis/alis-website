import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/site";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project
    ? {
        title: project.title,
        description: project.excerpt,
        alternates: {
          canonical: siteUrl ? `${siteUrl}/projekty/${slug}` : undefined,
        },
        openGraph: { title: project.title, description: project.excerpt },
      }
    : { title: "Nie znaleziono projektu" };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <main id="main" className="shell section document">
      <Link href="/#projekty" className="text-link">
        ← Wszystkie projekty
      </Link>
      <p className="eyebrow">
        {project.category} · {project.status}
      </p>
      <h1>{project.title}</h1>
      <p className="lead">{project.excerpt}</p>
      <Image
        className="article-image"
        src={project.image}
        alt={project.imageAlt}
        width={1200}
        height={800}
      />
      <p>
        {project.ownership === "foundation"
          ? "Projekt Fundacji ALIS"
          : "Współpraca / partner projektu"}
        {project.partner && ` · ${project.partner}`}
      </p>
      {project.body.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {project.audience && <section><h2>Dla kogo?</h2><p>{project.audience}</p></section>}
      {project.goal && <section><h2>Co chcemy zmienić?</h2><p>{project.goal}</p></section>}
      {project.results && <section><h2>Potwierdzone rezultaty</h2><p>{project.results.summary}</p><a className="text-link" href={project.results.sourceUrl}>{project.results.sourceLabel} ↗</a></section>}
      {project.participation && <section><h2>Jak się zaangażować?</h2><p>{project.participation.description}</p><a className="text-link" href={project.participation.href}>{project.participation.label} ↗</a></section>}
      {project.externalUrl && (
        <a
          className="text-link"
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Przejdź do strony projektu ↗
        </a>
      )}
    </main>
  );
}
