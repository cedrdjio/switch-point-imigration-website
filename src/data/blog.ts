export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categories: string[];
  date: string;
  readTime: string;
  emoji: string;
  /** Photo d'illustration (distante, repli local auto) */
  image: string;
  gradient: string;
  body: string[]; // paragraphes / blocs markdown-light
}

export const categories = [
  'Canada',
  'France',
  'Europe',
  'Australie',
  'Nouvelle-Zélande',
  'Étudiant',
  'Visiteur',
  'Express Entry',
  'Actualités',
  'Guides',
] as const;

export const articles: Article[] = [
  {
    slug: 'tirages-express-entry-francophones-2026',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=80',
    title: 'Express Entry 2026 : pourquoi les tirages francophones sont votre meilleure chance',
    excerpt:
      'Les tirages ciblés pour les candidats francophones affichent des scores CRS jusqu’à 130 points sous les tirages généraux. Voici comment en profiter.',
    category: 'Express Entry',
    categories: ['Canada', 'Express Entry', 'Actualités'],
    date: '2026-06-18',
    readTime: '6 min',
    emoji: '⚡',
    gradient: 'from-brand-600 to-brand-800',
    body: [
      "Le Canada a fait de l'immigration francophone hors Québec une priorité nationale : la cible est passée à plus de 8 % des admissions. Concrètement, IRCC organise des tirages Express Entry réservés aux candidats ayant un niveau NCLC 7 ou plus en français.",
      '## Des scores d’invitation nettement plus bas',
      "Quand les tirages généraux invitent autour de 530 points CRS, les tirages francophones descendent régulièrement entre 380 et 460. Pour un candidat africain francophone, c'est la différence entre un dossier impossible et une invitation en quelques mois.",
      '## Comment maximiser vos points de langue',
      "Un TEF Canada réussi au niveau NCLC 7+ peut rapporter jusqu'à 74 points supplémentaires (50 points de compétences transférables + 25 points additionnels pour le français, portés à 50 si vous avez aussi un anglais CLB 5+).",
      '## Notre conseil',
      "Passez le TEF avant tout le reste. C'est l'investissement au meilleur rendement de tout votre dossier : quelques centaines d'euros pour potentiellement 74 points. Utilisez notre calculateur CRS pour simuler votre score avec et sans le français.",
    ],
  },
  {
    slug: 'campus-france-calendrier-2026-2027',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
    title: 'Campus France 2026-2027 : le calendrier complet pour ne pas rater la rentrée',
    excerpt:
      'La procédure « Études en France » obéit à des dates strictes. Le calendrier officiel, étape par étape, et les erreurs qui coûtent une année.',
    category: 'France',
    categories: ['France', 'Étudiant', 'Guides'],
    date: '2026-06-02',
    readTime: '5 min',
    emoji: '🗓️',
    gradient: 'from-blue-600 to-indigo-800',
    body: [
      "Chaque année, des milliers d'étudiants perdent une rentrée universitaire pour un simple retard de dossier. La procédure Études en France (EEF) ouvre en octobre et les premières échéances tombent dès décembre.",
      '## Les dates clés',
      "Octobre – novembre : création du compte EEF et choix des formations. Décembre – janvier : clôture des candidatures DAP (licence 1). Février – avril : entretiens Campus France. Avril – juin : réponses des établissements. Juin – août : demande de visa.",
      '## L’entretien pédagogique, l’étape décisive',
      "L'agent Campus France évalue la cohérence de votre projet : pourquoi cette formation, pourquoi la France, quel projet professionnel ? Un entretien flou est la première cause d'avis défavorable.",
      '## Le budget à anticiper',
      "Comptez les frais de dossier Campus France, 50 € de visa, 103 € de CVEC et surtout la justification de 615 €/mois de ressources. Notre calculateur de budget études vous donne le chiffrage complet en 2 minutes.",
    ],
  },
  {
    slug: 'permis-etudes-canada-preuve-financiere-2026',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    title: "Permis d'études Canada : la nouvelle preuve financière expliquée",
    excerpt:
      'Le seuil de fonds requis pour un permis d’études a été relevé à 20 635 CAD. Ce que ça change pour votre dossier et comment présenter des finances irréprochables.',
    category: 'Canada',
    categories: ['Canada', 'Étudiant', 'Guides'],
    date: '2026-05-20',
    readTime: '7 min',
    emoji: '🎓',
    gradient: 'from-red-500 to-brand-800',
    body: [
      "IRCC exige désormais que chaque étudiant démontre 20 635 CAD de fonds de subsistance (hors Québec), en plus de la première année de scolarité. Ce seuil est indexé et vérifié avec rigueur.",
      '## Ce que les agents vérifient réellement',
      "L'origine des fonds compte plus que le montant : des dépôts soudains et inexpliqués sont le premier motif de refus financier. Six mois d'historique bancaire cohérent valent mieux qu'un gros solde apparu la veille.",
      '## Les preuves les plus solides',
      "Certificat de placement garanti (CPG), compte bloqué, prêt étudiant bancaire documenté, prise en charge par un garant avec revenus traçables, bourse officielle.",
      '## Lettre d’explication',
      "Chaque dossier devrait inclure une lettre expliquant qui finance quoi, avec quels revenus. C'est l'assurance-vie de votre demande.",
    ],
  },
  {
    slug: 'travailler-en-lituanie-guide-2026',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1600&q=80',
    title: 'Travailler en Lituanie : le guide complet 2026 pour les candidats africains',
    excerpt:
      'Salaires, métiers en demande, procédure de permis et pièges à éviter : tout ce qu’il faut savoir avant de postuler en Lituanie.',
    category: 'Europe',
    categories: ['Europe', 'Guides'],
    date: '2026-05-05',
    readTime: '8 min',
    emoji: '🇱🇹',
    gradient: 'from-emerald-500 to-brand-800',
    body: [
      "La Lituanie est devenue l'une des portes d'entrée les plus réalistes vers l'Union européenne : quotas de travailleurs étrangers élevés, procédure rapide et employeurs habitués au recrutement international.",
      '## Les métiers qui recrutent',
      'Chauffeurs internationaux (C+E), soudeurs, charpentiers métalliques, ouvriers de production, personnel logistique et, côté qualifié, développeurs et techniciens.',
      '## La procédure en bref',
      "L'employeur initie l'autorisation, vous déposez ensuite le permis de séjour temporaire (160 €, ou 320 € en accéléré) puis le visa national D. Comptez 2 à 4 mois au total.",
      '## Attention aux arnaques',
      "Aucun employeur sérieux ne demande de « frais de recrutement » de plusieurs milliers d'euros sans contrat vérifiable. Exigez toujours un contrat conforme au droit lituanien et vérifiez l'entreprise au registre. C'est exactement le filtrage que nous faisons pour nos clients.",
    ],
  },
  {
    slug: 'visa-schengen-eviter-refus',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80',
    title: 'Visa Schengen : les 7 erreurs qui provoquent un refus (et comment les éviter)',
    excerpt:
      'Assurance non conforme, itinéraire incohérent, fonds injustifiés… Le décryptage des motifs de refus les plus fréquents par nos consultants.',
    category: 'Visiteur',
    categories: ['Europe', 'Visiteur', 'Guides'],
    date: '2026-04-14',
    readTime: '6 min',
    emoji: '🇪🇺',
    gradient: 'from-brand-500 to-navy-900',
    body: [
      "Le taux de refus Schengen dépasse 30 % dans plusieurs pays africains. Pourtant, la grande majorité des refus tiennent à des erreurs évitables de dossier, pas au profil du demandeur.",
      '## Erreur n°1 : le mauvais consulat',
      "Déposer en Espagne parce que « c'est plus rapide » alors que votre destination principale est la France est un motif de refus automatique.",
      '## Erreur n°2 : des fonds sans histoire',
      "Un dépôt de 2 millions FCFA la semaine précédant la demande ne prouve rien — il éveille la suspicion. Les relevés doivent raconter une activité économique réelle sur 3 à 6 mois.",
      '## Erreur n°3 : l’assurance au rabais',
      "L'assurance doit couvrir 30 000 €, toute la durée du séjour et tout l'espace Schengen. Les attestations non conformes sont systématiquement rejetées.",
      '## Notre méthode',
      "Chaque dossier passe par une revue en 40 points de contrôle avant dépôt. Résultat : un taux d'approbation largement supérieur à la moyenne des demandes individuelles.",
    ],
  },
  {
    slug: 'australie-genuine-student-2026',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80',
    title: "Australie : réussir le critère Genuine Student en 2026",
    excerpt:
      "Le critère GS a remplacé le GTE et durci l'évaluation des étudiants. Comment démontrer un projet d'études authentique et éviter le refus.",
    category: 'Australie',
    categories: ['Australie', 'Étudiant', 'Actualités'],
    date: '2026-03-28',
    readTime: '5 min',
    emoji: '🇦🇺',
    gradient: 'from-amber-500 to-brand-800',
    body: [
      "Depuis la réforme migratoire australienne, chaque demandeur de visa étudiant doit convaincre qu'il est un « Genuine Student » : les questions du formulaire imposent de justifier le choix du programme, de l'établissement et le lien avec votre carrière.",
      '## Ce qui a changé',
      "Fini la simple déclaration GTE générique. Le dossier doit détailler votre situation actuelle, la logique économique de vos études (coût vs bénéfice carrière) et vos attaches.",
      '## Les réponses qui fonctionnent',
      "Des réponses spécifiques, chiffrées et vérifiables : nom des cours, comparaison avec les alternatives locales, projection salariale au retour ou en poursuite légale de séjour.",
      '## L’accompagnement Switch Point',
      "Nous rédigeons la stratégie GS avec vous, alignée sur vos preuves financières et votre parcours — le point exact où se joue l'approbation.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
