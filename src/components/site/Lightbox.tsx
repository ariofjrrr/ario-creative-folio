
import { useEffect } from "react";
import type { ReactNode } from "react";

/** Full-screen preview for an image or PDF. Closes with Esc or the button. */
export function Lightbox({
  src,
  pdf,
  title,
  onClose,
  children,
}: {
  src?: string;
  pdf?: string;
  title: string;
  onClose: () => void;
  children?: ReactNode;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-ink/95 text-ink-foreground fade-up"
      onClick={onClose}
    >
      <div className="container-page flex shrink-0 items-center justify-between gap-4 py-4">
        <p className="min-w-0 truncate text-sm font-medium">{title}</p>
        <button
          autoFocus
          onClick={onClose}
          className="eyebrow shrink-0 text-ink-foreground hover:text-accent"
        >
          Close ✕
        </button>
      </div>

      <div
        className="container-page grid min-h-0 min-w-0 flex-1 gap-8 overflow-y-auto overflow-x-hidden pb-8 md:grid-cols-[minmax(0,1fr)_20rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex min-h-[50vh] min-w-0 items-center justify-center">
          {pdf ? (
            <iframe
              src={pdf}
              title={title}
              className="h-[75vh] w-full border-0 bg-background"
            />
          ) : src ? (
            <img
              src={src}
              alt={title}
              className="block h-auto max-h-[75vh] w-auto max-w-full object-contain"
            />
          ) : (
            <p className="text-sm opacity-70">
              No document uploaded yet.
            </p>
          )}
        </div>

        {children && (
          <aside className="min-w-0 text-sm">
            {children}
          </aside>
        )}
      </div>
    </div>
  );
}
