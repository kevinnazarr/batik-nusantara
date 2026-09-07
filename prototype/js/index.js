'use strict';

/* ============================================================
   HOME PAGE — best sellers, newsletter, reveal, sticky subnav (verbatim 3940-4108)
   ============================================================ */

(() => {
  const { PRODUCTS, renderGrid } = window.Serat;

  /* ——— Best sellers grid ——— */

  const best = document.querySelector('[data-grid="best"]');
  if (best) renderGrid(best, PRODUCTS.filter((p) => p.bestSeller).slice(0, 4));

  /* ——— NEWSLETTER ——— */

  const newsletter = document.getElementById('newsletter');
  const form = document.getElementById('newsletterForm');
  if (newsletter && form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]');
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      if (!valid) {
        email.focus();
        email.setAttribute('aria-invalid', 'true');
        return;
      }
      newsletter.classList.add('is-success');
    });
  }

  /* ——— REVEAL ——— */

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function observeReveals() {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('#app .reveal').forEach((el) => observer.observe(el));
  }
  observeReveals();

  /* ——— STICKY SUBNAV ——— */

  function initStickySubnav() {
    const subnav = document.querySelector('#app .subnav');
    const placeholder = document.querySelector('#app .subnav-placeholder');
    if (!subnav || !placeholder) return;

    const header = document.getElementById('siteHeader');
    let sticky = false;
    let headerH = header ? header.offsetHeight : 76;
    let naturalTop = measureNaturalTop();

    function measureNaturalTop() {
      const el = sticky ? placeholder : subnav;
      return el.getBoundingClientRect().top + window.scrollY;
    }

    function setSticky(on) {
      if (on === sticky) return;
      sticky = on;
      subnav.classList.toggle('is-sticky', on);
      if (on) placeholder.style.height = `${subnav.offsetHeight}px`;
    }

    function update() {
      if (!subnav.isConnected) return;
      setSticky(window.scrollY + headerH >= naturalTop);
    }

    const onScroll = () => update();
    const onResize = () => {
      headerH = header ? header.offsetHeight : 76;
      naturalTop = measureNaturalTop();
      update();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (sticky) placeholder.style.height = `${subnav.offsetHeight}px`;
      });
    }

    update();
  }
  initStickySubnav();

  /* ——— IN-PAGE ANCHORS ——— */

  function syncSubnavActive() {
    const name = window.location.hash.replace('#', '');
    document.querySelectorAll('.subnav__link').forEach((a) => {
      const active = Boolean(name) && a.getAttribute('href') === `#${name}`;
      a.classList.toggle('is-active', active);
    });
  }

  function scrollToSectionHash() {
    const name = window.location.hash.replace('#', '');
    if (!name) return;
    const el = document.getElementById(name);
    if (!el) return;
    syncSubnavActive();
    requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
  }

  /* ——— HERO BG SLIDESHOW ——— */

  function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero__slide');
    if (!slides.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let idx = 0;
    let timer = null;
    const next = () => {
      slides[idx].classList.remove('is-active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('is-active');
    };
    const start = () => {
      if (timer) return;
      timer = setInterval(next, 4000);
    };
    const stop = () => {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    };
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });
    start();
  }
  initHeroSlideshow();

  syncSubnavActive();
  window.addEventListener('hashchange', scrollToSectionHash);
  window.addEventListener('load', scrollToSectionHash);
})();
