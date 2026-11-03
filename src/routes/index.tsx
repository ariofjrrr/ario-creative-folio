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
  return (
    <>
      {/* HERO */}
      <section className="container-page pb-8 pt-6 md:pb-10 md:pt-8">
        {/* Metadata */}
        <div className="flex items-center justify-between border-b border-foreground/15 pb-4">
          <span className="eyebrow">
            Personal Portfolio {}
          </span>
          <span className="eyebrow">Indonesia</span>
        </div>

        {/* Main composition */}
        <div className="grid items-center gap-10 py-10 md:grid-cols-[minmax(0,1fr)_340px] md:gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16 lg:py-14">
          {/* Introduction */}
          <div className="fade-up">
            <p className="text-base font-medium tracking-tight">
              {site.name}
            </p>

            <h1 className="mt-7 max-w-[680px] text-5xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
              Turning Ideas Into Meaningful Works<span className="text-accent">.</span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
              Writing, visual design, digital experiences, and creative
              projects - collected in one place.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/portfolio"
                className="bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                Explore My Works <span className="ml-2">↗</span>
              </Link>

              <Link
                to="/contact"
                className="border border-foreground/20 px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <figure
            className="fade-up mx-auto w-full max-w-[380px] md:ml-auto"
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

            <figcaption className="mt-3 flex justify-between border-t border-foreground/15 pt-3">
              <span className="eyebrow">{site.short}</span>
              <span className="eyebrow">Portrait / {site.year}</span>
            </figcaption>
          </figure>
        </div>

        {/* Areas */}
        <div className="grid grid-cols-3 border-y border-foreground/15 py-5">
          {[
            ["01", "Writing"],
            ["02", "Visual Design"],
            ["03", "Web Development"],
          ].map(([number, label]) => (
            <div key={number} className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground">
                {number}
              </span>
              <span className="text-xs font-medium sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="container-page pb-14 pt-6 md:pb-20 md:pt-8">
        <div className="mb-10 flex items-end justify-between border-b border-foreground/15 pb-5">
          <div>
            <p className="eyebrow mb-3">01 / Selected Projects</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Selected Works<span className="text-accent">.</span>
            </h2>
          </div>

          <Link
            to="/portfolio"
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            View all ↗
          </Link>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {works.slice(0, 3).map((work, index) => (
            <WorkCard key={work.slug} work={work} index={index} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-page pb-16 pt-8 md:pb-20">
        <div className="grid gap-8 bg-ink p-8 text-ink-foreground sm:p-10 md:grid-cols-2 md:items-end md:p-14">
          <div>
            <p className="eyebrow mb-5 text-ink-foreground/50">
              02 / Collaboration
            </p>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Have a project in mind?
            </h2>
          </div>

          <div className="md:justify-self-end md:max-w-sm">
            <p className="text-sm leading-relaxed text-ink-foreground/70">
              Open to creative collaborations, freelance opportunities,
              and meaningful projects.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-3 border-b border-accent pb-2 text-sm font-medium transition-colors hover:text-accent"
            >
              Get in Touch <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
