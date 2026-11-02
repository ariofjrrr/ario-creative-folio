
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

      
{/* Preview */}
<div
  className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-4 pb-6 md:px-8"
  onClick={(event) => event.stopPropagation()}
>
  <div
    className={`flex w-full min-h-0 items-center justify-center gap-6 ${
      children
        ? "flex-col lg:flex-row"
        : "flex-col"
    }`}
  >
    <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center">
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
          className="block h-auto w-auto max-h-[78vh] max-w-full object-contain"
        />
      ) : (
        <p className="text-sm text-white/60">
          No document uploaded yet.
        </p>
      )}
    </div>

    {children && (
      <aside className="w-full shrink-0 text-sm lg:w-72">
        {children}
      </aside>
    )}
  </div>
</div>

  );
}
