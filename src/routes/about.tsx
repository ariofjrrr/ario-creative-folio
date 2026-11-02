
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
          "Get to know Ario Fajar Dharmawan, his interests in writing, visual communication, technology, and digital projects.",
      },
      { property: "og:title", content: "About - AFD" },
      {
        property: "og:description",
        content:
          "A personal introduction to my creative practice, interests, and ongoing work.",
      },
    ],
  }),
  component: About,
});

const content = {
  ID: {
    eyebrow: "Tentang Saya",
    title: "Mengenal saya.",
    intro:
      "Saya adalah seseorang yang tertarik pada persimpangan antara kreativitas, komunikasi, dan teknologi.",
    paragraphs: [
      "Saya menikmati proses mengubah ide menjadi sesuatu yang dapat dilihat, dibaca, digunakan, atau dibagikan. Ketertarikan tersebut membawa saya mengeksplorasi berbagai bidang, mulai dari menulis, desain grafis, pengembangan web, hingga komunikasi digital.",
      "Bagi saya, setiap proyek memiliki proses dan ceritanya sendiri. Ada gagasan yang perlu dirangkai melalui tulisan, pesan yang perlu disampaikan melalui visual, dan kebutuhan yang dapat dijawab melalui teknologi.",
      "Website ini menjadi ruang untuk mengumpulkan karya, mendokumentasikan proses, dan menunjukkan hal-hal yang sedang saya pelajari. Bukan sekadar hasil akhir, tetapi juga perjalanan di baliknya.",
    ],
    approachLabel: "Cara Saya Berkarya",
    approachTitle: "Ide yang baik perlu diwujudkan dengan tujuan.",
    approachText:
      "Saya menghargai proses yang terarah, komunikasi yang jelas, dan detail yang dikerjakan dengan cermat. Saya percaya bahwa karya yang baik bukan hanya terlihat menarik, tetapi juga memiliki fungsi dan alasan untuk dibuat.",
    areasLabel: "Bidang yang Saya Minati",
    areas: [
      ["Penulisan Kreatif", "Narasi, esai, dan pengembangan naskah."],
      ["Desain Grafis", "Komunikasi visual untuk media cetak dan digital."],
      ["Pengembangan Web", "Membangun website yang fungsional dan mudah digunakan."],
      ["Komunikasi Digital", "Menyusun pesan dan konten untuk audiens yang tepat."],
      ["Riset & Dokumentasi", "Mencatat kegiatan, proses, dan hasil sebuah proyek."],
    ],
    closing: "Punya ide atau ingin berkolaborasi?",
    contact: "Mari terhubung",
  },
  EN: {
    eyebrow: "About Me",
    title: "A little about me.",
    intro:
      "I'm interested in the intersection of creativity, communication, and technology.",
    paragraphs: [
      "I enjoy turning ideas into something that can be seen, read, used, or shared. This curiosity has led me to explore different fields, from writing and graphic design to web development and digital communication.",
      "I see every project as a process with its own story. Some ideas take shape through writing, some messages are better expressed visually, and some needs can be addressed through technology.",
      "This website is a space to bring my work together, document the process, and share what I'm learning along the way. It is not only about the final result, but also the journey behind it.",
    ],
    approachLabel: "My Approach",
    approachTitle: "Good ideas deserve thoughtful execution.",
    approachText:
      "I value a clear process, meaningful communication, and attention to detail. To me, good work should not only look appealing but also serve a purpose and have a reason to exist.",
    areasLabel: "Areas of Interest",
    areas: [
      ["Creative Writing", "Narratives, essays, and manuscript development."],
      ["Graphic Design", "Visual communication for print and digital media."],
      ["Web Development", "Building functional and user-friendly websites."],
      ["Digital Communication", "Creating messages and content for the right audience."],
      ["Research & Documentation", "Recording activities, processes, and project outcomes."],
    ],
    closing: "Have an idea or want to collaborate?",
    contact: "Get in touch",
  },
};

function About() {
  const [language, setLanguage] = useState<"ID" | "EN">("ID");
  const t = content[language];

  return (
    <>
      <PageHeader index="02 - About" title={t.title} />

      {/* Language Switcher */}
      <div className="container-page flex justify-end">
        <div
          className="inline-flex items-center gap-1 border p-1 text-xs"
          aria-label="Choose language"
        >
          {(["ID", "EN"] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              aria-pressed={language === lang}
              className={`px-4 py-2 transition-colors ${
                language === lang
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {lang === "ID" ? "Indonesia" : "English"}
            </button>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <section className="container-page mt-10 grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <div className="overflow-hidden bg-muted">
            <img
              src={site.portrait}
              alt={`Portrait of ${site.name}`}
              loading="lazy"
              width={896}
              height={1152}
              className="aspect-[4/5] w-full object-cover grayscale transition duration-700 hover:grayscale-0"
            />
          </div>
          <p className="mt-3 text-xs tracking-wide text-muted-foreground">
            {site.name} / Personal Portfolio
          </p>
        </div>

        <div className="flex flex-col justify-center md:col-span-7 md:col-start-6">
          <p className="eyebrow mb-5">{t.eyebrow}</p>

          <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            {t.intro}
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            {t.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-8 inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {t.contact}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* Approach */}
      <section className="container-page mt-28 border-y py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">{t.approachLabel}</p>

          <div className="md:col-span-8 md:col-start-5">
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              {t.approachTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t.approachText}
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="container-page mt-28">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">03 / {t.areasLabel}</p>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              {t.areasLabel}.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {language === "ID"
              ? "Beberapa bidang yang menjadi bagian dari eksplorasi dan proses kreatif saya."
              : "A few fields that shape my exploration and creative practice."}
          </p>
        </div>

        <ul className="border-t">
          {t.areas.map(([title, description], index) => (
            <li
              key={title}
              className="grid gap-3 border-b py-7 md:grid-cols-[4rem_1fr_1fr] md:items-center md:gap-6"
            >
              <span className="font-mono text-xs text-muted-foreground">
                0{index + 1}
              </span>

              <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Closing */}
      <section className="container-page mb-20 mt-28">
        <div className="flex flex-col gap-6 border-t pt-10 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            {t.closing}
          </h2>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {t.contact}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
