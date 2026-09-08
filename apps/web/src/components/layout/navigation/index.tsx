import Desktop from "./desktop";
import Tablet from "./tablet";
import Mobile from "./mobile";

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "Story", href: "/stories" },
  { label: "About", href: "/stories" },
];

export default function Navigation() {
  return (
    <header className="w-full bg-snow-white border-b border-warm-parchment">
      <div className="hidden lg:block">
        <Desktop links={NAV_LINKS} />
      </div>
      <div className="hidden md:block lg:hidden">
        <Tablet links={NAV_LINKS} />
      </div>
      <div className="block md:hidden">
        <Mobile links={NAV_LINKS} />
      </div>
    </header>
  );
}
