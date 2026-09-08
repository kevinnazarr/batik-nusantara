export type FooterLink = { label: string; href: string };
export type FooterColumn = { title: string; links: readonly FooterLink[] };

export const FOOTER_HERO = {
  logo: "/brand/logo-batik-nusantara-footer.webp",
  logoAlt: "Batik Nusantara",
  tagline: "Batik Nusantara — warisan budaya Indonesia dalam setiap helai kain.",
} as const;

export const FOOTER_CONTACT = {
  title: "CONTACT",
  name: "Batik Nusantara",
  address: ["Jl. Malioboro No. 52", "Yogyakarta 55211", "Indonesia"],
  phone: "+62 274 123 456",
  email: "info@batik-nusantara.co.id",
  tagline: "Warisan budaya Indonesia dalam setiap helai kain.",
} as const;

export const FOOTER_NAV = {
  title: "NAVIGATION",
} as const;

export const FOOTER_NAV_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Shop",
    links: [
      { label: "All Pieces", href: "/shop" },
      { label: "Batik Shirts", href: "/shop?cat=Shirts" },
      { label: "Batik Dresses", href: "/shop?cat=Dresses" },
      { label: "Outerwear", href: "/shop?cat=Outerwear" },
      { label: "Batik Fabric", href: "/shop?cat=Fabric" },
      { label: "Accessories", href: "/shop?cat=Accessories" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Collections", href: "/shop" },
      { label: "Our Story", href: "/stories" },
      { label: "The Artisans", href: "/stories" },
      { label: "Motifs & Meaning", href: "/stories" },
      { label: "Sustainability", href: "/stories" },
      { label: "Contact", href: "#" },
    ],
  },
] as const;

export const FOOTER_NEWSLETTER = {
  title: "NEWSLETTER",
  heading: "Dapatkan info terbaru langsung ke inbox Anda.",
  firstNamePlaceholder: "Nama Depan",
  lastNamePlaceholder: "Nama Belakang",
  emailPlaceholder: "Email",
  buttonText: "Subscribe",
} as const;

export const FOOTER_BOTTOM = {
  copyright: "Batik Nusantara",
  links: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
} as const;

export const FOOTER_SOCIAL: readonly FooterLink[] = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const;
