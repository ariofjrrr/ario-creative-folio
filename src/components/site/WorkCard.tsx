
import { Link } from "@tanstack/react-router";
import type { Work } from "@/content/types";
import { Cover } from "./Cover";

export function WorkCard({
  work,
  index,
}: {
  work: Work;
  index: number;
}) {
  const content = (
    <>
      {/* COVER */}
      <div className="aspect-[4/3] overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
          <Cover
            src={work.cover}
            title={work.title}
            label={work.category}
            dark={index % 3 === 0}
          />
        </div>
      </div>

      {/* INFORMATION */}
      <div className="mt-4 border-t border-foreground/15 pt-3">
        <h3 className="text-base font-semibold tracking-tight transition-colors group-hover:text-accent">
          {work.title}
        </h3>

        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="eyebrow">{work.category}</p>

          {work.year && (
            <span className="font-mono text-xs text-muted-foreground">
              {work.year}
            </span>
          )}
        </div>
      </div>

      {/* LINK LABEL */}
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium">
        {work.category === "Writing" ? "View Writing" : "View Project"}
        <span className="transition-transform group-hover:translate-x-1 group-hover:text-accent">
          →
        </span>
      </span>
    </>
  );

  const className = "group block fade-up";
  const style = { animationDelay: `${index * 60}ms` };

  if (work.category === "Writing") {
    return (
      <Link to="/writing" className={className} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: work.slug }}
      className={className}
      style={style}
    >
      {content}
    </Link>
  );
}
