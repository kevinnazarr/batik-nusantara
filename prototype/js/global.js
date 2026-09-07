'use strict';

/* ============================================================
   GLOBAL — data, store and shared chrome (verbatim from index.html 3428-3692)
   ============================================================ */

const CATEGORY_LABELS = {
  Shirts: 'Batik Shirts',
  Dresses: 'Batik Dresses',
  Outerwear: 'Batik Outerwear',
  Fabric: 'Batik Fabric',
  Accessories: 'Accessories',
};

const COLORS = {
  Natural: '#e7dfd0',
  Cream: '#efe9dd',
  Indigo: '#2b3d45',
  Sogan: '#8a6a3f',
  Crimson: '#7d2f2a',
  Coal: '#3a3a3a',
};

const MOTIFS = {
  Parang: { name: 'Parang', jv: 'strength', story: 'Diagonal blades cut through the cloth. Once reserved for Javanese royalty, the Parang speaks of strength, continuity, and the will to keep moving forward.' },
  Kawung: { name: 'Kawung', jv: 'harmony', story: 'Four circles, petals of the areca palm, arranged in quiet symmetry — purity, harmony, and the balance of a centred life.' },
  Truntum: { name: 'Truntum', jv: 'love', story: 'Scattered flowers bloom along the cloth — the motif parents wear at Javanese weddings, a wish that love will always lead the way.' },
  'Sekar Jagad': { name: 'Sekar Jagad', jv: 'the world', story: 'Flowers of the world — a map of many cultures stitched into cloth, a reminder that beauty lives in difference.' },
  'Mega Mendung': { name: 'Mega Mendung', jv: 'clouds', story: 'Clouds drift in from the coast of Cirebon — patience, renewal, and the calm that gathers before rain.' },
  Sogan: { name: 'Sogan', jv: 'royal brown', story: 'The royal brown of Surakarta, steeped from tree bark and old gold — the colour of ceremony and quiet authority.' },
  Lasem: { name: 'Lasem', jv: 'the coast', story: 'From the northern coast, where Javanese and Chinese hands have traded cloth for centuries — crimson, cream, and quiet exchange.' },
  Ceplok: { name: 'Ceplok', jv: 'order', story: 'Geometric fields of repeating circles — order, repetition, and the meditative rhythm of the hand.' },
  'Coastal Pekalongan': { name: 'Coastal Pekalongan', jv: 'openness', story: 'From the north coast of Java, where Javanese, Chinese and Arab hands have traded cloth for centuries — florals, birds, and the courage of open water.' },
};

