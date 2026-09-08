export type CategoryTile = { href: string; image: string; alt: string; label: string };

export type CategoriesData = { eyebrow: string; title: string; tiles: CategoryTile[] };

export const CATEGORIES: CategoriesData = {
  eyebrow: "Shop by Category",
  title: "Woven for every occasion.",
  tiles: [
    { href: "/shop?cat=Shirts", image: "https://images.unsplash.com/photo-1569084755066-cbff1d9fd473?q=80&w=900&auto=format&fit=crop", alt: "Man wearing a batik shirt", label: "Batik Shirts" },
    { href: "/shop?cat=Dresses", image: "https://images.unsplash.com/photo-1630929436231-91f4c6fe4884?q=80&w=900&auto=format&fit=crop", alt: "Woman wearing a batik dress", label: "Batik Dresses" },
    { href: "/shop?cat=Fabric", image: "https://images.unsplash.com/photo-1761516659539-20ec6f407ca4?q=80&w=900&auto=format&fit=crop", alt: "Hand-drawn batik fabric in brown and blue", label: "Batik Fabric" },
    { href: "/shop?cat=Accessories", image: "https://images.unsplash.com/photo-1672716912554-c23ba8fac4ce?q=80&w=900&auto=format&fit=crop", alt: "Hand-patterned batik ties hanging on a rack", label: "Accessories" },
  ],
};
