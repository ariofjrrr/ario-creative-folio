
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
      "Bidang yang saya eksplorasi dan kembangkan melalui berbagai karya dan proyek.",
    closing: "Selalu ada ruang untuk ide berikutnya.",
    contact: "Hubungi saya",
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
      "Fields I explore and develop through different works and projects.",
    closing: "There's always room for the next idea.",
    contact: "Get in touch",
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

      <section className="container-page pb-16 md:pb-20">
        {/* INTRO & LANGUAGE */}
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
        <div className="grid items-start gap-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
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

          <div className="pt-0 md:pt-2 lg:pt-4">
            <h2 className="max-w-2xl text-[2rem] font-semibold leading-[1.1] tracking-[-0.045em] sm:text-4xl lg:text-[3.25rem]">
              {t.headline}
            </h2>

            <div className="mt-6 max-w-[570px] space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {t.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {t.contact}
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* INTERESTS */}
        <div className="mt-16 grid gap-7 border-t border-foreground/15 pt-7 md:mt-20 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-16">
          <div>
            <p className="eyebrow">01 / {t.interests}</p>

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

        {/* CLOSING */}
        <div className="mt-16 flex flex-col gap-5 border-t border-foreground/15 pt-7 sm:flex-row sm:items-end sm:justify-between md:mt-20">
          <div>
            <p className="eyebrow mb-3">02 / Next Chapter</p>
            <h2 className="max-w-lg text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              {t.closing}
              <span className="text-accent">.</span>
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-3 border-b border-foreground/30 pb-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {t.contact}
            <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
