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
      <section className="container-page pb-16 pt-5 md:pb-20 md:pt-8">
        {/* Top label */}
        <div className="flex items-center justify-between border-b border-foreground/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="eyebrow">Personal Portfolio / {site.year}</span>
          </div>
          <span className="eyebrow">Based in Indonesia</span>
        </div>

        {/* Main Hero */}
        <div className="grid items-center gap-10 py-10 md:grid-cols-12 md:gap-8 lg:gap-12 lg:py-14">
          {/* Text */}
          <div className="fade-up md:col-span-7">
            <p className="text-sm font-medium tracking-wide text-muted-foreground">
              Hello, I'm
            </p>

            <p className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
              {site.name}
              <span className="text-accent">.</span>
            </p>

            <h1 className="mt-8 max-w-[720px] text-[clamp(3.2rem,6.5vw,6.5rem)] font-bold leading-[0.94] tracking-[-0.065em]">
              Turning Ideas
              <br />
              Into Meaningful
              <br />
              <span className="text-muted-foreground">Works</span>
              <span className="text-accent">.</span>
            </h1>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
                Writing, visual design, digital experiences, and creative
                projects — collected in one place.
              </p>

              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-3 bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
                >
                  Explore Works <span>↗</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center border border-foreground/20 px-5 py-3.5 text-sm font-medium transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <figure
            className="fade-up mx-auto w-full max-w-[390px] md:col-span-5 md:ml-auto"
            style={{ animationDelay: "150ms" }}
          >
            <div className="relative">
              <img
                src={site.portrait}
                alt={`Portrait of ${site.name}`}
                width={700}
                height={900}
                className="aspect-[4/5] w-full object-cover grayscale"
              />

              <span className="absolute bottom-4 right-4 bg-background px-3 py-2 font-mono text-[10px] tracking-widest text-foreground">
                AFD / {site.year}
              </span>
            </div>

            <figcaption className="mt-4 flex items-center justify-between border-t border-foreground/15 pt-3">
              <span className="eyebrow">{site.short}</span>
              <span className="eyebrow">Personal Portrait</span>
            </figcaption>
          </figure>
        </div>

        {/* Expertise Strip */}
        <div className="grid grid-cols-3 border-y border-foreground/15 py-5">
          {[
            ["01", "Writing"],
            ["02", "Visual Design"],
            ["03", "Web Development"],
          ].map(([number, label]) => (
            <div key={number} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <span className="font-mono text-[11px] text-muted-foreground">
                {number}
              </span>
              <span className="text-xs font-medium tracking-wide sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="container-page py-14 md:py-20">
        <div className="mb-10 flex items-end justify-between border-b border-foreground/15 pb-5">
          <div>
            <p className="eyebrow mb-3">01 / Selected Projects</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Selected Works<span className="text-accent">.</span>
            </h2>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
          >
            View all <span>↗</span>
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
        <div className="relative overflow-hidden bg-ink p-8 text-ink-foreground sm:p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow mb-5 text-ink-foreground/50">
                02 / Collaboration
              </p>
              <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Have an idea?
                <br />
                Let's make it happen<span className="text-accent">.</span>
              </h2>
            </div>

            <div className="md:justify-self-end md:max-w-sm">
              <p className="text-sm leading-relaxed text-ink-foreground/65">
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
        </div>
      </section>
    </>
  );
}
