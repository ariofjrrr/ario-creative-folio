
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
      <PageHeader index="02 / ABOUT" title="About." />

      <section className="container-page">
        {/* Language */}
        <div className="mb-10 flex items-center justify-between border-b pb-4">
          <p className="eyebrow">{t.label}</p>

          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              type="button"
              onClick={() => setLanguage("ID")}
              aria-pressed={language === "ID"}
              className={language === "ID" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
            >
              ID
            </button>
            <span className="text-muted-foreground">/</span>
            <button
              type="button"
              onClick={() => setLanguage("EN")}
              aria-pressed={language === "EN"}
              className={language === "EN" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
            >
              EN
            </button>
          </div>
        </div>

        {/* Profile */}
        <div className="grid items-start gap-8 md:grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
          <div>
            <img
              src={site.portrait}
              alt={`Portrait of ${site.name}`}
              width={896}
              height={1152}
              loading="lazy"
              className="aspect-[4/5] w-full max-w-[320px] object-cover grayscale"
            />

            <div className="mt-3 flex justify-between text-xs text-muted-foreground">
              <span>{site.name}</span>
              <span>2026</span>
            </div>
          </div>

          <div className="pt-1 md:pt-4">
            <h2 className="max-w-2xl text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              {t.headline}
            </h2>

            <div className="mt-7 max-w-xl space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
              {t.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-3 border-b border-foreground pb-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {t.contact}
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-24 grid gap-8 border-t pt-8 md:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">{t.interests}</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              {language === "ID"
                ? "Bidang yang saya eksplorasi dan kembangkan melalui berbagai karya dan proyek."
                : "Fields I explore and develop through different works and projects."}
            </p>
          </div>

          <div>
            {interests.map((interest, index) => (
              <div
                key={interest}
                className="flex items-center justify-between gap-5 border-b py-4"
              >
                <span className="text-base font-medium tracking-tight sm:text-lg">
                  {interest}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-20 flex flex-col gap-5 border-t pt-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-lg text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
            {t.closing}
          </h2>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 border-b border-foreground pb-2 text-sm hover:text-accent"
          >
            {t.contact} ↗
          </Link>
        </div>
      </section>
    </>
  );
}
