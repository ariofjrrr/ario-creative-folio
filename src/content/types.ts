export type WorkCategory = "Writing" | "Graphic Design" | "Web Development" | "Projects" | "Publications";

export interface Work {
  slug: string;
  title: string;
  category: WorkCategory;
  year: string; // "" if unknown
  summary: string;
  cover?: string; // image URL/import; empty shows typographic cover
  background?: string;
  goals?: string;
  role?: string;
  process?: string;
  outcome?: string;
  gallery?: string[];
  links?: { label: string; href: string }[];
  url?: string;
  placeholder?: boolean;
}

export type WritingStatus = "Draft" | "In Progress" | "Published" | "";

export interface Writing {
  slug: string;
  title: string;
  type: string; // Book, Essay, Article...
  year: string;
  synopsis: string;
  status: WritingStatus;
  cover?: string;
  excerpt?: string; // only publicly permitted excerpt
  pdf?: string;
  link?: string;
  placeholder?: boolean;
}

export type CertCategory =
  | "Certificates"
  | "Awards"
  | "Intellectual Property"
  | "Training & Workshops"
  | "Academic & Organizational";

export interface Certificate {
  id: string;
  title: string;
  category: CertCategory;
  issuer: string;
  year: string;
  description: string;
  image?: string;
  pdf?: string;
  verification?: string; // number or URL, only if safe to publish
  placeholder?: boolean;
}
