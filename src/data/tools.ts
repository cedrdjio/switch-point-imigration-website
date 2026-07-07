export interface Tool {
  slug: string;
  name: string;
  short: string;
  icon: string;
  badge?: string;
  interactive: boolean;
}

export const tools: Tool[] = [
  {
    slug: 'simulateur',
    name: "Simulateur d'éligibilité",
    short: 'Répondez à 8 questions et découvrez les programmes faits pour votre profil.',
    icon: 'Target',
    badge: 'Le plus utilisé',
    interactive: true,
  },
  {
    slug: 'calculateur-crs',
    name: 'Calculateur CRS',
    short: 'Calculez votre score Express Entry en temps réel, comme sur le site officiel.',
    icon: 'Zap',
    badge: 'Canada',
    interactive: true,
  },
  {
    slug: 'calculateur-arrima',
    name: 'Calculateur Arrima',
    short: 'Estimez votre score de déclaration d’intérêt pour le Québec.',
    icon: 'Landmark',
    badge: 'Québec',
    interactive: true,
  },
  {
    slug: 'budget-etudes',
    name: 'Budget études',
    short: 'Chiffrez votre projet d’études : scolarité, logement, visa, billet, assurance.',
    icon: 'Wallet',
    interactive: true,
  },
  {
    slug: 'estimateur-couts',
    name: 'Estimateur de coûts visa',
    short: 'Le coût total réel de votre procédure, frais gouvernementaux inclus.',
    icon: 'Coins',
    interactive: true,
  },
  {
    slug: 'generateur-documents',
    name: 'Checklist de documents',
    short: 'Générez la liste exacte des documents requis pour votre programme.',
    icon: 'ClipboardList',
    interactive: true,
  },
  {
    slug: 'comparateur',
    name: 'Comparateur de destinations',
    short: 'Canada vs France vs Australie : comparez coûts, délais et opportunités.',
    icon: 'Scale',
    interactive: true,
  },
  {
    slug: 'delais-traitement',
    name: 'Délais de traitement',
    short: 'Les délais actualisés de chaque programme, pays par pays.',
    icon: 'Timer',
    interactive: true,
  },
];

export const getTool = (slug: string) => tools.find((t) => t.slug === slug);
