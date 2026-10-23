
import { useState } from "react";
import { cn } from "@/lib/utils";

/** Image cover, or a typographic fallback when no image is set. */
export function Cover({
  src,
  title,
  label,
  className,
  dark,
}: {
  src?: string;
  title: string;
  label?: string;
  className?: string;
  dark?: boolean;
}) {
  const [imageError, setImageError] = useState(false);

  if (src && !imageError) {
    return (
      <img
        src={src}
        alt={title}
        loading="lazy"
        onError={() => setImageError(true)}
        className={cn(
          "block h-full w-full object-contain bg-neutral-50 dark:bg-neutral-900",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col justify-between p-5",
        dark
          ? "bg-ink text-ink-foreground"
          : "bg-cover text-foreground",
        className
      )}
      aria-label={title}
    >
      <span className="eyebrow">{label}</span>
      <span className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
        {title}
      </span>
    </div>
  );
}
