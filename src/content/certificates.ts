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
    title: "Modul Mesin Pengering Padi Berbasis IoT",
    category: "Intellectual Property",
    issuer: "Kementerian Hukum Republik Indonesia",
    year: "2025",
    description:
      "Karya di bidang ilmu pengetahuan berupa modul Mesin Pengering Padi Berbasis IoT, tercatat sebagai ciptaan berdasarkan Surat Pencatatan Ciptaan. Pencatatan ini menjadi bagian dari dokumentasi kekayaan intelektual dalam pengembangan teknologi pertanian.",
    image: "/haki-iot-rice-dryer.jpg",
    verification: "001070555",
    placeholder: false,
  },
];
