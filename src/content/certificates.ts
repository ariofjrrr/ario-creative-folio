import type { Certificate, CertCategory } from "./types";

export const certCategories: ("All" | CertCategory)[] = [
  "All", "Certificates", "Awards", "Intellectual Property", "Training & Workshops", "Academic & Organizational",
];

/**
 * Only real achievements belong here. The HAKI entry is mentioned by Ario;
 * issuer, year and registration number are left empty until confirmed.
 */
export const certificates: Certificate[] = [
  { id: "haki-iot-rice-dryer", 
   title: "HKI - Modul Mesin Pengering Padi Berbasis IoT", 
   category: "Intellectual Property", 
   issuer: "", 
   year: "2025", 
   description: "",
   image: "/public/haki-iot-rice-dryer.jpg",
   placeholder: true },
];
