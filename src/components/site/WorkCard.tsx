import { Link } from "@tanstack/react-router";
import type { Work } from "@/content/types";
import { Cover } from "./Cover";

export function WorkCard({ work, index }: { work: Work; index: number }) {
  return (
    <Link to="/portfolio/$slug" params={{ slug: work.slug }} className="group block fade-up" style={{ animationDelay: `${index * 60}ms` }}>
      <div className="aspect-[4/3] overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
          <Cover src={work.cover} title={work.title} label={work.category} dark={index % 3 === 0} />
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4 border-t pt-3">
        <h3 className="text-lg font-semibold tracking-tight">{work.title}</h3>
        {work.year && <span className="font-mono text-xs text-muted-foreground">{work.year}</span>}
      </div>
      <p className="eyebrow mt-1">{work.category}</p>
      {work.summary && <p className="mt-2 text-sm text-muted-foreground">{work.summary}</p>}
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium">
        View Project <span className="transition-transform group-hover:translate-x-1 group-hover:text-accent">→</span>
      </span>
    </Link>
  );
}
