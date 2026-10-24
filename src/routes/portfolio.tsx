
import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { works, workCategories } from "@/content/works";
import { writings } from "@/content/writing";
import type { Work } from "@/content/types";
import { WorkCard } from "@/components/site/WorkCard";
import { EmptyState, FilterBar, PageHeader } from "@/components/site/FilterBar";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ario Fajar Dharmawan" },
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

  const [cat, setCat] =
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
      cover: writing.cover,
      placeholder: false,
    }));

    return [...writingWorks, ...otherWorks];
  }, []);

  const list = useMemo(
    () =>
      cat === "All Works"
        ? portfolioWorks
        : portfolioWorks.filter((work) => work.category === cat),
    [cat, portfolioWorks]
  );

  const counts = useMemo(
    () =>
      Object.fromEntries(
        workCategories.map((category) => [
          category,
          category === "All Works"
            ? portfolioWorks.length
            : portfolioWorks.filter(
                (work) => work.category === category
              ).length,
        ])
      ),
    [portfolioWorks]
  );

  if (isDetail) return <Outlet />;

  return (
    <>
      <PageHeader
        index="03 — Portfolio"
        title="Selected works."
        intro="A collection of writing, design, web and project work."
      />

      <section className="container-page">
        <FilterBar
          options={workCategories}
          value={cat}
          onChange={setCat}
          counts={counts}
        />

        <div className="mt-12">
          {list.length === 0 ? (
            <EmptyState
              title="Nothing here yet."
              body="Works in this category will appear here once they're added."
            />
          ) : (
            <div
              key={cat}
              className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
            >
              {list.map((work, index) => (
                <WorkCard key={work.slug} work={work} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
