/**
 * Single source of truth for personal info & contact links.
 * Leave a value as "" to hide it everywhere on the site.
 * PLACEHOLDER: fill in your real contact details.
 */
import portrait from "@/assets/portrait.png";

export const site = {
  name: "Ario Fajar Dharmawan",
  short: "AFD",
  year: 2026,
  // PLACEHOLDER photo — replace src/assets/portrait.jpg with your own portrait.
  portrait,
  contact: {
    email: "ariofajar970@gmail.com", // e.g. "hello@domain.com"
    linkedin: "", // full URL
    instagram: "https://www.instagram.com/ariofjrrr/", // full URL
    github: "", // full URL
    whatsapp: "6289523894988", // international number, digits only, e.g. "628123456789"
  },
};

export const socialLinks = () => {
  const c = site.contact;
  return [
    c.email && { label: "Email", href: `mailto:${c.email}`, value: c.email },
    c.linkedin && { label: "LinkedIn", href: c.linkedin, value: c.linkedin.replace(/^https?:\/\/(www\.)?/, "") },
    c.instagram && { label: "Instagram", href: c.instagram, value: c.instagram.replace(/^https?:\/\/(www\.)?/, "") },
    c.github && { label: "GitHub", href: c.github, value: c.github.replace(/^https?:\/\/(www\.)?/, "") },
  ].filter(Boolean) as { label: string; href: string; value: string }[];
};
