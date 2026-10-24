import type { Work, WorkCategory } from "./types";

export const workCategories: ("All Works" | WorkCategory)[] = [
  "All Works", "Writing", "Graphic Design", "Web Development", "Projects", "Publications",
];

/**
 * PLACEHOLDER entries. Titles come from Ario; every other field is intentionally
 * empty until real details are provided. Empty fields are hidden on the page.
 */
export const works: Work[] = [
  { slug: "wanita-kehilangan-kendali", title: "Wanita Kehilangan Kendali", category: "Writing", year: "", summary: "Proyek penulisan buku.", placeholder: true },
  { slug: "pos-paud-cempaka", title: "Pos PAUD Cempaka", category: "Web Development", year: "", summary: "Proyek pengembangan website profil.", url: "https://ppcempaka.vercel.app/", placeholder: true },
  { slug: "bem-berdampak", title: "BEM Berdampak", category: "Projects", year: "", summary: "Dokumentasi kegiatan dan luaran proyek.", placeholder: true },
  { slug: "selected-graphic-designs", title: "Selected Graphic Designs", category: "Graphic Design", year: "", summary: "Kumpulan desain grafis.", placeholder: true },
  { slug: "iot-rice-dryer-module", title: "IoT-Based Rice Dryer Module", category: "Projects", year: "", summary: "Luaran modul alat pengering padi berbasis IoT yang memiliki HAKI.", placeholder: true },
];

export const getWork = (slug: string) => works.find((w) => w.slug === slug);
