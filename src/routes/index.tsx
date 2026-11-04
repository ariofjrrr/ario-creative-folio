
import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { works } from "@/content/works";
import { WorkCard } from "@/components/site/WorkCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ario Fajar Dharmawan" },
      {
        name: "description",
        content:
          "Personal portfolio of Ario Fajar Dharmawan, featuring writing, visual design, web development, and creative projects.",
      },
      {
        property: "og:title",
        content: "Ario Fajar Dharmawan — Creative Portfolio",
      },
      {
        property: "og:description",
        content:
          "A collection of writing, visual design, digital experiences, and creative projects.",
      },
    ],
  }),
  component: Home,
});

const disciplines = [
  { number: "01", title: "Writing", detail: "Ideas & storytelling" },
  { number: "02", title: "Visual Design", detail: "Visual communication" },
  { number: "03", title: "Web Development", detail: "Digital experiences" },
];

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="container-page -mt-12 md:-mt-20 pt-2 md:pt-4">
        <div className="grid items-center gap-8 py-4 sm:py-5 md:grid-cols-[minmax(0,1fr)_300px] md:gap-10 md:py-6 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-14 lg:py-8">
          <div className="fade-up">
            <p className="mb-5 text-sm font-medium tracking-tight text-muted-foreground">
              Hello, I'm
            </p>

            <h1 className="max-w-[700px] text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[4.65rem]">
              {site.name}
              <span className="text-accent">.</span>
            </h1>

            <p className="mt-5 max-w-[520px] text-xl font-medium leading-snug tracking-tight sm:text-2xl">
              Turning ideas into meaningful works.
            </p>

            <p className="mt-5 max-w-[440px] text-sm leading-7 text-muted-foreground sm:text-base">
              Exploring the intersection of writing, visual design, and web
              development through creative ideas and digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                Explore Portfolio
                <span>↗</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center border border-foreground/20 px-5 py-3.5 text-sm font-medium transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <figure
            className="fade-up mx-auto w-full max-w-[350px] md:ml-auto"
            style={{ animationDelay: "120ms" }}
          >
            <div className="overflow-hidden bg-muted">
              <img
                src={site.portrait}
                alt={`Portrait of ${site.name}`}
                width={700}
                height={900}
                className="aspect-[4/5] w-full object-cover object-center grayscale transition-transform duration-700 hover:scale-[1.025]"
              />
            </div>

            <figcaption className="mt-2 flex justify-between border-t border-foreground/15 pt-2">
              <span className="eyebrow">{site.short}</span>
              <span className="eyebrow">Portfolio {}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="container-page">
        <div className="grid grid-cols-1 border-y border-foreground/15 sm:grid-cols-3">
          {disciplines.map((item, index) => (
            <div
              key={item.number}
              className={`flex items-start gap-3 py-3 sm:py-4 ${
                index !== 2
                  ? "border-b border-foreground/15 sm:border-b-0 sm:border-r"
                  : ""
              } ${index > 0 ? "sm:pl-5" : ""}`}
            >
              <span className="mt-1 font-mono text-xs text-muted-foreground">
                {item.number}
              </span>
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="container-page pb-12 pt-10 md:pb-16 md:pt-12">
        <div className="mb-6 flex items-end justify-between border-b border-foreground/15 pb-4">
          <div>
            <p className="eyebrow mb-2">01 / Selected Projects</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected Works<span className="text-accent">.</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A selection of ideas brought into form.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="mb-1 inline-flex items-center gap-2 text-xs font-medium transition-colors hover:text-accent sm:text-sm"
          >
            View all <span>↗</span>
          </Link>
        </div>

        <div className="grid gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {works.slice(0, 3).map((work, index) => (
            <WorkCard key={work.slug} work={work} index={index} />
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-page pb-12 md:pb-16">
        <div className="grid gap-6 border-y border-foreground/15 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:py-19">
          <div>
            <p className="eyebrow">02 / A Little About Me</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Beyond the work<span className="text-accent">.</span>
            </h2>
          </div>

          <div className="md:max-w-[570px]">
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              I enjoy turning thoughts and ideas into things people can read,
              see, and experience. My interests span creative writing, visual
              communication, and building digital products.
            </p>

            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              More about me <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-page pb-10 md:pb-14">
        <div className="grid gap-7 bg-ink px-6 py-7 text-ink-foreground sm:px-9 sm:py-9 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-10 md:px-10 md:py-11">
          <div>
            <p className="eyebrow mb-4 text-ink-foreground/50">
              03 / Let's Connect
            </p>

            <h2 className="max-w-lg text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              Have an idea worth bringing to life?
            </h2>
          </div>

          <div className="md:justify-self-end md:max-w-[310px]">
            <p className="text-sm leading-7 text-ink-foreground/70">
              Open to creative collaborations, freelance opportunities, and
              meaningful projects.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-3 border-b border-accent pb-2 text-sm font-medium transition-colors hover:text-accent"
            >
              Start a Conversation <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
