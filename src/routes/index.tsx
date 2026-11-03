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
      <section className="container-page grid items-center gap-10 pb-16 pt-6 md:grid-cols-12 md:gap-10 md:pb-20 md:pt-8 lg:gap-14">
        {/* Left Content */}
        <div className="fade-up flex flex-col justify-between gap-10 md:col-span-7">
          <div className="flex items-center justify-between border-b pb-3">
            <span className="eyebrow">Personal Portfolio {site.year}</span>
            <span className="eyebrow hidden sm:inline">Indonesia</span>
          </div>

          <div className="py-2 md:py-6">
            <p className="text-base font-medium sm:text-lg">{site.name}</p>

            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl">
              Turning Ideas Into Meaningful Works<span className="text-accent">.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Writing, visual design, digital experiences, and creative
              projects — collected in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                Explore My Works <span className="ml-2">↗</span>
              </Link>

              <Link
                to="/contact"
                className="border border-foreground px-6 py-3.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 border-t pt-4">
            {["Writing", "Design", "Web"].map((item, index) => (
              <span key={item} className="eyebrow">
                0{index + 1} / {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Portrait */}
        <figure
          className="fade-up flex flex-col items-center md:col-span-5 md:items-end"
          style={{ animationDelay: "120ms" }}
        >
          <img
            src={site.portrait}
            alt={`Portrait of ${site.name}`}
            width={700}
            height={900}
            className="aspect-[4/5] w-full max-w-[400px] object-cover grayscale lg:max-w-[440px]"
          />

          <figcaption className="mt-3 flex w-full max-w-[400px] justify-between eyebrow lg:max-w-[440px]">
            <span>{site.short}</span>
            <span>Portrait / 2026</span>
          </figcaption>
        </figure>
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

      {/* Contact CTA */}
      <section className="container-page pb-16 pt-8 md:pb-20">
        <div className="grid gap-8 bg-ink p-8 text-ink-foreground sm:p-10 md:grid-cols-2 md:items-end md:p-14">
          <div>
            <p className="eyebrow mb-4 text-ink-foreground/60">
              02 / Get in touch
            </p>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Have a project in mind?
            </h2>
          </div>

          <div className="md:justify-self-end md:max-w-sm">
            <p className="text-sm leading-relaxed text-ink-foreground/70">
              Open to creative collaborations, freelance opportunities, and
              meaningful projects.
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
