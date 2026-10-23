import { cn } from "@/lib/utils";

/** Image cover, or a typographic fallback when no image is set. */
export function Cover({ src, title, label, className, dark }: { src?: string | undefined; title: string; label?: string | undefined; className?: string; dark?: boolean }) {
  if (src) {
    // MENGUBAH object-cover menjadi object-contain & menambahkan bg-muted
    return <img src={src} alt={title} loading="lazy" className={cn("h-full w-full object-contain bg-neutral-50 dark:bg-neutral-900", className)} />;
  }
  return (
    <div className={cn("flex h-full w-full flex-col justify-between p-5", dark ? "bg-ink text-ink-foreground" : "bg-cover text-foreground", className)} aria-hidden>
      <span className="eyebrow">{label}</span>
      <span className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{title}</span>
    </div>
  );
}
