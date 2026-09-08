export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "Story", href: "/stories" },
  { label: "About", href: "/stories" },
] as const;
