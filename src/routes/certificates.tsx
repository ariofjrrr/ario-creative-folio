
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { certificates, certCategories } from "@/content/certificates";
import type { Certificate } from "@/content/types";
import { EmptyState, FilterBar } from "@/components/site/FilterBar";
import { Lightbox } from "@/components/site/Lightbox";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates - AFD" },
      {
        name: "description",
        content:
          "Certificates, awards, intellectual property and training records of Ario Fajar Dharmawan.",
      },
      {
        property: "og:title",
        content: "Certificates & Achievements — Ario Fajar Dharmawan",
      },
      {
        property: "og:description",
        content: "Certificates, awards, intellectual property and training.",
      },
    ],
  }),
  component: Certificates,
});

function Certificates() {
  const [category, setCategory] =
    useState<(typeof certCategories)[number]>("All");
  const [open, setOpen] = useState<Certificate | null>(null);

  const filteredCertificates = useMemo(
    () =>
      category === "All"
        ? certificates
        : certificates.filter(
            (certificate) => certificate.category === category
          ),
    [category]
  );

  const counts = useMemo(
    () =>
      Object.fromEntries(
        certCategories.map((item) => [
          item,
          item === "All"
            ? certificates.length
            : certificates.filter(
                (certificate) => certificate.category === item
              ).length,
        ])
      ),
    []
  );

  return (
    <>
      <main className="container-page pt-0 pb-14 md:pt-0 md:pb-16">
        {/* PAGE INTRODUCTION */}
        <div className="mb-0 border-b border-foreground/15 pb-0">
          <div className="mt-2 mb-3 flex items-center justify-between">
            <p className="eyebrow">CERTIFICATES</p>
            <span className="font-mono text-xs text-muted-foreground">
              AWARDS & ACHIEVEMENTS
            </span>
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <section className="mt-1">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow">EXPLORE BY CATEGORY</p>
            <span className="font-mono text-xs text-muted-foreground">
              {filteredCertificates.length}{" "}
              {filteredCertificates.length === 1 ? "RECORD" : "RECORDS"}
            </span>
          </div>

          <div className="mt-2">
            <FilterBar
              options={certCategories}
              value={category}
              onChange={setCategory}
              counts={counts}
            />
          </div>
        </section>

        {/* CERTIFICATES GRID */}
        <section className="mt-9">
          {filteredCertificates.length === 0 ? (
            <EmptyState
              title="Nothing here yet."
              body="Verified items in this category will be added soon."
            />
          ) : (
            <div
              key={category}
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-14"
            >
              {filteredCertificates.map((certificate, index) => (
                <button
                  key={certificate.id}
                  type="button"
                  onClick={() => setOpen(certificate)}
                  aria-label={`View certificate: ${certificate.title}`}
                  className="group fade-up text-left"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  {/* CUSTOM CERTIFICATE COVER */}
                  <div className="relative aspect-[1.414/1] overflow-hidden border border-foreground/15 bg-muted p-5 sm:p-6">
                    <div className="relative flex h-full flex-col justify-between overflow-hidden">
                      {/* DECORATIVE BACKGROUND */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full border border-foreground/10 transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-3 -top-7 h-28 w-28 rounded-full border border-foreground/10"
                      />

                      {/* COVER HEADER */}
                      <div className="relative flex items-center justify-between border-b border-foreground/15 pb-3">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                          AFD / CREDENTIALS
                        </span>

                        <span className="font-mono text-[10px] text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* COVER CONTENT */}
                      <div className="relative py-3">
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                          {certificate.category}
                        </p>

                        <h3 className="max-w-[90%] text-xl font-semibold leading-tight tracking-[-0.04em] sm:text-2xl">
                          {certificate.title}
                          <span className="text-accent">.</span>
                        </h3>

                        {certificate.issuer && (
                          <p className="mt-3 line-clamp-1 text-xs text-muted-foreground">
                            {certificate.issuer}
                          </p>
                        )}
                      </div>

                      {/* COVER FOOTER */}
                      <div className="relative flex items-end justify-between border-t border-foreground/15 pt-3">
                        <div>
                          <p className="font-mono text-[9px] tracking-[0.16em] text-muted-foreground">
                            CERTIFICATE RECORD
                          </p>
                          {certificate.year && (
                            <p className="mt-1 text-xs font-medium">
                              {certificate.year}
                            </p>
                          )}
                        </div>

                        <span className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider transition-colors group-hover:text-accent">
                          View
                          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                            ↗
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CERTIFICATE INFORMATION */}
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-semibold tracking-tight transition-colors group-hover:text-accent">
                        {certificate.title}
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {[certificate.issuer, certificate.year]
                          .filter(Boolean)
                          .join(" · ") || certificate.category}
                      </p>
                    </div>

                    <span className="mt-1 shrink-0 text-sm text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
                      ↗
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        {/* FOOTNOTE */}
        <div className="mt-16 flex items-center justify-between border-t border-foreground/15 pt-4">
          <p className="text-xs text-muted-foreground">
            Certificates & professional achievements
          </p>
          <span className="font-mono text-xs text-muted-foreground">
            AFD / {new Date().getFullYear()}
          </span>
        </div>
      </main>

      {/* ORIGINAL CERTIFICATE LIGHTBOX */}
      {open && (
        <Lightbox
          src={open.image}
          pdf={open.pdf}
          title={open.title}
          onClose={() => setOpen(null)}
        >
          <dl className="space-y-4">
            {(
              [
                ["Category", open.category],
                ["Issuer", open.issuer],
                ["Year", open.year],
                ["Description", open.description],
                ["Verification", open.verification],
              ] as const
            )
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div key={label}>
                  <dt className="eyebrow">{label}</dt>
                  <dd className="mt-1 break-words">
                    {value?.startsWith("http") ? (
                      <a
                        href={value}
                        target="_blank"
                        rel="noreferrer"
                        className="underline transition-colors hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
          </dl>
        </Lightbox>
      )}
    </>
  );
}
