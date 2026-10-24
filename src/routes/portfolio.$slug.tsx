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
    ["Project Goals", work.goals],
    ["Role & Contribution", work.role],
    ["Development Process", work.process],
    ["Outcome", work.outcome],
  ].filter(([, value]) => value) as [string, string][];

  return (
    <article className="fade-up pb-24">
      {/* Header */}
      <div className="container-page pt-12">
        <Link
          to="/portfolio"
          className="eyebrow hover:text-foreground"
        >
          ← All works
        </Link>

        <div className="mt-10 grid gap-8 border-b pb-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow mb-4">
              {work.category} / Selected project
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tighter md:text-6xl">
              {work.title}
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              {work.summary}
            </p>

            {work.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 border px-5 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <dl className="grid grid-cols-2 gap-5 self-end text-sm md:col-span-4">
            <div className="border-t pt-3">
              <dt className="eyebrow">Category</dt>
              <dd className="mt-2">{work.category}</dd>
            </div>

            <div className="border-t pt-3">
              <dt className="eyebrow">Year</dt>
              <dd className="mt-2">{work.year || "—"}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Project cover */}
      <div className="container-page mt-10">
        <div className="aspect-[16/9] overflow-hidden border bg-neutral-50 dark:bg-neutral-900 md:aspect-[16/7]">
          <Cover
            src={work.cover}
            title={work.title}
            label={work.category}
            dark
          />
        </div>
      </div>

      {/* Overview */}
      <div className="container-page mt-20 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow">01 / Project overview</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">
            The idea behind the project.
          </h2>
        </div>

        <div className="space-y-8 md:col-span-7 md:col-start-6">
          {sections.slice(0, 2).map(([heading, content]) => (
            <section key={heading}>
              <h3 className="eyebrow">{heading}</h3>
              <p className="mt-3 whitespace-pre-line leading-8 text-muted-foreground">
                {content}
              </p>
            </section>
          ))}
        </div>
      </div>

      {/* Contribution and process */}
      <div className="container-page mt-20 border-y py-12">
        <p className="eyebrow">02 / Execution</p>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {sections.slice(2, 4).map(([heading, content]) => (
            <section key={heading}>
              <h2 className="text-xl font-semibold tracking-tight">
                {heading}
              </h2>
              <p className="mt-4 whitespace-pre-line leading-8 text-muted-foreground">
                {content}
              </p>
            </section>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      {work.techStack && work.techStack.length > 0 && (
        <section className="container-page mt-20">
          <p className="eyebrow">03 / Tools & technology</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">
            Built with the right tools.
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            {work.techStack.map((tech) => (
              <span
                key={tech}
                className="border px-4 py-2 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Outcome */}
      {sections.slice(4).map(([heading, content]) => (
        <section
          key={heading}
          className="container-page mt-20 border-t pt-10"
        >
          <p className="eyebrow">05 / Project conclusion</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">
            {heading}
          </h2>
          <p className="mt-4 max-w-3xl whitespace-pre-line leading-8 text-muted-foreground">
            {content}
          </p>
        </section>
      ))}

      {/* Final call to action */}
      <div className="container-page mt-20">
        <div className="flex flex-col justify-between gap-6 border p-7 md:flex-row md:items-center md:p-10">
          <div>
            <p className="eyebrow">Explore the live project</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              See it in action.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Visit the published website to explore the result.
            </p>
          </div>

          {work.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 border px-5 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {link.label} ↗
            </a>
          ))}
        </div>

        <Link
          to="/portfolio"
          className="mt-8 inline-block text-sm text-muted-foreground hover:text-foreground"
        >
          ← Explore other projects
        </Link>
      </div>

      {preview && (
        <Lightbox
          src={preview}
          title={work.title}
          onClose={() => setPreview(null)}
        />
      )}
    </article>
  );
}
