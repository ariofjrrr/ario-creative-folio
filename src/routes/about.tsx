
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

      <section className="container-page">
        <div className="mb-8 flex items-center justify-between">
          <p className="eyebrow">{t.label}</p>

          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              type="button"
              onClick={() => setLanguage("ID")}
              aria-pressed={language === "ID"}
              className={
                language === "ID"
                  ? "text-foreground"
                  : "text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              ID
            </button>
            <span className="text-muted-foreground">/</span>
            <button
              type="button"
              onClick={() => setLanguage("EN")}
              aria-pressed={language === "EN"}
              className={
                language === "EN"
                  ? "text-foreground"
                  : "text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              EN
            </button>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <img
              src={site.portrait}
              alt={`Portrait of ${site.name}`}
              width={896}
              height={1152}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale"
            />
            <div className="mt-3 flex justify-between text-xs text-muted-foreground">
              <span>{site.name}</span>
              <span>AFD — 2026</span>
            </div>
          </div>

          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
            <h2 className="max-w-xl text-4xl font-medium leading-[1.12] tracking-tight md:text-5xl lg:text-6xl">
              {t.headline}
            </h2>

            <div className="mt-9 max-w-lg space-y-5 text-sm leading-7 text-muted-foreground md:text-base">
              {t.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-9 inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {t.contact} <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page mb-20 mt-28">
        <div className="grid gap-8 border-t pt-8 md:grid-cols-12">
          <p className="eyebrow md:col-span-4">{t.interests}</p>

          <div className="md:col-span-7 md:col-start-6">
            {interests.map((interest, index) => (
              <div
                key={interest}
                className="flex items-center justify-between gap-4 border-b py-5"
              >
                <span className="text-lg font-medium tracking-tight md:text-xl">
                  {interest}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
            ))}

            <p className="mt-12 max-w-md text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              {t.closing}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
