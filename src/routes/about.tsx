
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/FilterBar";
import { site } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ario Fajar Dharmawan" },
      {
        name: "description",
        content:
          "Get to know Ario Fajar Dharmawan through his interests in writing, graphic design, digital communication, and web development.",
      },
      {
        property: "og:title",
        content: "About — Ario Fajar Dharmawan",
      },
      {
        property: "og:description",
        content:
          "A personal introduction to the ideas, interests, and creative work behind AFD.",
      },
    ],
  }),
  component: About,
});

const translations = {
  EN: {
    pageIndex: "02 / ABOUT",
    pageTitle: "About.",
    eyebrow: "A little about me",
    intro: "Hello, I'm",
    headline: "Turning ideas into something meaningful",
    paragraphs: [
      "I'm Ario Fajar Dharmawan. I'm interested in creativity, communication, and technology, especially in how ideas can grow into work with purpose and meaning.",
      "I explore different fields, from writing and graphic design to web development. Each field offers its own way to communicate ideas, solve problems, and create experiences.",
      "Through different projects and continuous learning, I keep developing my perspective, trying new things, and finding ways to connect creativity with technology.",
    ],
    work: "Explore my work",
    contact: "Get in touch",
    portfolio: "Portfolio",
    sectionLabel: "Areas of interest",
    sectionTitle: "Different interests, one space to create",
    sectionDescription:
      "Some of the fields that shape my creative journey and ongoing development.",
    closingLabel: "What's next?",
    closingTitle: "There's always a new idea to bring to life",
    closingDescription:
      "Open to creative collaborations, professional opportunities, and meaningful conversations.",
    based: "Based in",
    focus: "Areas of interest",
    basedValue: "Malang, Indonesia",
    focusValue: "Creative & Digital",
    interests: [
      {
        title: "Creative Writing",
        detail: "Ideas, storytelling, and written expression",
      },
      {
        title: "Graphic Design",
        detail: "Visual communication and developing ideas",
      },
      {
        title: "Web Development",
        detail: "Website creation and digital experiences",
      },
      {
        title: "Digital Communication",
        detail: "Content and audience engagement",
      },
      {
        title: "Research & Documentation",
        detail: "Information exploration and knowledge management",
      },
    ],
  },
  ID: {
    pageIndex: "02 / TENTANG",
    pageTitle: "Tentang.",
    eyebrow: "Sedikit tentang saya",
    intro: "Halo, saya",
    headline: "Mengubah ide menjadi sesuatu yang bermakna",
    paragraphs: [
      "Saya Ario Fajar Dharmawan. Saya memiliki ketertarikan pada dunia kreatif, komunikasi, dan teknologi, terutama pada bagaimana sebuah ide dapat berkembang menjadi karya yang memiliki tujuan dan makna.",
      "Saya mengeksplorasi berbagai bidang, mulai dari penulisan, desain grafis, hingga pengembangan website. Setiap bidang memiliki cara tersendiri untuk menyampaikan gagasan, memecahkan masalah, dan menciptakan pengalaman.",
      "Melalui berbagai proyek dan proses belajar, saya terus mengembangkan perspektif, mencoba hal baru, dan menemukan cara untuk menghubungkan kreativitas dengan teknologi.",
    ],
    work: "Lihat karya",
    contact: "Hubungi saya",
    portfolio: "Portofolio",
    sectionLabel: "Bidang yang diminati",
    sectionTitle: "Beragam minat, satu ruang untuk berkarya",
    sectionDescription:
      "Beberapa bidang yang menjadi bagian dari perjalanan kreatif dan pengembangan kemampuan saya.",
    closingLabel: "Selanjutnya",
    closingTitle: "Selalu ada ide baru untuk diwujudkan",
    closingDescription:
      "Terbuka untuk kolaborasi kreatif, kesempatan profesional, dan percakapan menarik.",
    based: "Domisili",
    focus: "Bidang minat",
    basedValue: "Malang, Indonesia",
    focusValue: "Kreativitas & Digital",
    interests: [
      {
        title: "Penulisan Kreatif",
        detail: "Gagasan, cerita, dan ekspresi melalui tulisan",
      },
      {
        title: "Desain Grafis",
        detail: "Komunikasi visual dan pengembangan gagasan",
      },
      {
        title: "Pengembangan Web",
        detail: "Pembuatan website dan pengalaman digital",
      },
      {
        title: "Komunikasi Digital",
        detail: "Pembuatan konten dan komunikasi dengan audiens",
      },
      {
        title: "Riset & Dokumentasi",
        detail: "Eksplorasi informasi dan pengelolaan pengetahuan",
      },
    ],
  },
};

