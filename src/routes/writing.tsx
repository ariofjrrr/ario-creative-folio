
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { writings } from "@/content/writing";
import type { Writing } from "@/content/types";
import { Cover } from "@/components/site/Cover";
import { EmptyState, PageHeader } from "@/components/site/FilterBar";
import { Lightbox } from "@/components/site/Lightbox";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      {
        title: "Writing & Publications - Ario Fajar Dharmawan",
      },
      {
        name: "description",
        content:
          "Books, essays, articles and manuscripts by Ario Fajar Dharmawan.",
      },
      {
        property: "og:title",
        content: "Writing & Publications - Ario Fajar Dharmawan",
      },
      {
        property: "og:description",
        content: "Books, essays, articles and manuscripts.",
      },
    ],
  }),
  component: WritingPage,
});

function WritingPage() {
  const [open, setOpen] = useState<Writing | null>(null);

  return (
    <>
      <PageHeader
        index="05 — Writing"
        title="Writing & publications."
        intro="Manuscripts, essays, articles and published work."
      />

      <section className="container-page">
        {writings.length === 0 ? (
          <EmptyState title="No writing published yet." />
        ) : (
          <div className="divide-y border-y">
            {writings.map((w, i) => (
              <article
                key={w.slug}
                className="grid gap-8 py-10 md:grid-cols-12"
              >
                <div className="aspect-[3/4] w-full max-w-xs md:col-span-3">
                  <Cover
                    src={w.cover}
                    title={w.title}
                    label={w.type}
                    dark={i % 2 === 0}
                  />
                </div>

                <div className="min-w-0 md:col-span-8 md:col-start-5">
                  <div className="flex flex-wrap gap-4">
                    <span className="eyebrow">{w.type}</span>

                    {w.year && (
                      <span className="eyebrow">{w.year}</span>
                    )}

                    {w.status && (
                      <span className="eyebrow text-accent">
                        {w.status}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight [overflow-wrap:anywhere] md:text-5xl">
                    {w.title}
                  </h2>

                  <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                    {w.synopsis || "Synopsis coming soon."}
                  </p>

                  {w.excerpt && (
                    <blockquote className="mt-6 max-w-xl border-l-2 border-accent pl-5 italic">
                      {w.excerpt}
                    </blockquote>
                  )}

                  <div className="mt-8 flex flex-wrap gap-3">
                    {w.pdf && (
                      <button
                        type="button"
                        onClick={() => setOpen(w)}
                        className="bg-primary px-5 py-3 text-sm text-primary-foreground transition-colors hover:bg-accent"
                      >
                        Read PDF
                      </button>
                    )}

                    {w.link && (
                      <a
                        href={w.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-foreground px-5 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
                      >
                        View publication ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {open && (
        <Lightbox
          pdf={open.pdf}
          title={open.title}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
