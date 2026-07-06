import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Lenis smooth scroll ───────────────────────────── */
if (!prefersReduced) {
  const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Anchor links via Lenis
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        e.preventDefault();
        lenis.scrollTo(id, { offset: -96 });
      }
    });
  });
}

/* ── Reveal on scroll ───────────────────────────────── */
if (!prefersReduced) {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay ?? '0');
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  /* Stagger groups */
  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>('[data-reveal-item]');
    if (!items.length) return;
    gsap.set(items, { opacity: 0, y: 26 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.09,
      ease: 'power3.out',
      scrollTrigger: { trigger: group, start: 'top 85%', once: true },
    });
  });

  /* Parallax layers: data-parallax="0.2" → moves at 20% of scroll */
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax ?? '0.2');
    gsap.to(el, {
      yPercent: speed * -100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('[data-parallax-container]') ?? el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  /* Parallax hero background (moves slower, scales subtly) */
  document.querySelectorAll<HTMLElement>('[data-hero-parallax]').forEach((el) => {
    gsap.to(el, {
      yPercent: 24,
      ease: 'none',
      scrollTrigger: { trigger: el.parentElement, start: 'top top', end: 'bottom top', scrub: true },
    });
  });
} else {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}

/* ── Animated counters ─────────────────────────────── */
document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
  const target = parseFloat(el.dataset.counter ?? '0');
  const suffix = el.dataset.counterSuffix ?? '';
  const obj = { v: 0 };
  gsap.to(obj, {
    v: target,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    onUpdate: () => {
      el.textContent = Math.round(obj.v).toLocaleString('fr-FR') + suffix;
    },
  });
});

/* ── Header : compact au scroll ─────────────────────── */
const header = document.getElementById('site-header');
if (header) {
  let lastY = 0;
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 24);
      lastY = y;
    },
    { passive: true }
  );
}

/* ── Mega menus (desktop hover + click) ─────────────── */
document.querySelectorAll<HTMLElement>('[data-menu]').forEach((wrap) => {
  const btn = wrap.querySelector<HTMLButtonElement>('[data-menu-btn]');
  const panel = wrap.querySelector<HTMLElement>('[data-menu-panel]');
  if (!btn || !panel) return;
  let closeTimer: number | undefined;

  const open = () => {
    document.querySelectorAll<HTMLElement>('[data-menu-panel].is-open').forEach((p) => {
      if (p !== panel) p.classList.remove('is-open');
    });
    panel.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    panel.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  };

  wrap.addEventListener('mouseenter', () => {
    window.clearTimeout(closeTimer);
    open();
  });
  wrap.addEventListener('mouseleave', () => {
    closeTimer = window.setTimeout(close, 160);
  });
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    panel.classList.contains('is-open') ? close() : open();
  });
  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target as Node)) close();
  });
});

/* ── Menu mobile ───────────────────────────────────── */
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('is-open');
    mobileBtn.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('overflow-hidden', open);
  });
  mobileMenu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      document.documentElement.classList.remove('overflow-hidden');
    })
  );
  // Accordéons mobiles
  mobileMenu.querySelectorAll<HTMLButtonElement>('[data-acc-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement?.classList.toggle('is-open');
    });
  });
}

/* ── Thème sombre ──────────────────────────────────── */
document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('sp-theme', dark ? 'dark' : 'light');
  });
});

/* ── FAQ / accordéons génériques ───────────────────── */
document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((acc) => {
  acc.querySelectorAll<HTMLButtonElement>('[data-accordion-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('[data-accordion-item]');
      const wasOpen = item?.classList.contains('is-open');
      if (acc.dataset.accordion === 'single') {
        acc.querySelectorAll('[data-accordion-item]').forEach((i) => i.classList.remove('is-open'));
      }
      if (!wasOpen) item?.classList.add('is-open');
      else item?.classList.remove('is-open');
    });
  });
});

/* ── Recherche globale (filtrage client) ───────────── */
const searchInput = document.querySelector<HTMLInputElement>('[data-search-input]');
const searchResults = document.querySelector<HTMLElement>('[data-search-results]');
if (searchInput && searchResults) {
  const items = Array.from(
    searchResults.querySelectorAll<HTMLElement>('[data-search-item]')
  );
  const empty = searchResults.querySelector<HTMLElement>('[data-search-empty]');
  const filter = () => {
    const q = searchInput.value.trim().toLowerCase();
    let shown = 0;
    items.forEach((item) => {
      const hay = (item.dataset.keywords ?? '') + ' ' + item.textContent?.toLowerCase();
      const match = q === '' || hay.toLowerCase().includes(q);
      item.classList.toggle('hidden', !match);
      if (match) shown++;
    });
    if (empty) empty.classList.toggle('hidden', shown > 0);
  };
  searchInput.addEventListener('input', filter);
}

/* ── Marquee pause au survol ───────────────────────── */
document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((m) => {
  m.addEventListener('mouseenter', () => (m.style.animationPlayState = 'paused'));
  m.addEventListener('mouseleave', () => (m.style.animationPlayState = 'running'));
});
