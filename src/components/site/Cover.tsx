import { cn } from "@/lib/utils";

/** Image cover, or a typographic fallback when no image is set. */
export function Cover({ src, title, label, className, dark }: { src?: string; title: string; label?: string; className?: string; dark?: boolean }) {
  if (src) {
    return <img src={src} alt={title} loading="lazy" className={cn("h-full w-full object-cover", className)} />;
  }
  return (
    <div className={cn("flex h-full w-full flex-col justify-between p-5", dark ? "bg-ink text-ink-foreground" : "bg-cover text-foreground", className)} aria-hidden>
      <span className="eyebrow">{label}</span>
      <span className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{title}</span>
    </div>
  );
}
