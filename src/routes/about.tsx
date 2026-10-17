import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/FilterBar";
import { site } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - AFD" },
      { name: "description", content: "About Ario Fajar Dharmawan, a digital creator interested in writing, visual communication, technology and digital projects." },
      { property: "og:title", content: "About - AFD" },
      { property: "og:description", content: "A digital creator working across writing, visual communication, and technology." },
    ],
  }),
  component: About,
});

const areas = [
  ["Creative Writing", "Narratives, essays, and long-form manuscripts."],
  ["Graphic Design", "Visual communication for print and digital media."],
  ["Web Development", "Building clear, functional websites."],
  ["Digital Communication", "Shaping messages for the right audience."],
  ["Research & Documentation", "Recording activities, processes, and outcomes."],
];

function About() {
  return (
    <>
      <PageHeader index="02 - About" title="About me." />
      <section className="container-page grid gap-12 md:grid-cols-12">
        <img src={site.portrait} alt={`Portrait of ${site.name}`} loading="lazy" width={896} height={1152} className="aspect-[4/5] w-full object-cover grayscale md:col-span-4" />
        <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-6">
          <p className="text-2xl font-medium leading-snug tracking-tight">
            I'm {site.name}, a digital creator interested in writing, visual communication, technology, and building digital projects.
          </p>
          <p className="text-muted-foreground">
            This site gathers what I make and what I'm learning along the way, written works, design pieces, websites, and the documentation of projects I've been part of. I see each piece as part of an ongoing practice rather than a finished statement.
          </p>
          <p className="text-muted-foreground">
            I value work that is clear, purposeful, and made with care, and I'm always open to collaborating with people who feel the same.
          </p>
          <Link to="/contact" className="inline-block border-b border-foreground pb-1 text-base font-medium hover:border-accent hover:text-accent">Let's talk →</Link>
        </div>
      </section>
      <section className="container-page mt-24">
        <p className="eyebrow mb-6">Areas of interest</p>
        <ul className="border-t">
          {areas.map(([t, d], i) => (
            <li key={t} className="grid grid-cols-[3rem_1fr] gap-4 border-b py-6 md:grid-cols-[4rem_1fr_1fr]">
              <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              <span className="text-xl font-semibold tracking-tight md:text-2xl">{t}</span>
              <span className="col-start-2 text-muted-foreground md:col-start-3">{d}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
