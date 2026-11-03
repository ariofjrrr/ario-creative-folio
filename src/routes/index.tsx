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
      {/* Hero */}
      <section className="container-page pb-16 pt-5 md:pb-20 md:pt-8">
        {/* Top Information */}
        <div className="flex items-center justify-between border-b pb-3">
          <span className="eyebrow">
            Personal Portfolio {site.year}
          </span>
          <span className="eyebrow">Indonesia</span>
        </div>

        {/* Main Composition */}
        <div className="grid items-center gap-10 py-10 md:grid-cols-[1.25fr_0.75fr] md:gap-12 md:py-12 lg:gap-20">
          {/* Introduction */}
          <div className="fade-up">
            <p className="text-base font-medium sm:text-lg">
              {site.name}
            </p>

            <h1 className="mt-5 max-w-[680px] text-[clamp(3rem,6.2vw,5.8rem)] font-bold leading-[0.98] tracking-[-0.06em]">
              Turning Ideas Into Meaningful Works<span className="text-accent">.</span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Writing, visual design, digital experiences, and creative
              projects — collected in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                Explore My Works <span>↗</span>
              </Link>

              <Link
                to="/contact"
                className="border border-foreground px-6 py-3.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <figure
            className="fade-up mx-auto w-full max-w-[360px] md:mr-0 md:ml-auto"
            style={{ animationDelay: "120ms" }}
          >
            <img
              src={site.portrait}
              alt={`Portrait of ${site.name}`}
              width={700}
              height={900}
              className="aspect-[4/5] w-full object-cover grayscale"
            />

            <figcaption className="mt-3 flex justify-between eyebrow">
              <span>{site.short}</span>
              <span>Portrait / {site.year}</span>
            </figcaption>
          </figure>
        </div>

        {/* Category Strip */}
        <div className="grid grid-cols-3 border-t pt-4">
          {["Writing", "Design", "Web"].map((item, index) => (
            <div key={item} className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs text-muted-foreground">
                0{index + 1}
              </span>
              <span className="text-sm font-medium sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Works */}
      <section className="container-page py-14 md:py-20">
        <div className="mb-10 flex items-end justify-between border-b pb-4">
          <div>
            <p className="eyebrow mb-3">01 / Portfolio</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Selected Works
            </h2>
          </div>

          <Link
            to="/portfolio"
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            All works ↗
          </Link>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {works.slice(0, 3).map((work, index) => (
            <WorkCard key={work.slug} work={work} index={index} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="container-page pb-16 pt-8 md:pb-20">
        <div className="grid gap-8 bg-ink p-8 text-ink-foreground sm:p-10 md:grid-cols-2 md:items-end md:p-14">
          <div>
            <p className="eyebrow mb-4">
              02 / Get in touch
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
              className="mt-6 inline-flex items-center gap-3 border-b border-accent pb-2 text-sm font-medium transition-colors hover:text-accent"
            >
              Get in Touch <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
