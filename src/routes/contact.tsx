
import { createFileRoute } from "@tanstack/react-router";
import { site, socialLinks } from "@/content/site";
import {
  Instagram,
  Linkedin,
  Github,
  Mail,
  MessageCircle,
  Globe,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - AFD" },
      {
        name: "description",
        content:
          "Get in touch for creative collaborations, design, writing, and digital projects.",
      },
      {
        property: "og:title",
        content: "Contact — Ario Fajar Dharmawan",
      },
      {
        property: "og:description",
        content: "Ideas are better when shared.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const links = socialLinks();
  const wa = site.contact.whatsapp;

  return (
    <main className="container-page fade-up pt-0 pb-14 md:pb-16">
      {/* HEADER */}
      <div className="border-b border-foreground/15">
        <div className="mt-2 mb-3 flex items-center justify-between">
          <p className="eyebrow">CONTACT</p>
          <span className="font-mono text-xs text-muted-foreground">
            SAY HELLO
          </span>
        </div>
      </div>

      {/* HERO */}
      <section className="mb-15 relative overflow-hidden border-b border-foreground/15 py-16 md:py-24">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6">THE NEXT STEP STARTS HERE</p>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.065em] md:text-8xl">
              Let's make
              <br />
              something
              <br />
              <span className="text-muted-foreground">meaningful.</span>
            </h1>
          </div>

          <div className="max-w-xs pb-2 md:pb-3">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Have an idea, a project, or an opportunity in mind? I'm always
              interested in connecting with people who value good ideas and
              thoughtful work.
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-foreground/15 pt-4">
          <span className="eyebrow">CREATIVE / DIGITAL / COMMUNICATION</span>
          <span className="font-mono text-xs text-muted-foreground">
            MALANG, INDONESIA
          </span>
        </div>
      </section>
 
      
      {/* CONTACT LINKS */}
      <section className="py-14 md:py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">CONNECT</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Find me across the web.
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {String(links.length).padStart(2, "0")} PLATFORMS
          </span>
        </div>
      
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((link) => {
            const label = link.label.toLowerCase();
      
            const Icon = label.includes("instagram")
              ? Instagram
              : label.includes("linkedin")
                ? Linkedin
                : label.includes("github")
                  ? Github
                  : label.includes("email") || label.includes("mail")
                    ? Mail
                    : label.includes("whatsapp")
                      ? MessageCircle
                      : Globe;
      
            return (
              
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group flex items-center justify-between gap-4 border border-foreground/15 bg-background p-5 text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
              >
                <div className="flex items-center gap-4">
                  <Icon
                    size={21}
                    strokeWidth={1.6}
                    className="shrink-0 text-foreground transition-colors duration-300 group-hover:text-background"
                  />
                  <span className="font-medium text-foreground transition-colors duration-300 group-hover:text-background">
                    {link.label}
                  </span>
                </div>
              
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-background"
                />
              </a>

            );
          })}
        </div>
      </section>



      {/* WHATSAPP CTA */}
      {wa && (
        <section className="bg-primary px-6 py-10 text-primary-foreground md:px-12 md:py-14">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow opacity-70">HAVE A PROJECT IN MIND?</p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                Your idea deserves a conversation.
              </h2>
            </div>

            <a
              href={`https://wa.me/${wa}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-5 border border-primary-foreground/40 px-6 py-4 text-sm font-medium transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              Chat on WhatsApp
              <span>↗</span>
            </a>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <div className="mt-12 flex items-center justify-between border-t border-foreground/15 pt-4">
        <p className="text-xs text-muted-foreground">
          Thanks for being here.
        </p>

        <span className="font-mono text-xs text-muted-foreground">
          AFD / {new Date().getFullYear()}
        </span>
      </div>
    </main>
  );
}
