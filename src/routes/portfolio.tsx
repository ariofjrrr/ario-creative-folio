import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { works, workCategories } from "@/content/works";
import { WorkCard } from "@/components/site/WorkCard";
import { EmptyState, FilterBar, PageHeader } from "@/components/site/FilterBar";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ario Fajar Dharmawan" },
      { name: "description", content: "Selected works in writing, graphic design, web development, projects and publications." },
      { property: "og:title", content: "Portfolio — Ario Fajar Dharmawan" },
      { property: "og:description", content: "Selected works in writing, design, web and creative projects." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const matchRoute = useMatchRoute();
  const isDetail = matchRoute({ to: "/portfolio/$slug", fuzzy: true });
  const [cat, setCat] = useState<(typeof workCategories)[number]>("All Works");
  const list = useMemo(() => (cat === "All Works" ? works : works.filter((w) => w.category === cat)), [cat]);
  const counts = useMemo(() => Object.fromEntries(workCategories.map((c) => [c, c === "All Works" ? works.length : works.filter((w) => w.category === c).length])), []);

  if (isDetail) return <Outlet />;
  return (
    <>
      <PageHeader index="03 — Portfolio" title="Selected works." intro="A collection of writing, design, web and project work." />
      <section className="container-page">
        <FilterBar options={workCategories} value={cat} onChange={setCat} counts={counts} />
        <div className="mt-12">
          {list.length === 0 ? (
            <EmptyState title="Nothing here yet." body="Works in this category will appear here once they're added." />
          ) : (
            <div key={cat} className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((w, i) => <WorkCard key={w.slug} work={w} index={i} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
