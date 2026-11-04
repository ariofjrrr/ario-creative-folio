
import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { works, workCategories } from "@/content/works";
import { writings } from "@/content/writing";
import type { Work } from "@/content/types";
import { WorkCard } from "@/components/site/WorkCard";
import { EmptyState, FilterBar } from "@/components/site/FilterBar";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio - AFD" },
      {
        name: "description",
        content:
          "Selected works in writing, graphic design, web development, projects and publications.",
      },
      {
        property: "og:title",
        content: "Portfolio — Ario Fajar Dharmawan",
      },
      {
        property: "og:description",
        content: "Selected works in writing, design, web and creative projects.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const matchRoute = useMatchRoute();
  const isDetail = matchRoute({ to: "/portfolio/$slug", fuzzy: true });

  const [category, setCategory] =
    useState<(typeof workCategories)[number]>("All Works");

  const portfolioWorks = useMemo<Work[]>(() => {
    const otherWorks = works.filter(
      (work) => work.category !== "Writing"
    );

    const writingWorks: Work[] = writings.map((writing) => ({
      slug: writing.slug,
      title: writing.title,
      category: "Writing",
      year: writing.year,
      summary: writing.synopsis,
      cover: writing.portfolioCover || writing.cover,
      placeholder: false,
    }));

    return [...writingWorks, ...otherWorks];
  }, []);

  const filteredWorks = useMemo(
    () =>
      category === "All Works"
        ? portfolioWorks
        : portfolioWorks.filter((work) => work.category === category),
    [category, portfolioWorks]
  );

  const counts = useMemo(
    () =>
      Object.fromEntries(
        workCategories.map((item) => [
          item,
          item === "All Works"
            ? portfolioWorks.length
            : portfolioWorks.filter((work) => work.category === item).length,
        ])
      ),
    [portfolioWorks]
  );

  if (isDetail) return <Outlet />;

  return (
    <main className="container-page pt-0 pb-14 md:pt-0 md:pb-16">
      {/* PAGE INTRODUCTION */}
      <div className="mb-0 border-b border-foreground/15 pb-4">
        <div className="mb-1 flex items-center justify-between">
          <p className="eyebrow">PORTFOLIO</p>
          <span className="font-mono text-xs text-muted-foreground">
            SELECTED WORKS
          </span>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <section className="mt-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow">EXPLORE BY CATEGORY</p>
          <span className="font-mono text-xs text-muted-foreground">
            {filteredWorks.length}{" "}
            {filteredWorks.length === 1 ? "PROJECT" : "PROJECTS"}
          </span>
        </div>

        <div className="mt-4">
          <FilterBar
            options={workCategories}
            value={category}
            onChange={setCategory}
            counts={counts}
          />
        </div>
      </section>

      {/* WORKS GRID */}
      <section className="mt-9">
        {filteredWorks.length === 0 ? (
          <EmptyState
            title="Nothing here yet."
            body="Works in this category will appear here once they're added."
          />
        ) : (
          <div
            key={category}
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-14"
          >
            {filteredWorks.map((work, index) => (
              <WorkCard key={work.slug} work={work} index={index} />
            ))}
          </div>
        )}
      </section>

      {/* FOOTNOTE */}
      <div className="mt-16 flex items-center justify-between border-t border-foreground/15 pt-4">
        <p className="text-xs text-muted-foreground">
          Selected works & creative explorations
        </p>
        <span className="font-mono text-xs text-muted-foreground">
          AFD / {new Date().getFullYear()}
        </span>
      </div>
    </main>
  );
}
