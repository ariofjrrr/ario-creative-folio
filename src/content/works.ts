import type { Work, WorkCategory } from "./types";

export const workCategories: ("All Works" | WorkCategory)[] = [
  "All Works", "Writing", "Graphic Design", "Web Development", "Projects", "Publications",
];

/**
 * PLACEHOLDER entries. Titles come from Ario; every other field is intentionally
 * empty until real details are provided. Empty fields are hidden on the page.
 */
export const works: Work[] = [
{
  slug: "pos-paud-cempaka",
  title: "POS PAUD CEMPAKA - Website Profile",
  category: "Web Development",
  year: "2026",
  summary:
    "Pengembangan website profil POS PAUD CEMPAKA sebagai media informasi digital.",

  background:
    "POS PAUD CEMPAKA merupakan lembaga pendidikan anak usia dini yang membutuhkan media profil digital untuk memperkenalkan lembaga dan menyajikan informasi kepada orang tua serta masyarakat. Website ini dikembangkan dengan pendekatan visual yang ramah anak, informatif, dan mudah dijelajahi.",

  goals:
    "• Membangun media profil lembaga yang dapat diakses secara daring.\n• Menyajikan informasi mengenai profil, program, tenaga pendidik, dan kegiatan PAUD.\n• Mempermudah pengunjung menemukan informasi penting melalui navigasi yang terstruktur.\n• Menghadirkan tampilan yang ramah anak dengan desain yang bersih dan nyaman dibaca.",

  role:
    "Berperan dalam pengembangan website profil POS PAUD CEMPAKA, mulai dari penyusunan struktur halaman, implementasi antarmuka, pengaturan komponen visual, hingga integrasi informasi lembaga ke dalam website.",

  process:
    "1. Analisis kebutuhan informasi yang perlu ditampilkan pada website profil.\n2. Penyusunan struktur halaman dan navigasi agar informasi mudah ditemukan.\n3. Implementasi antarmuka menggunakan React, Vite, TypeScript, dan komponen UI yang digunakan dalam proyek.\n4. Pengembangan bagian profil lembaga, program, galeri, tenaga pendidik, testimoni, pendaftaran, dan kontak.\n5. Penyesuaian tampilan visual serta pemeriksaan halaman sebelum website dipublikasikan.",

  outcome:
    "Website profil POS PAUD CEMPAKA berhasil dipublikasikan secara daring dan dapat diakses melalui browser. Website menyajikan informasi lembaga dalam satu tempat dengan struktur halaman yang terorganisasi dan pendekatan visual yang ramah bagi orang tua serta masyarakat.",

  placeholder: false,
  techStack: [
    "React",
    "Vite",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Vercel",
  ],
  
  cover: "/cover.png",

  links: [
    {
      label: "Live Preview",
      href: "https://ppcempaka.vercel.app/",
    },
  ],
},

{
  slug: "ak-kids-profile",
  title: "AK KIDS - Website Profile",
  category: "Web Development",
  year: "2026",
  summary:
    "Pengembangan website profil AK KIDS untuk memperkenalkan layanan dan menyediakan informasi lembaga secara digital.",

  background:
    "AK KIDS merupakan pusat layanan pendukung tumbuh kembang anak yang berlokasi di Singosari, Kabupaten Malang. Website profil ini dikembangkan sebagai media informasi digital untuk memperkenalkan AK KIDS beserta layanan yang tersedia kepada masyarakat.",

  goals:
    "• Menyediakan media profil AK KIDS yang dapat diakses secara daring.\n• Memperkenalkan layanan AK KIDS melalui informasi yang terstruktur.\n• Memudahkan pengunjung mengenali jenis layanan yang tersedia.\n• Menghadirkan tampilan yang ramah anak, informatif, dan mudah dijelajahi.",

  role:
    "Merancang dan mengembangkan website profil AK KIDS sebagai media informasi digital, dengan fokus pada penyajian profil lembaga, informasi layanan, dan pengalaman pengguna.",

  process:
    "1. Menyusun struktur informasi berdasarkan profil dan layanan AK KIDS.\n2. Mengembangkan susunan halaman untuk memperkenalkan lembaga dan layanannya.\n3. Menata tampilan visual agar sesuai dengan karakter layanan anak.\n4. Menyediakan akses menuju website yang telah dipublikasikan secara daring.",

  outcome:
    "Website profil AK KIDS berhasil dipublikasikan dan dapat diakses secara daring. Website ini menjadi media digital untuk memperkenalkan profil serta layanan AK KIDS kepada masyarakat.",

  placeholder: false,

  cover: "/coverak.png",

  links: [
    {
      label: "Live Preview",
      href: "https://akkidsprofile.vercel.app/",
    },
  ],
},

  { slug: "bem-berdampak", title: "BEM Berdampak", category: "Projects", year: "", summary: "Dokumentasi kegiatan dan luaran proyek.", placeholder: true },
  { slug: "selected-graphic-designs", title: "Selected Graphic Designs", category: "Graphic Design", year: "", summary: "Kumpulan desain grafis.", placeholder: true },
  { slug: "iot-rice-dryer-module", title: "IoT-Based Rice Dryer Module", category: "Projects", year: "", summary: "Luaran modul alat pengering padi berbasis IoT yang memiliki HAKI.", placeholder: true },
];

export const getWork = (slug: string) => works.find((w) => w.slug === slug);
