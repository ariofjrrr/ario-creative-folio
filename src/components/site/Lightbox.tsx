import { useEffect } from "react";
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
    const previousPosition = document.body.style.position;
    const previousWidth = document.body.style.width;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousPosition;
      document.body.style.width = previousWidth;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[9999] flex h-[100dvh] w-screen flex-col overflow-hidden bg-black/95 text-white"
      onClick={onClose}
    >
      {/* Fixed Header */}
      <header className="relative z-10 flex h-16 shrink-0 items-center justify-between border-b border-white/15 px-5 md:px-8">
        <p className="min-w-0 truncate pr-4 text-sm font-medium">
          {title}
        </p>

        <button
          type="button"
          autoFocus
          onClick={onClose}
          className="shrink-0 border border-white/30 px-4 py-2 text-xs uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white hover:text-black"
        >
          Close ✕
        </button>
      </header>

      {/* Centered Preview Content */}
      <main
        className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto p-4 md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          {/* Image */}
          <div className="flex min-h-0 min-w-0 items-center justify-center">
            {pdf ? (
              <iframe
                src={pdf}
                title={title}
                className="h-[70dvh] w-full border-0 bg-white"
              />
            ) : src ? (
              <img
                src={src}
                alt={title}
                className="block h-auto w-auto max-h-[75dvh] max-w-full object-contain"
              />
            ) : (
              <p className="text-sm text-white/60">
                No document uploaded yet.
              </p>
            )}
          </div>

          {/* Project Information */}
          {children && (
            <aside className="min-w-0 border-t border-white/20 pt-6 text-sm lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              {children}
            </aside>
          )}
        </div>
      </main>
    </div>
  );
}
