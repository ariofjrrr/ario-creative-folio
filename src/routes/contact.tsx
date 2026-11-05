
import { createFileRoute } from "@tanstack/react-router";
import { site, socialLinks } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Ario Fajar Dharmawan" },
      {
        name: "description",
        content:
          "Open to creative collaborations, freelance opportunities, and meaningful projects.",
      },
      {
        property: "og:title",
        content: "Contact — Ario Fajar Dharmawan",
      },
      {
        property: "og:description",
        content: "Have a project in mind? Let's talk.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const links = socialLinks();
  const wa = site.contact.whatsapp;

  return (
    <main className="container-page fade-up pt-0 pb-14 md:pt-0 md:pb-16">
      {/* PAGE INTRODUCTION */}
      <div className="mb-0 border-b border-foreground/15 pb-0">
        <div className="mt-2 mb-3 flex items-center justify-between">
          <p className="eyebrow">CONTACT</p>
          <span className="font-mono text-xs text-muted-foreground">
            GET IN TOUCH
          </span>
        </div>
      </div>

      {/* CONTACT INTRODUCTION */}
      <section className="mt-12 md:mt-16">
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tighter md:text-7xl">
          Have a project in mind?
        </h1>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
          Open to creative collaborations, freelance opportunities, and
          meaningful projects.
        </p>
      </section>

      {/* CONTACT LINKS */}
      <section className="mt-14 border-t border-foreground/15 md:mt-16">
        {links.length === 0 && (
          <p className="py-8 text-muted-foreground">
            Contact details will be available soon.
          </p>
        )}

        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="group grid grid-cols-[6rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-foreground/15 py-5 transition-colors hover:text-accent md:grid-cols-[12rem_minmax(0,1fr)_auto] md:py-6"
          >
            <span className="eyebrow">{l.label}</span>

            <span className="truncate text-base font-medium md:text-xl">
              {l.value}
            </span>

            <span className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        ))}
      </section>

      {/* WHATSAPP ACTION */}
      {wa && (
        <a
          href={`https://wa.me/${wa}`}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
        >
          Chat on WhatsApp
          <span>↗</span>
        </a>
      )}

      {/* FOOTNOTE */}
      <div className="mt-16 flex items-center justify-between border-t border-foreground/15 pt-4">
        <p className="text-xs text-muted-foreground">
          Open for collaborations & opportunities
        </p>
        <span className="font-mono text-xs text-muted-foreground">
          AFD / {new Date().getFullYear()}
        </span>
      </div>
    </main>
  );
}
