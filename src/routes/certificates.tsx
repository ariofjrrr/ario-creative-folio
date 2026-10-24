import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { certificates, certCategories } from "@/content/certificates";
import type { Certificate } from "@/content/types";
import { Cover } from "@/components/site/Cover";
import { EmptyState, FilterBar, PageHeader } from "@/components/site/FilterBar";
import { Lightbox } from "@/components/site/Lightbox";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates - AFD" },
      { name: "description", content: "Certificates, awards, intellectual property and training records of Ario Fajar Dharmawan." },
      { property: "og:title", content: "Certificates & Achievements — Ario Fajar Dharmawan" },
      { property: "og:description", content: "Certificates, awards, intellectual property and training." },
    ],
  }),
  component: Certificates,
});

function Certificates() {
  const [cat, setCat] = useState<(typeof certCategories)[number]>("All");
  const [open, setOpen] = useState<Certificate | null>(null);
  const list = useMemo(() => (cat === "All" ? certificates : certificates.filter((c) => c.category === cat)), [cat]);

  return (
    <>
      <PageHeader index="04 - Certificates" title="Certificates & achievements." />
      <section className="container-page">
        <FilterBar options={certCategories} value={cat} onChange={setCat} />
        <div className="mt-12">
          {list.length === 0 ? <EmptyState title="Nothing here yet." body="Verified items in this category will be added soon." /> : (
            <div key={cat} className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((c, i) => (
                <button key={c.id} onClick={() => setOpen(c)} className="group fade-up text-left" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="aspect-[1.414/1] overflow-hidden border">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                  <img
                    src={c.image}
                    alt={c.title}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      minHeight: "100px",
                      background: "#f0f0f0",
                    }}
                  />
                  </div>
                </div>
                  <h3 className="mt-4 font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{[c.issuer, c.year].filter(Boolean).join(" · ") || c.category}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
      {open && (
        <Lightbox src={open.image} pdf={open.pdf} title={open.title} onClose={() => setOpen(null)}>
          <dl className="space-y-4">
            {([["Category", open.category], ["Issuer", open.issuer], ["Year", open.year], ["Description", open.description], ["Verification", open.verification]] as const)
              .filter(([, v]) => v).map(([k, v]) => (
                <div key={k}><dt className="eyebrow">{k}</dt><dd className="mt-1 break-words">{v?.startsWith("http") ? <a href={v} target="_blank" rel="noreferrer" className="underline">{v}</a> : v}</dd></div>
              ))}
          </dl>
        </Lightbox>
      )}
    </>
  );
}
