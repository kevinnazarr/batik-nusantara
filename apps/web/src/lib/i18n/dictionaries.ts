export const LOCALES = ["id", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "id";

type NavDict = { menu: string; links: { label: string; href: string }[] };
type HeroDict = {
  title: { main: string; accent: string };
  lead: string;
  primary: string;
  secondary: string;
};
type FooterDict = {
  tagline: string;
  contactTitle: string;
  navTitle: string;
  newsletterTitle: string;
  newsletterHeading: string;
  firstName: string;
  lastName: string;
  email: string;
  subscribe: string;
  columns: { title: string; links: { label: string; href: string }[] }[];
  bottomLinks: { label: string; href: string }[];
};
type CommonDict = { language: string };

export type Dictionary = {
  nav: NavDict;
  hero: HeroDict;
  footer: FooterDict;
  common: CommonDict;
};

const en: Dictionary = {
  nav: {
    menu: "Menu",
    links: [
      { label: "Shop", href: "/shop" },
      { label: "Collections", href: "/shop" },
      { label: "Story", href: "/stories" },
      { label: "About", href: "/stories" },
    ],
  },
  hero: {
    title: { main: "Batik,", accent: "Reimagined." },
    lead:
      "Hand-drawn and hand-stamped batik from the workshops of Yogyakarta — heritage woven into modern life, one piece at a time.",
    primary: "Explore the Collection",
    secondary: "Discover Our Story",
  },
  footer: {
    tagline: "Indonesian cultural heritage in every cloth.",
    contactTitle: "CONTACT",
    navTitle: "NAVIGATION",
    newsletterTitle: "NEWSLETTER",
    newsletterHeading: "Get the latest updates straight to your inbox.",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    subscribe: "Subscribe",
    columns: [
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
    ],
    bottomLinks: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
  common: { language: "Language" },
};

const id: Dictionary = {
  nav: {
    menu: "Menu",
    links: [
      { label: "Belanja", href: "/shop" },
      { label: "Koleksi", href: "/shop" },
      { label: "Cerita", href: "/stories" },
      { label: "Tentang", href: "/stories" },
    ],
  },
  hero: {
    title: { main: "Batik,", accent: "Dimaknai Ulang." },
    lead:
      "Batik tulis dan cap dari workshop Yogyakarta — warisan budaya dalam setiap helai kain untuk kehidupan modern.",
    primary: "Jelajahi Koleksi",
    secondary: "Kenali Cerita Kami",
  },
  footer: {
    tagline: "Warisan budaya Indonesia dalam setiap helai kain.",
    contactTitle: "KONTAK",
    navTitle: "NAVIGASI",
    newsletterTitle: "NAWALA",
    newsletterHeading: "Dapatkan info terbaru langsung ke inbox Anda.",
    firstName: "Nama Depan",
    lastName: "Nama Belakang",
    email: "Email",
    subscribe: "Berlangganan",
    columns: [
      {
        title: "Belanja",
        links: [
          { label: "Semua Karya", href: "/shop" },
          { label: "Kemeja Batik", href: "/shop?cat=Shirts" },
          { label: "Gaun Batik", href: "/shop?cat=Dresses" },
          { label: "Luaran", href: "/shop?cat=Outerwear" },
          { label: "Kain Batik", href: "/shop?cat=Fabric" },
          { label: "Aksesori", href: "/shop?cat=Accessories" },
        ],
      },
      {
        title: "Jelajah",
        links: [
          { label: "Koleksi", href: "/shop" },
          { label: "Cerita Kami", href: "/stories" },
          { label: "Para Perajin", href: "/stories" },
          { label: "Motif & Makna", href: "/stories" },
          { label: "Keberlanjutan", href: "/stories" },
          { label: "Kontak", href: "#" },
        ],
      },
    ],
    bottomLinks: [
      { label: "Privasi", href: "#" },
      { label: "Syarat", href: "#" },
      { label: "Kuki", href: "#" },
    ],
  },
  common: { language: "Bahasa" },
};

export function getDictionary(locale: Locale): Dictionary {
  return locale === "en" ? en : id;
}
