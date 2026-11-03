
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/FilterBar";
import { site } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - AFD" },
      {
        name: "description",
        content:
          "The person behind AFD — exploring creativity, communication, and technology.",
      },
    ],
  }),
  component: About,
});

const translations = {
  ID: {
    label: "Sedikit tentang saya",
    headline: "Menciptakan sesuatu, satu ide dalam satu waktu.",
    paragraphs: [
      "Saya Ario Fajar Dharmawan. Saya tertarik pada bagaimana ide dapat berkembang menjadi karya, bagaimana visual menyampaikan pesan, dan bagaimana teknologi membuka kemungkinan baru.",
      "Saya mengeksplorasi berbagai medium, mulai dari tulisan dan desain hingga pengembangan website. Setiap bidang memberi cara pandang yang berbeda dalam memahami dan menyelesaikan sesuatu.",
      "Di sini, saya mengumpulkan sebagian dari proses tersebut. Karya yang sudah selesai, hal-hal yang sedang dipelajari, dan ide yang masih terus berkembang.",
    ],
    interests: "Hal yang saya eksplorasi",
    interestDescription:
      "Beberapa bidang yang menjadi ruang eksplorasi, tempat saya belajar, bereksperimen, dan mengembangkan ide menjadi karya.",
    closingLabel: "Mari terhubung",
    closing: "Punya ide untuk diwujudkan bersama?",
    contact: "Hubungi saya",
    location: "Indonesia",
    role: "Creative & Digital Exploration",
  },
  EN: {
    label: "A little about me",
    headline: "Making things, one idea at a time.",
    paragraphs: [
      "I'm Ario Fajar Dharmawan. I'm interested in how ideas become tangible work, how visuals communicate messages, and how technology creates new possibilities.",
      "I explore different mediums, from writing and design to web development. Each field offers a different perspective on understanding and solving things.",
      "This space brings together parts of that process: finished work, things I'm learning, and ideas that are still taking shape.",
    ],
    interests: "Things I explore",
    interestDescription:
      "A few fields that give me room to learn, experiment, and develop ideas into meaningful work.",
    closingLabel: "Let's connect",
    closing: "Have an idea to bring to life together?",
    contact: "Get in touch",
    location: "Indonesia",
    role: "Creative & Digital Exploration",
  },
};

const interests = [
  {
    number: "01",
    title: "Creative Writing",
    description: "Ideas, narratives, and written expression",
  },
  {
    number: "02",
    title: "Graphic Design",
    description: "Visual identity and communication",
  },
  {
    number: "03",
    title: "Web Development",
    description: "Websites and digital experiences",
  },
  {
    number: "04",
    title: "Digital Communication",
    description: "Content and creative communication",
  },
  {
    number: "05",
    title: "Research & Documentation",
    description: "Information, exploration, and documentation",
  },
];

function About() {
  const [language, setLanguage] = useState<"ID" | "EN">("ID");
  const t = translations[language];

  return (
    <>
      <PageHeader index="02 / ABOUT" title="About." />

      <main className="container-page pb-12 md:pb-16">
        {/* INTRO BAR */}
        <div className="mb-8 flex items-center justify-between border-b border-foreground/15 pb-3 md:mb-9">
          <p className="eyebrow">{t.label}</p>

          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              type="button"
              onClick={() => setLanguage("ID")}
              aria-pressed={language === "ID"}
              className={`transition-colors ${
                language === "ID"
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ID
            </button>

            <span className="text-muted-foreground/50">/</span>

            <button
              type="button"
              onClick={() => setLanguage("EN")}
              aria-pressed={language === "EN"}
              className={`transition-colors ${
                language === "EN"
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* PROFILE */}
        <section className="grid items-start gap-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
          {/* PORTRAIT */}
          <figure className="mx-auto w-full max-w-[300px] md:mx-0">
            <div className="overflow-hidden bg-muted">
              <img
                src={site.portrait}
                alt={`Portrait of ${site.name}`}
                width={896}
                height={1152}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-center grayscale transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <figcaption className="mt-2 flex items-center justify-between border-t border-foreground/15 pt-2 text-xs text-muted-foreground">
              <span>{site.short}</span>
              <span>Portfolio / {site.year}</span>
            </figcaption>
          </figure>

          {/* BIO */}
          <div className="flex flex-col pt-0 md:pt-2 lg:pt-4">
            <p className="eyebrow mb-4">The Person Behind AFD</p>

            <h2 className="max-w-2xl text-[2rem] font-semibold leading-[1.1] tracking-[-0.045em] sm:text-4xl lg:text-[3.25rem]">
              {t.headline}
              <span className="text-accent">.</span>
            </h2>

            <div className="mt-6 max-w-[570px] space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {t.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex w-fit items-center gap-3 border-b border-foreground/30 pb-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {t.contact}
              <span>↗</span>
            </Link>

            {/* PROFILE DETAILS */}
            <div className="mt-8 grid max-w-[570px] grid-cols-2 gap-5 border-t border-foreground/15 pt-5">
              <div>
                <p className="eyebrow mb-2">Based in</p>
                <p className="text-sm font-medium">{t.location}</p>
              </div>

              <div>
                <p className="eyebrow mb-2">Focus</p>
                <p className="text-sm font-medium">{t.role}</p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERESTS */}
        <section className="mt-16 border-t border-foreground/15 pt-7 md:mt-20">
          <div className="grid gap-7 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-16">
            <div>
              <p className="eyebrow">01 / {t.interests}</p>

              <h2 className="mt-3 max-w-xs text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                Areas of exploration<span className="text-accent">.</span>
              </h2>

              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                {t.interestDescription}
              </p>
            </div>

            <div>
              {interests.map((interest) => (
                <div
                  key={interest.number}
                  className="group flex items-center justify-between gap-5 border-b border-foreground/15 py-4 first:border-t"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {interest.number}
                    </span>

                    <div>
                      <p className="text-sm font-medium tracking-tight transition-colors group-hover:text-accent sm:text-base">
                        {interest.title}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {interest.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-sm text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="mt-16 border-t border-foreground/15 pt-7 md:mt-20">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-10">
            <div>
              <p className="eyebrow mb-3">02 / {t.closingLabel}</p>

              <h2 className="max-w-xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                {t.closing}
                <span className="text-accent">.</span>
              </h2>
            </div>

            <div className="md:justify-self-end">
              <p className="max-w-[300px] text-sm leading-7 text-muted-foreground">
                {language === "ID"
                  ? "Terbuka untuk kolaborasi kreatif, kesempatan, dan ide-ide menarik."
                  : "Open to creative collaborations, opportunities, and interesting ideas."}
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {t.contact}
                <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
