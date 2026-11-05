
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { writings } from "@/content/writing";
import type { Writing } from "@/content/types";
import { Cover } from "@/components/site/Cover";
import { EmptyState } from "@/components/site/FilterBar";
import { Lightbox } from "@/components/site/Lightbox";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      {
        title: "Writing - AFD",
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
      <main className="container-page pt-0 pb-14 md:pt-0 md:pb-16">
        {/* PAGE INTRODUCTION */}
        <div className="mb-0 border-b border-foreground/15 pb-0">
          <div className="mt-2 mb-3 flex items-center justify-between">
            <p className="eyebrow">WRITING</p>
            <span className="font-mono text-xs text-muted-foreground">
              BOOKS & PUBLICATIONS
            </span>
          </div>
        </div>

        {/* WRITING COLLECTION */}
        <section className="mt-9">
          {writings.length === 0 ? (
            <EmptyState title="No writing published yet." />
          ) : (
            <div className="divide-y divide-foreground/15 border-y border-foreground/15">
              {writings.map((w, i) => (
                <article
                  key={w.slug}
                  className="grid gap-6 py-8 md:grid-cols-12 md:gap-8 md:py-10"
                >
                  {/* COVER */}
                  <div className="w-full max-w-[220px] md:col-span-3">
                    <div className="aspect-[3/4] overflow-hidden">
                      <div className="h-full w-full transition-transform duration-500 hover:scale-[1.03]">
                        <Cover
                          src={w.cover}
                          title={w.title}
                          label={w.type}
                          dark={i % 2 === 0}
                        />
                      </div>
                    </div>
                  </div>

                  {/* INFORMATION */}
                  <div className="min-w-0 md:col-span-8 md:col-start-5">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="eyebrow">{w.type}</span>

                      {w.year && (
                        <span className="font-mono text-xs text-muted-foreground">
                          {w.year}
                        </span>
                      )}

                      {w.status && (
                        <span className="eyebrow text-accent">
                          {w.status}
                        </span>
                      )}
                    </div>

                    <h2 className="mt-4 text-2xl font-semibold tracking-tight [overflow-wrap:anywhere] md:text-3xl">
                      {w.title}
                    </h2>

                    {/* ACTIONS */}
                    <div className="mt-6 flex flex-wrap gap-3">
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
                          className="border border-foreground/20 px-5 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
                        >
                          View Publication ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* FOOTNOTE */}
        <div className="mt-16 flex items-center justify-between border-t border-foreground/15 pt-4">
          <p className="text-xs text-muted-foreground">
            Selected writings & publications
          </p>
          <span className="font-mono text-xs text-muted-foreground">
            AFD / {new Date().getFullYear()}
          </span>
        </div>
      </main>

      {/* PDF LIGHTBOX */}
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
