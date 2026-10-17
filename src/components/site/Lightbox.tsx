import { useEffect } from "react";

/** Full-screen preview for an image or PDF. Closes with Esc or the button. */
export function Lightbox({ src, pdf, title, onClose, children }: { src?: string | undefined; pdf?: string | undefined; title: string; onClose: () => void; children?: React.ReactNode }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-50 flex flex-col bg-ink/95 text-ink-foreground fade-up" onClick={onClose}>
      <div className="container-page flex items-center justify-between py-4">
        <p className="text-sm font-medium">{title}</p>
        <button autoFocus onClick={onClose} className="eyebrow text-ink-foreground hover:text-accent">Close ✕</button>
      </div>
      <div className="container-page grid flex-1 gap-8 overflow-auto pb-8 md:grid-cols-[1fr_20rem]" onClick={(e) => e.stopPropagation()}>
        <div className="flex min-h-[50vh] items-center justify-center">
          {pdf ? <iframe src={pdf} title={title} className="h-[75vh] w-full bg-background" />
            : src ? <img src={src} alt={title} className="max-h-[75vh] w-auto object-contain" />
            : <p className="text-sm opacity-70">No document uploaded yet.</p>}
        </div>
        {children && <aside className="text-sm">{children}</aside>}
      </div>
    </div>
  );
}
