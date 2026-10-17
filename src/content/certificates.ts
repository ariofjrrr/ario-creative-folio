import type { Certificate, CertCategory } from "./types";

export const certCategories: ("All" | CertCategory)[] = [
  "All", "Certificates", "Awards", "Intellectual Property", "Training & Workshops", "Academic & Organizational",
];

/**
 * Only real achievements belong here. The HAKI entry is mentioned by Ario;
 * issuer, year and registration number are left empty until confirmed.
 */
export const certificates: Certificate[] = [
  {
    id: "haki-iot-rice-dryer",
    title: "HKI - Modul Mesin Pengering Padi Berbasis IoT",
    category: "Intellectual Property",
    issuer: "Kementerian Hukum Republik Indonesia",
    year: "2025",
    description:
      "Karya di bidang ilmu pengetahuan berupa modul Mesin Pengering Padi Berbasis IoT, tercatat sebagai ciptaan berdasarkan Surat Pencatatan Ciptaan. Pencatatan ini menjadi bagian dari dokumentasi kekayaan intelektual dalam pengembangan teknologi pertanian.",
    image: "/haki-iot-rice-dryer.jpg",
    verification: "001070555",
    placeholder: false,
  },
  {
    id: "gold-medal-physics-nhc-2024",
    title: "Medali Emas Olimpiade Fisika - NHC 2024",
    category: "Awards",
    issuer: "Festival Olimpiade Sains Nasional (FOSNAS)",
    year: "2024",
    description:
      "Meraih Medali Emas pada ajang National Heroes Competition (NHC) 2024 dalam bidang Fisika, tingkat perguruan tinggi, dengan predikat A+. Kompetisi tingkat nasional ini diselenggarakan pada 3 November 2024 di Sumatera Utara.",
    pdf: "/piag-fisika-nhc-2024.jpg",
    verification: "1632470/BHM-FOSNAS/NHC-P/XI/2024",
    placeholder: false,
  },

];