const PRODUCTS = [
  { id: 1, name: 'Parang Sagara Shirt', category: 'Shirts', price: 1290000, compareAtPrice: null, image: '1609407683391-7d127a00b3e1', hoverImage: '1616125162686-770bf85622b9', images: ['1609407683391-7d127a00b3e1', '1616125162686-770bf85622b9', '1569084755066-cbff1d9fd473', '1604973104381-870c92f10343'], rating: 4.8, reviews: 42, colors: ['Indigo', 'Natural'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], pattern: 'Parang', description: 'A relaxed camp-collar shirt cut from cotton voile and stamped with the Parang Sagara — sea-current blades drawn by hand in Lasem.', material: 'Cotton voile, hand-stamped', care: ['Wash cold with like colours', 'Iron on the reverse while slightly damp', 'Air dry away from direct sun'], available: true, badge: 'New', isNew: true, bestSeller: true, sku: 'SR-101' },
  { id: 2, name: 'Kawung Nusantara Shirt', category: 'Shirts', price: 1350000, compareAtPrice: null, image: '1569084755066-cbff1d9fd473', hoverImage: '1609407683391-7d127a00b3e1', images: ['1569084755066-cbff1d9fd473', '1609407683391-7d127a00b3e1', '1761516659539-20ec6f407ca4', '1543874911-320748e4c335'], rating: 4.7, reviews: 31, colors: ['Sogan', 'Natural'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], pattern: 'Kawung', description: 'The Kawung in sogan — the royal brown of Surakarta — set on a structured oxford cut that moves from office to evening without effort.', material: 'Cotton, hand-stamped', care: ['Wash cold with like colours', 'Iron on the reverse while slightly damp', 'Air dry away from direct sun'], available: true, badge: null, isNew: false, bestSeller: false, sku: 'SR-102' },
  { id: 3, name: 'Truntum Malam Dress', category: 'Dresses', price: 2150000, compareAtPrice: null, image: '1630929436231-91f4c6fe4884', hoverImage: '1586319826907-1ff4aadbaddc', images: ['1630929436231-91f4c6fe4884', '1586319826907-1ff4aadbaddc', '1761515315375-1315503bb3ce', '1695306441929-0082158cfc27'], rating: 4.9, reviews: 58, colors: ['Crimson', 'Indigo'], sizes: ['XS', 'S', 'M', 'L'], pattern: 'Truntum', description: 'A midi dress in cotton sateen, scattered with the Truntum blossom — the motif parents wear at weddings, in a crimson that holds candlelight.', material: 'Cotton sateen, hand-drawn', care: ['Dry clean recommended', 'Iron on the reverse with a cloth guard', 'Store on a padded hanger'], available: true, badge: 'Best Seller', isNew: false, bestSeller: true, sku: 'SR-201' },
  { id: 4, name: 'Sekar Jagad Dress', category: 'Dresses', price: 2350000, compareAtPrice: null, image: '1586319826907-1ff4aadbaddc', hoverImage: '1630930014595-019a27a959b5', images: ['1586319826907-1ff4aadbaddc', '1630930014595-019a27a959b5', '1761516659539-20ec6f407ca4', '1721361467569-f8edbf851f44'], rating: 4.8, reviews: 27, colors: ['Natural', 'Sogan'], sizes: ['XS', 'S', 'M'], pattern: 'Sekar Jagad', description: 'Flowers of the world bloom across silk cotton in this column dress — the motif of many cultures meeting, cut for a single silhouette.', material: 'Silk cotton, hand-drawn', care: ['Dry clean recommended', 'Iron on the reverse with a cloth guard', 'Store on a padded hanger'], available: true, badge: 'New', isNew: true, bestSeller: false, sku: 'SR-202' },
  { id: 5, name: 'Sogan Kaftan', category: 'Dresses', price: 1850000, compareAtPrice: null, image: '1630930014595-019a27a959b5', hoverImage: '1630929436231-91f4c6fe4884', images: ['1630930014595-019a27a959b5', '1630929436231-91f4c6fe4884', '1762111067841-638cbbe9c6c7', '1695306441929-0082158cfc27'], rating: 4.6, reviews: 19, colors: ['Sogan', 'Indigo'], sizes: ['S', 'M', 'L'], pattern: 'Sogan', description: 'An easy kaftan in sogan-dyed cotton voile — cut wide through the body, gathered at the shoulder, made for warm evenings.', material: 'Cotton voile, hand-drawn', care: ['Wash cold with like colours', 'Iron on the reverse while slightly damp', 'Air dry away from direct sun'], available: true, badge: null, isNew: false, bestSeller: false, sku: 'SR-203' },
  { id: 6, name: 'Mega Mendung Kimono', category: 'Outerwear', price: 1980000, compareAtPrice: 2280000, image: '1680345575812-2f6878d7d775', hoverImage: '1680345575909-99633d4b6f46', images: ['1680345575812-2f6878d7d775', '1680345575909-99633d4b6f46', '1743210343060-97602cbcc04d', '1604973104381-870c92f10343'], rating: 4.9, reviews: 64, colors: ['Indigo', 'Natural'], sizes: ['One Size'], pattern: 'Mega Mendung', description: 'Clouds from Cirebon drift across a featherweight kimono of rayon challis. Ties at the waist; folds into a small square when packed.', material: 'Rayon challis, hand-stamped', care: ['Hand wash cold', 'Dry flat, reshape while damp', 'Do not wring'], available: true, badge: 'Limited', isNew: false, bestSeller: true, sku: 'SR-301' },
  { id: 7, name: 'Lasem Sarong Wrap', category: 'Outerwear', price: 1150000, compareAtPrice: null, image: '1680345575909-99633d4b6f46', hoverImage: '1762111067841-638cbbe9c6c7', images: ['1680345575909-99633d4b6f46', '1762111067841-638cbbe9c6c7', '1586319826907-1ff4aadbaddc', '1675994645106-8c48153d8c25'], rating: 4.7, reviews: 23, colors: ['Crimson', 'Natural'], sizes: ['One Size'], pattern: 'Lasem', description: 'A generous cotton sarong from the crimson-and-cream palette of Lasem — wrap it as a cover-up, a scarf, or a statement at the table.', material: 'Cotton, hand-stamped', care: ['Wash cold with like colours', 'Iron on the reverse while slightly damp', 'Air dry away from direct sun'], available: true, badge: null, isNew: false, bestSeller: false, sku: 'SR-302' },
  { id: 8, name: 'Parang Rusak Tulis Fabric', category: 'Fabric', price: 1680000, compareAtPrice: null, image: '1761516659539-20ec6f407ca4', hoverImage: '1761515315375-1315503bb3ce', images: ['1761516659539-20ec6f407ca4', '1761515315375-1315503bb3ce', '1762111067760-1f0fc2aa2866', '1604973104381-870c92f10343'], rating: 4.9, reviews: 71, colors: ['Indigo', 'Sogan'], sizes: ['2.5 m', '5 m'], pattern: 'Parang', description: 'A full length of hand-drawn batik tulis, 110 cm wide — every line laid with a canting. Made to be cut, framed, or worn as it is.', material: 'Cotton, hand-drawn (tulis)', care: ['Wash cold before cutting', 'Iron on the reverse while damp', 'Store rolled, away from direct sun'], available: true, badge: 'Best Seller', isNew: false, bestSeller: true, sku: 'SR-401' },
  { id: 9, name: 'Sekar Arum Tulis Fabric', category: 'Fabric', price: 1890000, compareAtPrice: null, image: '1761515315375-1315503bb3ce', hoverImage: '1616125162686-770bf85622b9', images: ['1761515315375-1315503bb3ce', '1616125162686-770bf85622b9', '1761517099330-13b34b141d74', '1695306441929-0082158cfc27'], rating: 4.8, reviews: 35, colors: ['Natural', 'Crimson'], sizes: ['2.5 m', '5 m'], pattern: 'Sekar Arum', description: 'Hand-drawn Sekar Arum — fragrant flowers — on a cream ground, 110 cm wide. A cloth to cut, drape, and keep.', material: 'Cotton, hand-drawn (tulis)', care: ['Wash cold before cutting', 'Iron on the reverse while damp', 'Store rolled, away from direct sun'], available: true, badge: 'New', isNew: true, bestSeller: false, sku: 'SR-402' },
  { id: 10, name: 'Pekalongan Paisley Fabric', category: 'Fabric', price: 1420000, compareAtPrice: null, image: '1743210343060-97602cbcc04d', hoverImage: '1761516659539-20ec6f407ca4', images: ['1743210343060-97602cbcc04d', '1761516659539-20ec6f407ca4', '1762111067841-638cbbe9c6c7', '1543874911-320748e4c335'], rating: 4.6, reviews: 18, colors: ['Indigo', 'Natural'], sizes: ['2.5 m', '5 m'], pattern: 'Coastal Pekalongan', description: 'Coastal Pekalongan paisley in indigo and natural — a hand-stamped cloth with the confidence of open water, 110 cm wide.', material: 'Cotton, hand-stamped (cap)', care: ['Wash cold before cutting', 'Iron on the reverse while damp', 'Store rolled, away from direct sun'], available: true, badge: null, isNew: false, bestSeller: false, sku: 'SR-403' },
  { id: 11, name: 'Batik Ties, Set of Two', category: 'Accessories', price: 680000, compareAtPrice: null, image: '1672716912554-c23ba8fac4ce', hoverImage: '1543874835-ad7d64196a07', images: ['1672716912554-c23ba8fac4ce', '1543874835-ad7d64196a07', '1609407683391-7d127a00b3e1', '1761516659539-20ec6f407ca4'], rating: 4.7, reviews: 44, colors: ['Indigo', 'Sogan'], sizes: ['One Size'], pattern: 'Parang', description: 'Two hand-stamped silk-cotton ties — one in indigo Parang, one in sogan — each cut from a single continuous motif.', material: 'Cotton silk, hand-stamped', care: ['Dry clean only', 'Untie carefully after wear', 'Store rolled, not folded'], available: true, badge: 'Best Seller', isNew: false, bestSeller: true, sku: 'SR-501' },
  { id: 12, name: 'Ceplok Danureja Fabric', category: 'Fabric', price: 2450000, compareAtPrice: null, image: '1762111067841-638cbbe9c6c7', hoverImage: '1761517099330-13b34b141d74', images: ['1762111067841-638cbbe9c6c7', '1761517099330-13b34b141d74', '1762111067760-1f0fc2aa2866', '1515317376399-c534e97891f2'], rating: 4.9, reviews: 12, colors: ['Sogan', 'Natural'], sizes: ['3 m'], pattern: 'Ceplok', description: 'An archival Ceplok pattern drawn from an 1891 museum study — geometric circles in sogan and natural, 110 cm wide. Cut in a limited series.', material: 'Cotton, hand-drawn (tulis)', care: ['Wash cold before cutting', 'Iron on the reverse while damp', 'Store rolled, away from direct sun'], available: false, badge: 'Heritage', isNew: false, bestSeller: false, sku: 'SR-404' },
];

