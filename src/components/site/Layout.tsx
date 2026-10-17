import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { site, socialLinks } from "@/content/site";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/certificates", label: "Certificates" },
  { to: "/writing", label: "Writing" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-sm">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4">Skip to content</a>
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight" aria-label={`${site.name} — home`}>
          {site.short}<span className="text-accent">.</span>
        </Link>
        <nav className="hidden gap-8 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm !text-foreground underline decoration-accent decoration-2 underline-offset-8" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="eyebrow md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="container-page flex flex-col border-t py-4 md:hidden fade-up" aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }}
              className="py-3 text-2xl font-semibold tracking-tight" activeProps={{ className: "text-accent" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const socials = socialLinks();
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-2xl font-bold tracking-tight">{site.short}<span className="text-accent">.</span></p>
          <p className="mt-3 text-sm opacity-60">© {site.year} {site.name}. Built with intention.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {nav.map((n) => <Link key={n.to} to={n.to} className="opacity-70 hover:opacity-100">{n.label}</Link>)}
        </nav>
        <div className="flex flex-col gap-2 text-sm">
          {socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100">{s.label} ↗</a>)}
        </div>
      </div>
    </footer>
  );
}
