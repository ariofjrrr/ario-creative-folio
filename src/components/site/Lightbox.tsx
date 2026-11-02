
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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[9999] flex flex-col overflow-y-auto bg-black/95 text-white"
      onClick={onClose}
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between gap-4 px-5 py-4 md:px-8">
        <p className="truncate text-sm font-medium">{title}</p>

        <button
          type="button"
          onClick={onClose}
          className="shrink-0 text-xs uppercase tracking-wider text-white/70 hover:text-white"
        >
          Close ✕
        </button>
      </div>

      {/* Content */}
      <div
        className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-8 px-5 pb-8 md:grid-cols-[minmax(0,1fr)_20rem] md:px-8"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Image */}
        <div className="flex min-h-[40vh] min-w-0 items-center justify-center">
          {pdf ? (
            <iframe
              src={pdf}
              title={title}
              className="h-[75vh] w-full border-0 bg-white"
            />
          ) : src ? (
            <img
              src={src}
              alt={title}
              className="block max-h-[75vh] max-w-full object-contain"
            />
          ) : (
            <p className="text-sm text-white/60">
              No document uploaded yet.
            </p>
          )}
        </div>

        {/* Information */}
        {children && (
          <aside className="min-w-0 border-t border-white/20 pt-6 text-sm md:border-l md:border-t-0 md:pl-6 md:pt-0">
            {children}
          </aside>
        )}
      </div>
    </div>
  );
}
