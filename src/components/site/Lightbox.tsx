
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
      className="fixed inset-0 z-[9999] flex flex-col bg-black/95 text-white"
      onClick={onClose}
    >
      <div className="flex shrink-0 items-center justify-between px-5 py-4 md:px-8">
        <p className="truncate text-sm font-medium">{title}</p>

        <button
          type="button"
          onClick={onClose}
          className="text-xs uppercase tracking-wider text-white/70 hover:text-white"
        >
          Close ✕
        </button>
      </div>

      <div
        className="flex min-h-0 flex-1 items-center justify-center overflow-auto p-4"
        onClick={(event) => event.stopPropagation()}
      >
        {pdf ? (
          <iframe
            src={pdf}
            title={title}
            className="h-full w-full border-0 bg-white"
          />
        ) : src ? (
          <img
            src={src}
            alt={title}
            className="block h-auto w-auto max-h-[85vh] max-w-[90vw] object-contain"
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
