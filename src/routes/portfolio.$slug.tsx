import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getWork } from "@/content/works";
import { Cover } from "@/components/site/Cover";
import { Lightbox } from "@/components/site/Lightbox";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const work = getWork(params.slug);
    if (!work) throw notFound();
    return { work };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.work.title} — Ario Fajar Dharmawan` },
          { name: "description", content: loaderData.work.summary },
          { property: "og:title", content: loaderData.work.title },
          { property: "og:description", content: loaderData.work.summary },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Work not found" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="container-page py-32">
      <h1 className="text-4xl font-semibold tracking-tight">Work not found.</h1>
      <Link to="/portfolio" className="mt-6 inline-block text-sm underline">Back to portfolio</Link>
    </div>
  ),
  component: WorkDetail,
});

function WorkDetail() {
  const { work } = Route.useLoaderData();
  const [preview, setPreview] = useState<string | null>(null);
  const sections = [
    ["Background", work.background],
    ["Goals", work.goals],
    ["Role & Contribution", work.role],
    ["Process", work.process],
    ["Outcome", work.outcome],
  ].filter(([, v]) => v) as [string, string][];

  return (
    <article className="fade-up">
      <div className="container-page pt-12">
        <Link to="/portfolio" className="eyebrow hover:text-foreground">← All works</Link>
        <div className="mt-8 grid gap-6 border-b pb-10 md:grid-cols-12">
          <h1 className="text-4xl font-semibold tracking-tighter md:col-span-8 md:text-6xl">{work.title}</h1>
          <dl className="grid grid-cols-2 gap-4 text-sm md:col-span-4 md:self-end">
            <div><dt className="eyebrow">Category</dt><dd className="mt-1">{work.category}</dd></div>
            <div><dt className="eyebrow">Year</dt><dd className="mt-1">{work.year || "—"}</dd></div>
          </dl>
        </div>
      </div>
      <div className="container-page mt-10 aspect-[16/8] overflow-hidden">
        <Cover src={work.cover} title={work.title} label={work.category} dark />
      </div>
      <div className="container-page mt-16 grid gap-12 md:grid-cols-12">
        <p className="text-xl leading-relaxed md:col-span-4">{work.summary}</p>
        <div className="space-y-10 md:col-span-7 md:col-start-6">
          {sections.length === 0 && (
            <p className="border border-dashed p-6 text-sm text-muted-foreground">Project details are being prepared and will be added soon.</p>
          )}
          {sections.map(([h, v]) => (
            <section key={h}>
              <h2 className="eyebrow">{h}</h2>
              <p className="mt-3 whitespace-pre-line leading-relaxed">{v}</p>
            </section>
          ))}
          {work.links && work.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {work.links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="border px-4 py-2 text-sm hover:border-accent hover:text-accent">{l.label} ↗</a>)}
            </div>
          )}
        </div>
      </div>
      {work.gallery && work.gallery.length > 0 && (
        <section className="container-page mt-20">
          <h2 className="eyebrow mb-6">Documentation</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {work.gallery.map((g) => (
              <button key={g} onClick={() => setPreview(g)} className="aspect-[4/3] overflow-hidden" aria-label="Enlarge image">
                <img src={g} alt="" loading="lazy" className="h-full w-full object-cover transition-transform hover:scale-[1.03]" />
              </button>
            ))}
          </div>
        </section>
      )}
      {preview && <Lightbox src={preview} title={work.title} onClose={() => setPreview(null)} />}
    </article>
  );
}
