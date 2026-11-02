
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";

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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[99999] flex h-dvh w-screen flex-col overflow-hidden bg-black/95 text-white"
      onClick={onClose}
    >
      {/* Header */}
      <header className="relative z-10 flex h-16 shrink-0 items-center justify-between border-b border-white/15 px-5 md:px-8">
        <p className="min-w-0 truncate pr-4 text-sm font-medium">
          {title}
        </p>

        <button
          type="button"
          autoFocus
          onClick={onClose}
          aria-label="Close preview"
          className="group flex shrink-0 items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-white"
        >
        <span>Close</span>
        <span className="text-base leading-none transition-transform duration-300 group-hover:rotate-90">
          ×
        </span>
        </button>
      </header>

      {/* Preview Content */}
      <main
        className="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-6 md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-center gap-6">
          {/* Image / PDF */}
          <div className="flex h-full min-w-0 flex-1 items-center justify-center">
            {pdf ? (
              <iframe
                src={pdf}
                title={title}
                className="h-full w-full border-0"
              />
            ) : src ? (
              <img
                src={src}
                alt={title}
                className="block max-h-full max-w-full object-contain"
              />
            ) : (
              <p className="text-sm text-white/50">
                Preview tidak tersedia.
              </p>
            )}
          </div>

          {/* Information */}
          {children && (
            <aside className="hidden w-72 shrink-0 self-center border-l border-white/15 pl-5 text-sm md:block">
              {children}
            </aside>
          )}
        </div>
      </main>
    </div>,
    document.body
  );
}
