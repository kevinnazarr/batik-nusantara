"use client";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDrawer = () => window.dispatchEvent(new CustomEvent("serat:drawer:open"));

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} id="siteHeader">
      <div className="container header-main">
        <div className="header-left">
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-expanded={false}
            aria-controls="menuDrawer"
            onClick={openDrawer}
          >
            <span className="icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="menu-label">Menu</span>
          </button>
        </div>

        <a className="logo" href="/" aria-label="Serat Batik Atelier — home">
          <span className="logo__monogram" aria-hidden="true">
            S
          </span>
          <span>
            <span className="logo__word">Serat</span>
            <span className="logo__sub">Batik Atelier</span>
          </span>
        </a>

        <div className="header-right">
          <nav className="header-actions" aria-label="Account and cart">
            <div className="lang-switcher">
              <button
                className="icon-btn"
                id="langBtn"
                aria-label="Change language"
                aria-expanded={false}
                aria-haspopup="true"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M3 12h18"></path>
                  <path d="M12 3c2.6 2.6 4 5.7 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.7-4-9s1.4-6.4 4-9z"></path>
                </svg>
              </button>
              <div className="lang-menu" id="langMenu" role="menu" aria-label="Language" hidden>
                <button className="lang-menu__item is-selected" role="menuitemradio" aria-checked="true" data-lang="en">
                  English
                </button>
                <button className="lang-menu__item" role="menuitemradio" aria-checked="false" data-lang="id">
                  Indonesia
                </button>
              </div>
            </div>
            <button className="icon-btn" id="wishlistBtn" aria-label="Open wishlist" aria-haspopup="dialog">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20.5S3.5 15.5 3.5 9.6A4.6 4.6 0 0 1 12 6.5a4.6 4.6 0 0 1 8.5 3.1c0 5.9-8.5 10.9-8.5 10.9z"></path>
              </svg>
              <span className="count-badge" data-count="wishlist" aria-hidden="true"></span>
            </button>
            <a className="icon-btn" href="/cart" aria-label="Cart">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 8h12l-1 12H7L6 8z"></path>
                <path d="M9 8V6a3 3 0 0 1 6 0v2"></path>
              </svg>
              <span className="count-badge" data-count="cart" aria-hidden="true"></span>
            </a>
            <button className="icon-btn" id="accountBtn" aria-label="Account">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M4.5 20c1.2-3.4 4.1-5 7.5-5s6.3 1.6 7.5 5"></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