const imgURL = (id, w) => `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;
const formatIDR = (n) => `Rp ${n.toLocaleString('id-ID')}`;
const getProductById = (id) => PRODUCTS.find((p) => p.id === Number(id)) || null;
const getMotif = (name) => MOTIFS[name] || null;
const getCategoryLabel = (v) => CATEGORY_LABELS[v] || v;
const starWidth = (r) => `${(r / 5) * 100}%`;

/* ——— STORE (cart + wishlist, localStorage) ——— */

const Store = (() => {
  const CART_KEY = 'serat.cart.v1';
  const WISH_KEY = 'serat.wishlist.v1';
  const DISC_KEY = 'serat.discount.v1';
  const VALID_CODES = { SERAT10: 0.1 };
  const FREE_SHIPPING_THRESHOLD = 2000000;
  const SHIPPING_FEE = 60000;

  const read = (key, fb) => { try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : fb; } catch (e) { return fb; } };
  const write = (key, v) => { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* session-only */ } };
  const emit = (name) => window.dispatchEvent(new CustomEvent(name));
  const itemKey = (id, color, size) => `${id}|${color || ''}|${size || ''}`;

  const getCart = () => read(CART_KEY, []);
  const saveCart = (cart) => { write(CART_KEY, cart); emit('serat:cart'); };

  function addToCart(productId, opts) {
    const { color = '', size = '', qty = 1 } = opts || {};
    const cart = getCart();
    const key = itemKey(productId, color, size);
    const existing = cart.find((i) => i.key === key);
    if (existing) existing.qty += qty;
    else cart.push({ key, id: productId, color, size, qty });
    saveCart(cart);
    return key;
  }
  const changeQty = (key, delta) => {
    const cart = getCart();
    const item = cart.find((i) => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    saveCart(cart);
  };
  const setQty = (key, qty) => {
    const cart = getCart();
    const item = cart.find((i) => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, Math.min(10, qty));
    saveCart(cart);
  };
  const removeFromCart = (key) => saveCart(getCart().filter((i) => i.key !== key));
  const clearCart = () => saveCart([]);
  const getCartCount = () => getCart().reduce((s, i) => s + i.qty, 0);
  const getCartRows = () => getCart().map((i) => { const p = getProductById(i.id); return p ? { ...i, product: p } : null; }).filter(Boolean);
  const getCartSubtotal = () => getCartRows().reduce((s, r) => s + r.product.price * r.qty, 0);
  const getDiscount = () => read(DISC_KEY, null);
  const applyDiscount = (code) => {
    const c = String(code || '').trim().toUpperCase();
    const rate = VALID_CODES[c];
    if (!rate) return false;
    write(DISC_KEY, { code: c, rate });
    emit('serat:cart');
    return true;
  };
  const removeDiscount = () => { try { localStorage.removeItem(DISC_KEY); } catch (e) {} emit('serat:cart'); };
  const getWishlist = () => read(WISH_KEY, []);
  const saveWishlist = (list) => { write(WISH_KEY, list); emit('serat:wishlist'); };
  const isWishlisted = (id) => getWishlist().includes(Number(id));
  const toggleWishlist = (id) => {
    const n = Number(id);
    const list = getWishlist();
    const idx = list.indexOf(n);
    if (idx === -1) { list.push(n); saveWishlist(list); return true; }
    list.splice(idx, 1); saveWishlist(list); return false;
  };
  const getWishlistCount = () => getWishlist().length;
  const getShipping = (subtotal) => (subtotal === 0 ? 0 : subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE);
  const getTotals = () => {
    const subtotal = getCartSubtotal();
    const discount = getDiscount();
    const discountAmount = discount ? Math.round(subtotal * discount.rate) : 0;
    const afterDiscount = subtotal - discountAmount;
    const shipping = getShipping(afterDiscount);
    return { subtotal, discountAmount, shipping, total: afterDiscount + shipping, freeShippingThreshold: FREE_SHIPPING_THRESHOLD };
  };

  return { addToCart, changeQty, setQty, removeFromCart, clearCart, getCartCount, getCartRows, getCartSubtotal, getDiscount, applyDiscount, removeDiscount, getWishlist, isWishlisted, toggleWishlist, getWishlistCount, getTotals };
})();

/* ——— TOAST ——— */

const toastRegion = document.getElementById('toastRegion');

function showToast(message, action) {
  if (!toastRegion) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  const text = document.createElement('span');
  text.textContent = message;
  toast.appendChild(text);
  if (action && action.label) {
    const link = document.createElement('a');
    link.className = 'toast__action';
    link.textContent = action.label;
    if (action.href) link.href = action.href;
    if (action.onClick) {
      link.addEventListener('click', (e) => { e.preventDefault(); action.onClick(); });
    }
    toast.appendChild(link);
  }
  toastRegion.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('is-visible'));
  setTimeout(() => { toast.classList.remove('is-visible'); setTimeout(() => toast.remove(), 400); }, 3400);
}

/* ——— COUNTS ——— */

function refreshCounts() {
  document.querySelectorAll('[data-count="cart"]').forEach((el) => {
    const n = Store.getCartCount();
    el.textContent = n;
    el.classList.toggle('is-visible', n > 0);
  });
  document.querySelectorAll('[data-count="wishlist"]').forEach((el) => {
    const n = Store.getWishlistCount();
    el.textContent = n;
    el.classList.toggle('is-visible', n > 0);
  });
}
window.addEventListener('serat:cart', refreshCounts);
window.addEventListener('serat:wishlist', refreshCounts);
refreshCounts();

/* ——— PRODUCT CARD ——— */

const wishlistIcon = () =>
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5S3.5 15.5 3.5 9.6A4.6 4.6 0 0 1 12 6.5a4.6 4.6 0 0 1 8.5 3.1c0 5.9-8.5 10.9-8.5 10.9z"></path></svg>';

function renderProductCard(product) {
  const wished = Store.isWishlisted(product.id);
  const soldOut = !product.available;
  const badges = [];
  if (product.badge) badges.push(`<span class="badge">${product.badge}</span>`);
  if (soldOut) badges.push('<span class="badge">Sold Out</span>');
  if (product.compareAtPrice) badges.push('<span class="badge badge--gold">Limited</span>');
  const badgesHtml = badges.length ? `<div class="card-product__badges">${badges.join('')}</div>` : '';
  const priceHtml = (product.compareAtPrice ? `<s>${formatIDR(product.compareAtPrice)}</s>` : '') + `<span>${formatIDR(product.price)}</span>`;
  return `
      <article class="card-product${soldOut ? ' is-soldout' : ''}" data-product-id="${product.id}">
        <div class="card-product__media">
          <a href="product.html?id=${product.id}" tabindex="-1" aria-hidden="true" aria-label="${product.name}">
            <img class="card-product__img-main" src="${imgURL(product.image, 800)}" alt="" width="600" height="800" loading="lazy">
            <img class="card-product__img-hover" src="${imgURL(product.hoverImage, 800)}" alt="" width="600" height="800" loading="lazy">
          </a>
          ${badgesHtml}
          <button class="card-product__wish js-wishlist-toggle${wished ? ' is-active' : ''}" data-id="${product.id}" aria-pressed="${wished}" aria-label="${wished ? 'Remove from' : 'Add to'} wishlist">${wishlistIcon()}</button>
          <button class="btn btn--ghost btn--sm card-product__quick js-quick-add" data-id="${product.id}" ${soldOut ? 'disabled' : ''}>${soldOut ? 'Sold Out' : 'Quick Add'}</button>
        </div>
        <div class="card-product__body">
          <p class="card-product__cat">${getCategoryLabel(product.category)}</p>
          <h3 class="card-product__name"><a href="product.html?id=${product.id}">${product.name}</a></h3>
          <p class="card-product__price">${priceHtml}</p>
          <span class="rating card-product__rating" role="img" aria-label="Rated ${product.rating} out of 5 stars">
            <span class="rating__track" aria-hidden="true">★★★★★</span>
            <span class="rating__fill" aria-hidden="true" style="width:${starWidth(product.rating)}">★★★★★</span>
            <span class="rating__count">(${product.reviews})</span>
          </span>
        </div>
      </article>`;
}

function renderGrid(container, products) {
  if (!container) return;
  container.innerHTML = products.map(renderProductCard).join('');
}

/* ——— DELEGATED INTERACTIONS (bound once) ——— */

document.addEventListener('click', (e) => {
  const quick = e.target.closest('.js-quick-add');
  if (quick && !quick.disabled) {
    e.preventDefault();
    const product = getProductById(quick.dataset.id);
    if (!product) return;
    Store.addToCart(product.id, { color: product.colors[0], size: product.sizes[0], qty: 1 });
    showToast(`${product.name} added to your cart`, { label: 'View cart', href: 'cart.html' });
    return;
  }

  const wish = e.target.closest('.js-wishlist-toggle');
  if (wish) {
    e.preventDefault();
    const product = getProductById(wish.dataset.id);
    if (!product) return;
    const added = Store.toggleWishlist(product.id);
    wish.classList.toggle('is-active', added);
    wish.setAttribute('aria-pressed', String(added));
    wish.setAttribute('aria-label', `${added ? 'Remove from' : 'Add to'} wishlist`);
    showToast(added ? `${product.name} saved to your wishlist` : 'Removed from wishlist', added ? { label: 'View wishlist', onClick: openWishlistModal } : undefined);
    return;
  }

  const removeRow = e.target.closest('.js-wishlist-remove');
  if (removeRow) {
    Store.toggleWishlist(removeRow.dataset.id);
    renderWishlistModal();
    return;
  }

  const accordionBtn = e.target.closest('.accordion__btn');
  if (accordionBtn) {
    const item = accordionBtn.closest('.accordion__item');
    if (!item) return;
    const isOpen = item.classList.toggle('is-open');
    accordionBtn.setAttribute('aria-expanded', String(isOpen));
  }
});
