import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { works } from "@/content/works";
import { WorkCard } from "@/components/site/WorkCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ario Fajar Dharmawan — Turning Ideas Into Meaningful Works" },
      { name: "description", content: "Personal portfolio of Ario Fajar Dharmawan: writing, visual design, digital experiences, and creative projects." },
      { property: "og:title", content: "Ario Fajar Dharmawan — Personal Portfolio" },
      { property: "og:description", content: "Writing, visual design, digital experiences, and creative projects — collected in one place." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="container-page grid gap-12 pb-20 pt-12 md:grid-cols-12 md:pt-20">
        <div className="fade-up md:col-span-7 md:flex md:flex-col md:justify-between">
          <div className="flex justify-between border-b pb-3">
            <span className="eyebrow">Personal Portfolio · {site.year}</span>
            <span className="eyebrow hidden sm:inline">Indonesia</span>
          </div>
          <div className="py-10 md:py-0">
            <p className="text-lg font-medium">{site.name}</p>
            <h1 className="mt-4 text-5xl font-bold leading-[0.95] tracking-tighter sm:text-6xl lg:text-8xl">
              Turning Ideas Into Meaningful Works<span className="text-accent">.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">
              Writing, visual design, digital experiences, and creative projects — collected in one place.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/portfolio" className="bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent">Explore My Works</Link>
              <Link to="/contact" className="border border-foreground px-6 py-3.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background">Get in Touch</Link>
            </div>
          </div>
          <div className="grid grid-cols-3 border-t pt-3">
            {["Writing", "Design", "Web"].map((t, i) => <span key={t} className="eyebrow">0{i + 1} — {t}</span>)}
          </div>
        </div>
        <figure className="fade-up md:col-span-5" style={{ animationDelay: "120ms" }}>
          <img src={site.portrait} alt={`Portrait of ${site.name}`} width={896} height={1152} className="aspect-[4/5] w-full object-cover grayscale" />
          <figcaption className="eyebrow mt-3 flex justify-between"><span>{site.short}</span><span>Portrait</span></figcaption>
        </figure>
      </section>

      <section className="container-page py-16">
        <div className="mb-10 flex items-end justify-between border-b pb-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected Works</h2>
          <Link to="/portfolio" className="text-sm font-medium hover:text-accent">All works →</Link>
        </div>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {works.slice(0, 3).map((w, i) => <WorkCard key={w.slug} work={w} index={i} />)}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-8 bg-ink p-8 text-ink-foreground md:grid-cols-2 md:p-14">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Have a project in mind?</h2>
          <div className="md:self-end">
            <p className="opacity-70">Open to creative collaborations, freelance opportunities, and meaningful projects.</p>
            <Link to="/contact" className="mt-6 inline-block border-b border-accent pb-1 text-sm font-medium">Get in Touch →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
