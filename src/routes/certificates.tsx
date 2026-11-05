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

  // FILTERED CERTIFICATES
  const filteredCertificates = useMemo(
    () =>
      category === "All"
        ? certificates
        : certificates.filter(
            (certificate) => certificate.category === category
          ),
    [category]
  );

  // CATEGORY COUNTS
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
      <main className="container-page pt-0 pb-10 md:pt-0 md:pb-12">
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
        <section className="mt-4">
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
        <section className="mt-17">
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
                  className="group fade-up text-left"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="overflow-hidden border border-foreground/15 bg-muted/20">
                    <img
                      src={certificate.cover}
                      alt={`Cover of ${certificate.title}`}
                      loading="lazy"
                      className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-13 border-t border-foreground/15 pt-3">
                    <h3 className="mt-2 font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {certificate.title}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {[certificate.issuer, certificate.year]
                        .filter(Boolean)
                        .join(" · ") || certificate.category}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        {/* FOOTNOTE */}
        <div className="mt-14 mb-2 flex items-center justify-between border-t border-foreground/15 pt-4">
          <p className="text-xs text-muted-foreground">
            Certificates & professional achievements
          </p>
          <span className="font-mono text-xs text-muted-foreground">
            AFD / {new Date().getFullYear()}
          </span>
        </div>
      </main>

      {/* CERTIFICATE LIGHTBOX */}
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
