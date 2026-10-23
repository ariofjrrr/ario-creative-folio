
import { cn } from "@/lib/utils";

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
  if (src) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-900",
          className
        )}
      >
        <img
          src={src}
          alt={title}
          loading="eager"
          className="block h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col justify-between p-5",
        dark
          ? "bg-ink text-ink-foreground"
          : "bg-cover text-foreground"
      )}
      aria-hidden="true"
    >
      <span className="eyebrow">{label}</span>
      <span className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
        {title}
      </span>
    </div>
  );
}
