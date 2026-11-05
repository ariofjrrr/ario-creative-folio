
import { createFileRoute } from "@tanstack/react-router";
import { site, socialLinks } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Ario Fajar Dharmawan" },
      {
        name: "description",
        content:
          "Let's connect and create something meaningful through design, writing, and digital projects.",
      },
      {
        property: "og:title",
        content: "Contact — Ario Fajar Dharmawan",
      },
      {
        property: "og:description",
        content: "Let's connect and create something meaningful.",
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
      {/* PAGE HEADER */}
      <div className="border-b border-foreground/15">
        <div className="mt-2 mb-3 flex items-center justify-between">
          <p className="eyebrow">CONTACT</p>
          <span className="font-mono text-xs text-muted-foreground">
            LET'S CONNECT
          </span>
        </div>
      </div>

      {/* HERO */}
      <section className="grid gap-8 py-14 md:grid-cols-12 md:gap-8 md:py-20">
        <div className="md:col-span-8">
          <p className="eyebrow mb-5">HAVE SOMETHING IN MIND?</p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tighter md:text-7xl">
            Good ideas start with a{" "}
            <span className="text-muted-foreground">conversation.</span>
          </h1>
        </div>

        <div className="flex flex-col justify-end md:col-span-4">
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            Whether you have a project to develop, a story to tell, or an idea
            worth exploring, I'd be glad to hear from you.
          </p>

          <p className="mt-5 text-sm font-medium">
            Open to creative collaborations, freelance work, and meaningful
            opportunities.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="border-t border-foreground/15">
        <div className="grid gap-6 py-7 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">GET IN TOUCH</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Find me through these platforms.
            </p>
          </div>

          <div className="md:col-span-8">
            {links.length === 0 ? (
              <p className="py-4 text-muted-foreground">
                Contact details will be available soon.
              </p>
            ) : (
              links.map((l, index) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[2rem_6rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-foreground/15 py-5 first:border-t md:grid-cols-[2.5rem_8rem_minmax(0,1fr)_auto] md:gap-4"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    0{index + 1}
                  </span>

                  <span className="eyebrow">{l.label}</span>

                  <span className="truncate text-base font-medium transition-colors group-hover:text-accent md:text-lg">
                    {l.value}
                  </span>

                  <span className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent">
                    ↗
                  </span>
                </a>
              ))
            )}
          </div>
        </div>
      </section>

      {/* DIRECT MESSAGE */}
      {wa && (
        <section className="mt-12 border border-foreground/15 p-6 md:mt-16 md:p-10">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="eyebrow">PREFER A DIRECT CONVERSATION?</p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Let's talk about your next idea.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Send me a message and tell me a little about what you're
                working on.
              </p>
            </div>

            <a
              href={`https://wa.me/${wa}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
            >
              Start a conversation
              <span>↗</span>
            </a>
          </div>
        </section>
      )}

      {/* FOOTNOTE */}
      <div className="mt-16 flex items-center justify-between border-t border-foreground/15 pt-4">
        <p className="text-xs text-muted-foreground">
          Thanks for stopping by.
        </p>

        <span className="font-mono text-xs text-muted-foreground">
          AFD / {new Date().getFullYear()}
        </span>
      </div>
    </main>
  );
}
