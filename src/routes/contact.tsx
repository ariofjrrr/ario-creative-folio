import { createFileRoute } from "@tanstack/react-router";
import { site, socialLinks } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ario Fajar Dharmawan" },
      { name: "description", content: "Open to creative collaborations, freelance opportunities, and meaningful projects." },
      { property: "og:title", content: "Contact — Ario Fajar Dharmawan" },
      { property: "og:description", content: "Have a project in mind? Let's talk." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const links = socialLinks();
  const wa = site.contact.whatsapp;
  return (
    <section className="container-page fade-up pt-16 md:pt-24">
      <p className="eyebrow">06 — Contact</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tighter md:text-8xl">Have a project in mind?</h1>
      <p className="mt-8 max-w-lg text-lg text-muted-foreground">Open to creative collaborations, freelance opportunities, and meaningful projects.</p>
      <div className="mt-16 border-t">
        {links.length === 0 && <p className="py-8 text-muted-foreground">Contact details will be available soon.</p>}
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="group grid grid-cols-[7rem_1fr_auto] items-center gap-4 border-b py-6 transition-colors hover:text-accent md:grid-cols-[12rem_1fr_auto]">
            <span className="eyebrow">{l.label}</span>
            <span className="truncate text-lg font-medium md:text-2xl">{l.value}</span>
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        ))}
      </div>
      {wa && (
        <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" className="mt-10 inline-block bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-accent">Chat on WhatsApp</a>
      )}
    </section>
  );
}
