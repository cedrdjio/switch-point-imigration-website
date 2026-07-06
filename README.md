# Switch Point Immigration — Site web

Plateforme d'immigration premium (style SaaS / bento) construite avec **Astro + Tailwind CSS 4 + TypeScript + GSAP + Lenis + Swiper**. Sortie 100 % statique, déployable sur Hostinger ou tout CDN.

## Commandes

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement (localhost:4321)
npm run build    # build de production → dist/
npm run preview  # prévisualiser le build
```

## Déploiement sur Hostinger

1. `npm run build`
2. Téléverser le **contenu** du dossier `dist/` dans `public_html/`
3. C'est tout — aucun backend requis.

## Personnalisation

- **Coordonnées (téléphone, WhatsApp, email, adresse)** : `src/data/site.ts`
- **Destinations et programmes** (critères, frais, délais, FAQ) : `src/data/destinations.ts`
- **Articles du blog** : `src/data/blog.ts`
- **Témoignages** : `src/data/testimonials.ts`
- **Outils** (libellés du hub) : `src/data/tools.ts`
- **Couleurs / design system** : `src/styles/global.css` (tokens `@theme`)
- **Logo** : `public/images/logo.png`
- **Domaine canonique (SEO)** : `site` dans `astro.config.mjs`

## Architecture

```
src/
├── data/            # tout le contenu éditorial (TypeScript typé)
├── components/      # Header (mega menu), Footer, cartes bento, sliders…
├── layouts/Base.astro   # SEO, OpenGraph, Schema.org, thème sombre
├── scripts/main.ts  # Lenis, GSAP (reveal, parallax), menus, accordéons
└── pages/
    ├── index.astro          # accueil
    ├── destinations.astro   # hub destinations
    ├── [destination]/       # 9 pages pays + 18 pages programmes
    ├── outils/              # 8 outils interactifs
    ├── blog/                # blog + articles
    ├── a-propos.astro · contact.astro · rendez-vous.astro · 404.astro
```
