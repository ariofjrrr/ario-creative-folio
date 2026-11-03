
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
    headline: "Ide menarik layak diwujudkan menjadi sesuatu.",
    paragraphs: [
      "Saya Ario Fajar Dharmawan. Saya tertarik pada proses di balik sebuah karya: bagaimana ide terbentuk, bagaimana visual menyampaikan pesan, dan bagaimana teknologi membuka kemungkinan baru.",
      "Saya mengeksplorasi berbagai medium, mulai dari penulisan dan desain visual hingga pengembangan website. Ketiganya memberi ruang bagi saya untuk bereksperimen, belajar, dan menyampaikan gagasan dengan cara yang berbeda.",
      "Halaman ini menjadi ruang untuk mengenal sebagian perjalanan tersebut melalui karya, proyek, dan hal-hal yang terus saya pelajari.",
    ],
    interests: "Bidang yang saya eksplorasi",
    interestDescription:
      "Beberapa bidang yang menjadi bagian dari proses kreatif dan pengembangan diri saya.",
    closing: "Mari mulai sesuatu yang bermakna.",
    contact: "Hubungi saya",
    viewWork: "Lihat karya",
  },
  EN: {
    label: "A little about me",
    headline: "Good ideas deserve to become something meaningful.",
    paragraphs: [
      "I'm Ario Fajar Dharmawan. I'm interested in the process behind creative work: how ideas take shape, how visuals communicate messages, and how technology opens new possibilities.",
      "I explore different mediums, from writing and visual design to web development. Each gives me room to experiment, learn, and communicate ideas in different ways.",
      "This page offers a glimpse into that journey through selected works, projects, and things I'm continuously learning.",
    ],
    interests: "Areas of exploration",
    interestDescription:
      "A few fields that are part of my creative process and personal development.",
    closing: "Let's create something meaningful.",
    contact: "Get in touch",
    viewWork: "View my work",
  },
};

const interests = [
  "Creative Writing",
  "Graphic Design",
  "Web Development",
  "Digital Communication",
  "Research & Documentation",
];

function About() {
  const [language, setLanguage] = useState<"ID" | "EN">("ID");
  const t = translations[language];

  return (
    <>
      <PageHeader index="02 / ABOUT" title="About." />

      <main className="container-page pb-12 md:pb-16">
        {/* INTRO */}
        <div className="mb-8 flex items-center justify-between border-b border-foreground/15 pb-3 md:mb-10">
          <p className="eyebrow">{t.label}</p>

          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              type="button"
              onClick={() => setLanguage("ID")}
              aria-pressed={language === "ID"}
              className={`transition-colors ${
                language === "ID"
                  ? "text-foreground"
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
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* PROFILE */}
        <section className="grid items-start gap-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-14">
          <figure className="mx-auto w-full max-w-[300px] md:mx-0">
            <div className="overflow-hidden bg-muted">
              <img
                src={site.portrait}
                alt={`Portrait of ${site.name}`}
                width={896}
                height={1152}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-center grayscale"
              />
            </div>

            <figcaption className="mt-2 flex justify-between border-t border-foreground/15 pt-2 text-xs text-muted-foreground">
              <span>{site.short}</span>
              <span>Portfolio / {site.year}</span>
            </figcaption>
          </figure>

          <div className="pt-0 md:pt-2 lg:pt-3">
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

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border-b border-foreground/30 pb-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {t.viewWork} <span>↗</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {t.contact} <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* AREAS OF INTEREST */}
        <section className="mt-16 border-t border-foreground/15 pt-7 md:mt-20">
          <div className="grid gap-7 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-16">
            <div>
              <p className="eyebrow">01 / {t.interests}</p>

              <h2 className="mt-3 max-w-xs text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                Different interests, one creative process.
                <span className="text-accent">.</span>
              </h2>

              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                {t.interestDescription}
              </p>
            </div>

            <div>
              {interests.map((interest, index) => (
                <div
                  key={interest}
                  className="flex items-center justify-between gap-5 border-b border-foreground/15 py-4 first:border-t"
                >
                  <span className="text-sm font-medium tracking-tight sm:text-base">
                    {interest}
                  </span>

                  <span className="font-mono text-xs text-muted-foreground">
                    0{index + 1}
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
              <p className="eyebrow mb-3">02 / Let's Connect</p>

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
                {t.contact} <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
