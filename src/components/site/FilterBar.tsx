import { cn } from "@/lib/utils";

export function FilterBar<T extends string>({ options, value, onChange, counts }: { options: readonly T[]; value: T; onChange: (v: T) => void; counts?: Record<string, number> }) {
  return (
    <div role="tablist" aria-label="Filter" className="flex flex-wrap gap-x-6 gap-y-2 border-b pb-4">
      {options.map((o) => (
        <button
          key={o}
          role="tab"
          aria-selected={value === o}
          onClick={() => onChange(o)}
          className={cn(
            "relative pb-1 text-sm transition-colors",
            value === o ? "text-foreground after:absolute after:inset-x-0 after:-bottom-[17px] after:h-0.5 after:bg-accent" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {o}
          {counts && <span className="ml-1.5 font-mono text-[0.65rem] text-muted-foreground">{counts[o] ?? 0}</span>}
        </button>
      ))}
    </div>
  );
}

export function EmptyState({ title, body }: { title: string; body?: string }) {
  return (
    <div className="border border-dashed px-6 py-16 text-center">
      <p className="font-medium">{title}</p>
      {body && <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">{body}</p>}
    </div>
  );
}

export function PageHeader({ index, title, intro }: { index: string; title: string; intro?: string }) {
  return (
    <header className="container-page fade-up pb-12 pt-16 md:pb-16 md:pt-24">
      <p className="eyebrow">{index}</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tighter md:text-7xl">{title}</h1>
      {intro && <p className="mt-6 max-w-xl text-lg text-muted-foreground">{intro}</p>}
    </header>
  );
}
