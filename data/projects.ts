export type Project = {
  /** Wpis widoczny na stronie dopiero po zatwierdzeniu do publikacji. */
  published: boolean;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  status: "Planowany" | "W realizacji" | "Zakończony";
  ownership: "foundation" | "partnership";
  partner?: string;
  externalUrl?: string;
  featured: boolean;
  body: string[];
  audience?: string;
  goal?: string;
  results?: { summary: string; sourceLabel: string; sourceUrl: string };
  participation?: { description: string; label: string; href: string };
};
// Add only projects confirmed by the Foundation. No demo records are published.
export const projects: Project[] = [];

export const publishedProjects = projects.filter((item) => item.published);
