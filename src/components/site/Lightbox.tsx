
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
      className="fixed inset-0 z-50 flex flex-col bg-black/90 text-white backdrop-blur-sm fade-up"
      onClick={onClose}
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between gap-4 px-5 py-4 md:px-8">
        <p className="min-w-0 truncate text-sm font-medium">
          {title}
        </p>

        <button
          type="button"
          autoFocus
          onClick={onClose}
          className="shrink-0 text-xs uppercase tracking-wider text-white/70 transition-colors hover:text-white"
        >
          Close ✕
        </button>
      </div>

      {/* Preview */}
      <div
        className="flex min-h-0 flex-1 items-center justify-center overflow-auto px-4 pb-6 md:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        {pdf ? (
          <iframe
            src={pdf}
            title={title}
            className="h-full min-h-[70vh] w-full border-0 bg-white"
          />
        ) : src ? (
          <img
            src={src}
            alt={title}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <p className="text-sm text-white/60">
            No document uploaded yet.
          </p>
        )}

        {children && (
          <aside className="ml-6 max-w-xs shrink-0 text-sm">
            {children}
          </aside>
        )}
      </div>
    </div>
  );
}