function About() {
  const [language, setLanguage] = useState<"EN" | "ID">("EN");
  const t = translations[language];

  return (
    <>
      <PageHeader index={t.pageIndex} title={t.pageTitle} />

      <main className="container-page pt-0 pb-14 md:pt-0 md:pb-16">
        {/* INTRO HEADER */}
        <div className="mb-7 flex items-center justify-between border-b border-foreground/15 pb-3 md:mb-8">
          <p className="eyebrow">{t.eyebrow}</p>

          <div
            className="flex items-center gap-3 font-mono text-xs"
            aria-label="Language selection"
          >
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

            <span className="text-muted-foreground/40">/</span>

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

        {/* MAIN PROFILE */}
        <section className="grid items-start gap-8 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] md:gap-10 lg:gap-14">
          {/* PORTRAIT */}
          <figure className="mx-auto w-full max-w-[340px] md:mx-0">
            <div className="overflow-hidden bg-muted">
              <img
                src={site.portrait}
                alt={`Portrait of ${site.name}`}
                width={896}
                height={1152}
                className="aspect-[4/5] w-full object-cover object-center grayscale transition-transform duration-700 hover:scale-[1.025]"
              />
            </div>

            <figcaption className="mt-2 flex items-center justify-between border-t border-foreground/15 pt-2 text-xs text-muted-foreground">
              <span>{site.short}</span>
              <span>
                {t.portfolio} / {new Date().getFullYear()}
              </span>
            </figcaption>
          </figure>

          {/* INTRODUCTION */}
          <div className="flex min-w-0 flex-col pt-0 md:pt-1">
            <p className="eyebrow mb-3">{t.intro}</p>

            <h2 className="max-w-2xl text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-[3.5rem]">
              {t.headline}
              <span className="text-accent">.</span>
            </h2>

            <div className="mt-5 max-w-[600px] space-y-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-7">
              {t.paragraphs.map((paragraph, index) => (
                <p key={`${language}-${index}`}>{paragraph}</p>
              ))}
            </div>

            {/* ACTION LINKS */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 border-b border-foreground/40 pb-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {t.work}
                <span>↗</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {t.contact}
                <span>↗</span>
              </Link>
            </div>

            {/* PROFILE INFORMATION */}
            <div className="mt-8 grid max-w-[600px] grid-cols-2 gap-5 border-t border-foreground/15 pt-4">
              <div>
                <p className="eyebrow mb-1.5">{t.based}</p>
                <p className="text-sm font-medium">{t.basedValue}</p>
              </div>

              <div>
                <p className="eyebrow mb-1.5">{t.focus}</p>
                <p className="text-sm font-medium">{t.focusValue}</p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERESTS */}
        <section className="mt-14 border-t border-foreground/15 pt-7 md:mt-16 md:pt-8">
          <div className="grid gap-7 md:grid-cols-[0.85fr_1.15fr] md:gap-10 lg:gap-14">
            <div>
              <p className="eyebrow">01 / {t.sectionLabel}</p>

              <h2 className="mt-3 max-w-sm text-2xl font-semibold leading-[1.18] tracking-tight sm:text-3xl">
                {t.sectionTitle}
                <span className="text-accent">.</span>
              </h2>

              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                {t.sectionDescription}
              </p>
            </div>

            <div>
              {t.interests.map((interest, index) => (
                <div
                  key={interest.title}
                  className="group flex items-center justify-between gap-4 border-b border-foreground/15 py-3.5 first:border-t"
                >
                  <div className="flex min-w-0 items-start gap-4">
                    <span className="mt-1 font-mono text-[11px] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-sm font-medium tracking-tight transition-colors group-hover:text-accent sm:text-base">
                        {interest.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                        {interest.detail}
                      </p>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-sm text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="mt-14 border-t border-foreground/15 pt-7 md:mt-16 md:pt-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-10">
            <div>
              <p className="eyebrow mb-3">02 / {t.closingLabel}</p>

              <h2 className="max-w-xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                {t.closingTitle}
                <span className="text-accent">.</span>
              </h2>
            </div>

            <div className="md:justify-self-end md:max-w-[320px]">
              <p className="text-sm leading-7 text-muted-foreground">
                {t.closingDescription}
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-3 bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
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
