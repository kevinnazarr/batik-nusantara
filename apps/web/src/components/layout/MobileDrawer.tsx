"use client";
import { useEffect, useState } from "react";

export function MobileDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onCount = () => {};
    window.addEventListener("serat:drawer:open" as never, onOpen);
    window.addEventListener("keydown", onKey);
    // toggle body scroll
    document.documentElement.classList.toggle("no-scroll", open);
    return () => {
      window.removeEventListener("serat:drawer:open" as never, onOpen);
      window.removeEventListener("keydown", onKey);
      void onCount;
    };
  }, [open]);

  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", open);
    if (!open) return;
    const prev = document.body.style.overflow;
    return () => {
      document.documentElement.classList.remove("no-scroll");
      void prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div
      className={`drawer ${open ? "is-open" : ""}`}
      id="menuDrawer"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={open ? undefined : true}
    >
      <div className="drawer__overlay" data-close-drawer onClick={close} />
      <div className="drawer__logo" aria-hidden="true">
        <span className="drawer__logo-mark">S</span>
        <span className="drawer__logo-word">Serat</span>
        <span className="drawer__logo-sub">Batik Atelier</span>
      </div>
      <div className="drawer__panel">
        <div className="drawer__content">
          <button className="drawer__close" data-close-drawer aria-label="Close menu" onClick={close}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18"></path>
            </svg>
            <span className="drawer__close-text">CLOSE</span>
          </button>
          <div className="drawer__body">
            <div className="drawer__col">
              <p className="drawer__eyebrow">MENU</p>
              <nav className="drawer__nav" aria-label="Main" onClick={close}>
                <a className="drawer__link" href="/">
                  Philosophy
                </a>
                <a className="drawer__link" href="/shop">
                  Collections
                </a>
                <a className="drawer__link" href="/shop?cat=Fabric">
                  Fabrics
                </a>
                <a className="drawer__link" href="#story">
                  Wellness
                </a>
                <a className="drawer__link" href="#artisans">
                  Artisans
                </a>
                <a className="drawer__link" href="#motifs">
                  Motifs
                </a>
                <a className="drawer__link" href="/shop?tag=new">
                  Offers
                </a>
                <a className="drawer__link" href="/shop">
                  Shop
                </a>
                <a className="drawer__link" href="/shop">
                  Contact
                </a>
              </nav>
            </div>
            <div className="drawer__col drawer__col--more">
              <p className="drawer__eyebrow">MORE</p>
              <div className="drawer__sub" onClick={close}>
                <a href="/shop?tag=new">News &amp; Blog</a>
                <a href="/shop">Gallery</a>
                <a href="#story">Lounge</a>
                <a href="#artisans">Brands &amp; Partner</a>
                <a href="/shop?cat=Fabric">Exclusive rental</a>
                <a href="/shop">Limousine &amp; Shuttle</a>
                <a href="/shop">Gift Vouchers</a>
                <a href="/shop">Jobs</a>
                <a href="/shop">Media Area</a>
              </div>
            </div>
          </div>
          <div className="drawer__social">
            <p className="drawer__eyebrow">SOCIAL MEDIA</p>
            <div className="drawer__social-links">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none"></circle>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg className="is-fill" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 8h3V5h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v5H14v-5h2.5l.5-3H14V8.5c0-.8.3-1.5 1-1.5z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg className="is-fill" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 10h4v10H5zM11 10h3.8v1.4h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.7 5 6.3V20h-4v-4.8c0-1.1 0-2.6-1.6-2.6-1.6 0-1.9 1.2-1.9 2.5V20h-4z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="drawer__media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1761517099330-13b34b141d74?q=80&w=1200&auto=format&fit=crop"
            alt=""
            loading="lazy"
            width={1200}
            height={1600}
          />
        </div>
      </div>
    </div>
  );
}
