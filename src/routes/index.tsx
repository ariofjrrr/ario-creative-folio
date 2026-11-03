import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { works } from "@/content/works";
import { WorkCard } from "@/components/site/WorkCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ario Fajar Dharmawan" },
      { name: "description", content: "Personal portfolio of Ario Fajar Dharmawan: writing, visual design, digital experiences, and creative projects." },
      { property: "og:title", content: "Ario Fajar Dharmawan - Personal Portfolio" },
      { property: "og:description", content: "Writing, visual design, digital experiences, and creative projects - collected in one place." },
    ],
  }),
  component: Home,
});


function Home() {
  const areas = [
    ["01", "Writing"],
    ["02", "Visual Design"],
    ["03", "Web Development"],
  ];

  return (
    <>
      {/* HERO */}
      <section className="container-page pt-6 md:pt-8">
        <div className="flex items-center justify-between border-b border-foreground/15 pb-4">
          <span className="eyebrow">Personal Portfolio</span>
          <span className="eyebrow">Indonesia</span>
        </div>

        <div className="grid items-center gap-10 py-10 md:grid-cols-[minmax(0,1fr)_320px] md:gap-12 md:py-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16 lg:py-16">
          {/* INTRODUCTION */}
          <div className="fade-up">
            <p className="text-sm font-medium tracking-tight sm:text-base">
              {site.name}
            </p>

            <h1 className="mt-6 max-w-[650px] text-4xl font-bold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-[4.25rem]">
              Turning Ideas Into Meaningful Works
              <span className="text-accent">.</span>
            </h1>

            <p className="mt-6 max-w-[430px] text-sm leading-7 text-muted-foreground sm:text-base">
              Writing, visual design, digital experiences, and creative
              projects — collected in one place.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                Explore My Works
                <span className="ml-3">↗</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center border border-foreground/20 px-5 py-3 text-sm font-medium transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* PORTRAIT */}
          <figure
            className="fade-up mx-auto w-full max-w-[340px] md:ml-auto"
            style={{ animationDelay: "120ms" }}
          >
            <div className="overflow-hidden bg-muted">
              <img
                src={site.portrait}
                alt={`Portrait of ${site.name}`}
                width={700}
                height={900}
                className="aspect-[4/5] w-full object-cover object-center grayscale transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <figcaption className="mt-3 flex items-center justify-between border-t border-foreground/15 pt-3">
              <span className="eyebrow">{site.short}</span>
              <span className="eyebrow">Portrait / {site.year}</span>
            </figcaption>
          </figure>
        </div>

        {/* AREAS */}
        <div className="grid grid-cols-3 border-y border-foreground/15 py-4">
          {areas.map(([number, label]) => (
            <div key={number} className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-[10px] text-muted-foreground sm:text-xs">
                {number}
              </span>
              <span className="text-[11px] font-medium sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="container-page pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="mb-8 flex items-end justify-between border-b border-foreground/15 pb-5">
          <div>
            <p className="eyebrow mb-2">
              01 / Selected Projects
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected Works
              <span className="text-accent">.</span>
            </h2>
          </div>

          <Link
            to="/portfolio"
            className="mb-1 text-xs font-medium transition-colors hover:text-accent sm:text-sm"
          >
            View all ↗
          </Link>
        </div>

        <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {works.slice(0, 3).map((work, index) => (
            <WorkCard
              key={work.slug}
              work={work}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-page pb-14 md:pb-20">
        <div className="grid gap-6 bg-ink p-7 text-ink-foreground sm:p-9 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-10 md:p-11">
          <div>
            <p className="eyebrow mb-4 text-ink-foreground/50">
              02 / Collaboration
            </p>

            <h2 className="max-w-lg text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              Have a project in mind?
            </h2>
          </div>

          <div className="md:justify-self-end md:max-w-[300px]">
            <p className="text-sm leading-7 text-ink-foreground/70">
              Open to creative collaborations, freelance opportunities,
              and meaningful projects.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-3 border-b border-accent pb-2 text-sm font-medium transition-colors hover:text-accent"
            >
              Get in Touch
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
