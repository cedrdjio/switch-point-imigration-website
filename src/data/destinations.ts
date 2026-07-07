export interface FaqItem {
  q: string;
  a: string;
}

export interface FeeRow {
  label: string;
  amount: string;
}

export interface Program {
  slug: string;
  name: string;
  short: string;
  /** Nom d'icône Lucide */
  icon: string;
  duration: string;
  overview: string;
  eligibility: string[];
  documents: string[];
  governmentFees: FeeRow[];
  agencyNote: string;
  processingTime: string;
  steps: { title: string; text: string }[];
  advantages: string[];
  faq: FaqItem[];
  relatedTools: string[]; // slugs de /outils
  popular?: boolean;
}

export interface Destination {
  slug: string;
  name: string;
  flag: string;
  /** Code pays ISO pour flagcdn.com (ex. 'ca', 'eu') */
  cc: string;
  /** Photo paysage/ville (URL distante, repli local automatique) */
  image: string;
  region: 'Amérique du Nord' | 'Europe' | 'Océanie';
  tagline: string;
  overview: string;
  gradient: string; // classes tailwind pour la carte
  facts: { label: string; value: string }[];
  benefits: { title: string; text: string; icon: string }[];
  faq: FaqItem[];
  programs: Program[];
  featured?: boolean;
}

/* ────────────────────────────────────────────────────────────
   CANADA
──────────────────────────────────────────────────────────── */

const canada: Destination = {
  slug: 'canada',
  name: 'Canada',
  flag: '🇨🇦',
  cc: 'ca',
  image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=80',
  region: 'Amérique du Nord',
  tagline: 'La destination n°1 des Africains francophones',
  overview:
    "Le Canada accueille plus de 450 000 nouveaux résidents permanents chaque année. Entre Express Entry, le programme Arrima du Québec, les permis d'études et les visas visiteur, c'est la destination la plus accessible pour bâtir un avenir durable en Amérique du Nord.",
  gradient: 'from-red-500/20 via-brand-500/10 to-brand-700/20',
  facts: [
    { label: 'Immigrants / an', value: '450 000+' },
    { label: 'Langues', value: 'FR · EN' },
    { label: 'Monnaie', value: 'Dollar CAD' },
    { label: 'Délai moyen', value: '6–18 mois' },
  ],
  benefits: [
    { icon: 'GraduationCap', title: 'Études de classe mondiale', text: 'Universités reconnues et permis de travail post-diplôme jusqu’à 3 ans.' },
    { icon: 'Briefcase', title: 'Marché du travail dynamique', text: 'Pénurie de main-d’œuvre dans la santé, la tech et les métiers spécialisés.' },
    { icon: 'HeartPulse', title: 'Santé et éducation publiques', text: 'Couverture santé universelle et école gratuite pour les enfants de résidents.' },
    { icon: 'Stamp', title: 'Voie directe vers la citoyenneté', text: 'Citoyenneté possible après 3 ans de résidence permanente.' },
  ],
  faq: [
    { q: 'Quel est le meilleur programme pour immigrer au Canada depuis l’Afrique ?', a: "Tout dépend de votre profil. Express Entry favorise les profils qualifiés anglophones/bilingues, Arrima est idéal pour les francophones visant le Québec, et le permis d'études reste la voie la plus sûre pour les moins de 30 ans. Notre simulateur d'éligibilité vous oriente en 2 minutes." },
    { q: 'Combien coûte une procédure d’immigration canadienne ?', a: "Comptez entre 1 500 et 2 500 CAD de frais gouvernementaux pour une résidence permanente (hors preuve de fonds), et environ 150 CAD pour un permis d'études. Utilisez notre estimateur de coûts pour un budget précis." },
    { q: 'Faut-il un test de langue ?', a: 'Oui. IELTS ou CELPIP pour l’anglais, TEF ou TCF Canada pour le français. Le test est obligatoire pour Express Entry et Arrima, fortement recommandé pour les études.' },
    { q: 'La preuve de fonds est-elle obligatoire ?', a: "Oui pour Express Entry (environ 14 690 CAD pour une personne seule) et pour le permis d'études (frais de scolarité + 20 635 CAD de frais de subsistance)." },
  ],
  featured: true,
  programs: [
    {
      slug: 'express-entry',
      name: 'Express Entry',
      short: 'Résidence permanente pour travailleurs qualifiés via le système de points CRS.',
      icon: 'Zap',
      duration: '6–8 mois',
      popular: true,
      overview:
        "Express Entry est le système fédéral de sélection des travailleurs qualifiés. Les candidats sont classés selon le score CRS (âge, diplômes, langues, expérience) et les mieux classés reçoivent une invitation à demander la résidence permanente. C'est la voie la plus rapide vers la RP canadienne.",
      eligibility: [
        'Au moins 1 an d’expérience professionnelle qualifiée (TEER 0, 1, 2 ou 3)',
        'Niveau de langue NCLC 7 / CLB 7 minimum (TEF, TCF, IELTS ou CELPIP)',
        'Diplôme post-secondaire évalué par une EDE (WES, ICAS…)',
        'Preuve de fonds : 14 690 CAD (1 personne) à 27 297 CAD (4 personnes)',
        'Score CRS compétitif (les tirages ciblés francophones descendent sous 400)',
      ],
      documents: [
        'Passeport valide',
        'Résultats de test de langue (moins de 2 ans)',
        "Évaluation des diplômes d'études (EDE)",
        'Lettres de référence des employeurs',
        'Relevés bancaires (preuve de fonds)',
        'Certificat de police de chaque pays de résidence',
        'Visite médicale auprès d’un médecin agréé',
        'Photos conformes et actes de naissance',
      ],
      governmentFees: [
        { label: 'Frais de traitement (demandeur principal)', amount: '950 CAD' },
        { label: 'Droit de résidence permanente', amount: '575 CAD' },
        { label: 'Époux/conjoint', amount: '1 525 CAD' },
        { label: 'Enfant à charge', amount: '260 CAD' },
        { label: 'Biométrie', amount: '85 CAD' },
      ],
      agencyNote:
        'Nos honoraires couvrent l’évaluation complète du profil, la stratégie de score CRS, la préparation du profil Express Entry, la constitution du dossier de RP et le suivi jusqu’à la décision. Tarif communiqué après consultation gratuite.',
      processingTime: '6 mois en moyenne après invitation (80 % des dossiers)',
      steps: [
        { title: 'Évaluation du profil', text: 'Simulation CRS et choix de la meilleure stratégie (fédéral, volet francophone, PNP).' },
        { title: 'Tests et équivalences', text: 'Passage des tests de langue et évaluation des diplômes (2–3 mois).' },
        { title: 'Création du profil', text: 'Dépôt du profil dans le bassin Express Entry.' },
        { title: 'Invitation (ITA)', text: 'Réception de l’invitation lors d’un tirage ciblé ou général.' },
        { title: 'Demande de RP', text: '60 jours pour déposer le dossier complet avec documents.' },
        { title: 'Décision et COPR', text: 'Visite médicale, biométrie, puis confirmation de résidence permanente.' },
      ],
      advantages: [
        'Résidence permanente directe, sans passer par un permis temporaire',
        'Tirages ciblés pour les francophones avec des scores plus accessibles',
        'Conjoint inclus avec permis de travail ouvert',
        'Traitement le plus rapide de tous les programmes canadiens',
      ],
      faq: [
        { q: 'Quel score CRS faut-il en 2026 ?', a: 'Les tirages généraux tournent autour de 520–540, mais les tirages francophones descendent régulièrement entre 380 et 450. Un bon TEF peut rapporter jusqu’à 74 points de plus.' },
        { q: 'Puis-je postuler sans offre d’emploi ?', a: 'Oui. L’offre d’emploi n’est pas obligatoire — la majorité des invités n’en ont pas. Elle ajoute simplement des points au score.' },
        { q: 'Le français suffit-il ?', a: 'Oui. Avec un TEF NCLC 7+, vous êtes éligible aux tirages ciblés francophones, souvent les plus avantageux pour les candidats africains.' },
      ],
      relatedTools: ['calculateur-crs', 'simulateur', 'estimateur-couts', 'delais-traitement'],
    },
    {
      slug: 'arrima',
      name: 'Arrima (Québec)',
      short: 'Programme de sélection des travailleurs qualifiés du Québec, idéal pour les francophones.',
      icon: 'Landmark',
      duration: '12–24 mois',
      popular: true,
      overview:
        "Arrima est la plateforme de déclaration d'intérêt du Programme de sélection des travailleurs qualifiés (PSTQ) du Québec. Le Québec sélectionne ses immigrants en priorité sur la connaissance du français — un avantage décisif pour les candidats d'Afrique francophone.",
      eligibility: [
        'Français niveau 7 (B2) minimum à l’oral pour le volet 1',
        'Diplôme équivalent au diplôme d’études secondaires québécois ou supérieur',
        'Expérience professionnelle pertinente dans les 5 dernières années',
        'Capacité d’autonomie financière (engagement signé)',
        'Profil déposé dans Arrima avec déclaration d’intérêt à jour',
      ],
      documents: [
        'Passeport valide',
        'Test de français (TEFAQ, TCF Québec ou TEF Canada)',
        'Diplômes et relevés de notes',
        'Attestations de travail détaillées',
        'Acte de naissance et documents d’état civil',
        'Preuves d’autonomie financière',
      ],
      governmentFees: [
        { label: 'Demande de sélection (demandeur principal)', amount: '895 CAD' },
        { label: 'Époux/conjoint', amount: '192 CAD' },
        { label: 'Enfant à charge', amount: '192 CAD' },
        { label: 'Résidence permanente fédérale (après CSQ)', amount: '1 525 CAD' },
      ],
      agencyNote:
        'Nous optimisons votre profil Arrima (score, formations en demande), préparons le dossier CSQ puis la demande fédérale. Accompagnement complet jusqu’à l’installation à Montréal ou Québec.',
      processingTime: 'CSQ : 6–12 mois après invitation · RP fédérale : 12–15 mois',
      steps: [
        { title: 'Dépôt du profil Arrima', text: 'Gratuit, valide 12 mois renouvelables.' },
        { title: 'Invitation du MIFI', text: 'Sélection selon le score et les besoins du marché québécois.' },
        { title: 'Demande de CSQ', text: 'Dossier complet au ministère de l’Immigration du Québec.' },
        { title: 'Certificat de sélection', text: 'Obtention du CSQ — vous êtes sélectionné par le Québec.' },
        { title: 'Demande fédérale', text: 'Dossier de résidence permanente auprès d’IRCC (santé, sécurité).' },
        { title: 'Installation', text: 'Arrivée au Québec avec statut de résident permanent.' },
      ],
      advantages: [
        'Le français est l’atout n°1 — parfait pour les profils d’Afrique francophone',
        'Pas de preuve de fonds aussi élevée qu’Express Entry',
        'Société francophone, coût de la vie plus bas qu’à Toronto ou Vancouver',
        'Accès aux services d’intégration du Québec (francisation, emploi)',
      ],
      faq: [
        { q: 'Quelle est la différence entre Arrima et Express Entry ?', a: 'Arrima sélectionne pour le Québec (français prioritaire, deux étapes CSQ + fédéral). Express Entry couvre le reste du Canada et est plus rapide, mais plus compétitif en points.' },
        { q: 'Quel score de français faut-il ?', a: 'Le niveau 7 (B2) à l’oral est le seuil clé. Un niveau 9+ (C1) augmente fortement vos chances d’invitation.' },
        { q: 'Combien de temps prend la procédure complète ?', a: 'Comptez 18 à 24 mois entre le dépôt du profil et l’arrivée au Québec, selon les invitations et les délais fédéraux.' },
      ],
      relatedTools: ['calculateur-arrima', 'simulateur', 'estimateur-couts'],
    },
    {
      slug: 'etudes',
      name: "Permis d'études",
      short: "Étudier dans une université ou un collège canadien avec permis de travail intégré.",
      icon: 'GraduationCap',
      duration: '3–6 mois',
      popular: true,
      overview:
        "Le permis d'études permet de suivre un programme dans un établissement d'enseignement désigné (EED) au Canada, de travailler jusqu'à 24 h/semaine pendant les études, puis d'obtenir un permis de travail post-diplôme (PTPD) menant à la résidence permanente.",
      eligibility: [
        "Lettre d'admission d'un établissement désigné (EED)",
        'Lettre d’attestation provinciale (LAP/PAL) selon la province',
        'Preuve financière : frais de scolarité + 20 635 CAD de subsistance',
        'Niveau académique cohérent avec le programme visé',
        'Intention de retour ou plan d’études crédible (lettre d’explication)',
      ],
      documents: [
        "Lettre d'admission de l'EED",
        'Lettre d’attestation provinciale (LAP)',
        'Relevés bancaires / attestation de virement des frais',
        'Diplômes et relevés de notes',
        'Lettre d’explication (plan d’études)',
        'Certificat de police et visite médicale',
        'Photos et passeport valide',
        'CAQ pour les études au Québec',
      ],
      governmentFees: [
        { label: "Permis d'études", amount: '150 CAD' },
        { label: 'Biométrie', amount: '85 CAD' },
        { label: 'CAQ (Québec uniquement)', amount: '128 CAD' },
      ],
      agencyNote:
        "Nous gérons l'admission (choix stratégique d'établissements à fort taux d'approbation), le CAQ le cas échéant, le dossier de permis d'études et la préparation à l'entrevue. Pack complet admission + visa disponible.",
      processingTime: '4–8 semaines (Cameroun/Afrique de l’Ouest, hors pics de rentrée)',
      steps: [
        { title: 'Choix du programme', text: 'Sélection stratégique : programme, ville, budget, perspectives de RP.' },
        { title: 'Admission', text: 'Candidature aux établissements désignés, obtention de la lettre.' },
        { title: 'CAQ / LAP', text: 'Attestation provinciale ou Certificat d’acceptation du Québec.' },
        { title: 'Dossier de permis', text: 'Preuves financières, lettre d’explication, dépôt en ligne.' },
        { title: 'Biométrie et décision', text: 'Empreintes au centre VFS, puis décision d’IRCC.' },
        { title: 'Départ', text: 'Préparation à l’arrivée : logement, assurance, inscription.' },
      ],
      advantages: [
        'Travail autorisé 24 h/semaine pendant les études',
        'Permis de travail post-diplôme jusqu’à 3 ans',
        'Passerelle directe vers la résidence permanente',
        'Conjoint éligible au permis de travail ouvert (programmes master/doctorat)',
      ],
      faq: [
        { q: 'Quel budget prévoir pour étudier au Canada ?', a: 'Entre 15 000 et 35 000 CAD/an de scolarité selon le programme, plus 20 635 CAD de preuve de subsistance. Notre calculateur de budget études vous donne un chiffrage précis par ville.' },
        { q: 'Puis-je immigrer définitivement après mes études ?', a: 'Oui, c’est la voie la plus fréquente : études → permis post-diplôme → expérience canadienne → Express Entry (catégorie CEC) ou PEQ au Québec.' },
        { q: 'Les refus sont-ils fréquents ?', a: 'Le taux de refus est réel pour les dossiers mal préparés (finances floues, plan d’études incohérent). Un dossier structuré avec lettre d’explication solide change tout.' },
      ],
      relatedTools: ['budget-etudes', 'simulateur', 'generateur-documents'],
    },
    {
      slug: 'visiteur',
      name: 'Visa visiteur',
      short: 'Visa de résident temporaire pour tourisme, famille ou affaires, valide jusqu’à 10 ans.',
      icon: 'Luggage',
      duration: '2–8 semaines',
      overview:
        "Le visa de résident temporaire (VRT) permet de visiter le Canada pour le tourisme, rendre visite à la famille ou faire des affaires. Il est souvent délivré pour une durée allant jusqu'à 10 ans avec entrées multiples, chaque séjour étant limité à 6 mois.",
      eligibility: [
        'Passeport valide',
        'Preuves de fonds suffisants pour le séjour',
        'Attaches solides dans le pays de résidence (emploi, famille, biens)',
        'Objet de visite clair (invitation, itinéraire, événement)',
        'Absence d’interdiction de territoire',
      ],
      documents: [
        'Passeport valide',
        'Relevés bancaires des 6 derniers mois',
        'Attestation d’emploi ou registre de commerce',
        'Lettre d’invitation (le cas échéant) et statut de l’hôte au Canada',
        'Itinéraire de voyage et réservation',
        'Photos conformes',
      ],
      governmentFees: [
        { label: 'Visa visiteur (par personne)', amount: '100 CAD' },
        { label: 'Biométrie', amount: '85 CAD' },
        { label: 'Famille (biométrie, max)', amount: '170 CAD' },
      ],
      agencyNote:
        'Nous structurons votre dossier pour démontrer vos attaches et la crédibilité du voyage — le point décisif sur lequel se jouent la majorité des refus.',
      processingTime: '2 à 8 semaines selon le bureau des visas',
      steps: [
        { title: 'Évaluation', text: 'Analyse des attaches et de l’historique de voyage.' },
        { title: 'Constitution du dossier', text: 'Preuves financières, invitation, lettre de motivation.' },
        { title: 'Dépôt en ligne', text: 'Soumission sur le portail IRCC.' },
        { title: 'Biométrie', text: 'Empreintes et photo au centre de réception des demandes.' },
        { title: 'Décision', text: 'Réception du visa apposé dans le passeport.' },
      ],
      advantages: [
        'Visa à entrées multiples jusqu’à 10 ans',
        'Idéal pour visites familiales, tourisme et prospection d’affaires',
        'Possibilité de super visa pour parents et grands-parents (5 ans par séjour)',
      ],
      faq: [
        { q: 'Pourquoi les visas visiteurs sont-ils souvent refusés ?', a: 'Principalement pour attaches jugées insuffisantes ou fonds non expliqués. Un dossier qui documente précisément votre situation professionnelle et familiale renverse la présomption.' },
        { q: 'Puis-je transformer mon visa visiteur en permis de travail ?', a: 'Dans certains cas, oui — des politiques temporaires le permettent avec une offre d’emploi validée (EIMT). À évaluer au cas par cas.' },
      ],
      relatedTools: ['estimateur-couts', 'generateur-documents', 'delais-traitement'],
    },
  ],
};

/* ────────────────────────────────────────────────────────────
   FRANCE
──────────────────────────────────────────────────────────── */

const france: Destination = {
  slug: 'france',
  name: 'France',
  flag: '🇫🇷',
  cc: 'fr',
  image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
  region: 'Europe',
  tagline: 'Étudier et s’installer au cœur de l’Europe francophone',
  overview:
    "Avec plus de 400 000 étudiants internationaux et des frais universitaires parmi les plus bas d'Europe, la France reste la première destination des étudiants africains francophones. Procédure Campus France maîtrisée, visas visiteurs et regroupement familial.",
  gradient: 'from-blue-600/20 via-white/10 to-red-500/20',
  facts: [
    { label: 'Étudiants étrangers', value: '400 000+' },
    { label: 'Frais universitaires', value: 'dès 3 879 €/an' },
    { label: 'Monnaie', value: 'Euro' },
    { label: 'Délai moyen', value: '2–4 mois' },
  ],
  benefits: [
    { icon: 'GraduationCap', title: 'Université quasi gratuite', text: 'Frais d’inscription parmi les plus bas du monde pour une éducation de rang mondial.' },
    { icon: 'Globe', title: 'Porte d’entrée Schengen', text: 'Circulez librement dans 27 pays européens avec votre titre de séjour.' },
    { icon: 'MessagesSquare', title: 'Zéro barrière de langue', text: 'Intégration immédiate pour les francophones, réseaux africains établis.' },
    { icon: 'Briefcase', title: 'Travail étudiant autorisé', text: '964 heures par an (60 % d’un temps plein) pendant les études.' },
  ],
  faq: [
    { q: 'Comment fonctionne Campus France ?', a: "La procédure « Études en France » est obligatoire dans la plupart des pays africains : création du dossier, entretien pédagogique, puis demande de visa. Nous préparons chaque étape, notamment l'entretien décisif." },
    { q: 'Quel budget pour étudier en France ?', a: 'Prévoyez 3 879 €/an en licence à l’université publique (2 895 € en master... selon exonérations), plus environ 615 €/mois de ressources à justifier (7 380 €/an).' },
    { q: 'Peut-on rester en France après les études ?', a: 'Oui : l’APS (attestation prolongée de séjour) d’un an pour chercher un emploi, puis changement de statut vers salarié ou passeport talent.' },
  ],
  featured: true,
  programs: [
    {
      slug: 'etudes',
      name: 'Visa étudiant',
      short: 'Procédure Campus France et visa long séjour pour étudier en France.',
      icon: 'GraduationCap',
      duration: '2–4 mois',
      popular: true,
      overview:
        "Le visa long séjour étudiant (VLS-TS) permet de suivre des études supérieures en France. La procédure passe par Campus France dans la plupart des pays africains : dossier pédagogique, entretien, puis visa. L'anticipation est la clé — les campagnes ouvrent dès octobre pour la rentrée suivante.",
      eligibility: [
        'Admission dans un établissement français (via « Études en France » ou directe)',
        'Justification de ressources : 615 €/mois soit 7 380 €/an',
        'Cohérence du projet d’études avec le parcours antérieur',
        'Niveau de français B2 recommandé (TCF/DELF) pour les formations francophones',
        'Assurance et hébergement pour les premiers mois',
      ],
      documents: [
        'Attestation d’admission ou de préinscription',
        'Dossier Campus France validé (EEF)',
        'Justificatifs de ressources (garant, virement bloqué, bourse)',
        'Diplômes et relevés de notes légalisés',
        'Test de français (TCF, DELF/DALF)',
        'Justificatif d’hébergement',
        'Passeport et photos conformes',
      ],
      governmentFees: [
        { label: 'Frais Campus France (selon pays)', amount: '50 000–75 000 FCFA' },
        { label: 'Visa long séjour', amount: '50 €' },
        { label: 'Validation VLS-TS (en France)', amount: '200 €' },
        { label: 'CVEC (contribution vie étudiante)', amount: '103 €' },
      ],
      agencyNote:
        "Accompagnement complet : stratégie d'orientation, dossier Campus France, préparation intensive à l'entretien pédagogique, demande de visa et préparation à l'arrivée (logement, banque, CAF).",
      processingTime: 'Campus France : 6–10 semaines · Visa : 2–4 semaines',
      steps: [
        { title: 'Orientation', text: 'Choix des formations selon profil, budget et débouchés.' },
        { title: 'Dossier Études en France', text: 'Candidatures via la plateforme EEF (dès novembre).' },
        { title: 'Entretien Campus France', text: 'Préparation intensive — l’étape qui fait la différence.' },
        { title: 'Acceptation', text: 'Réception des admissions et choix final.' },
        { title: 'Demande de visa', text: 'Dossier consulaire avec ressources et hébergement.' },
        { title: 'Arrivée en France', text: 'Validation du VLS-TS, CVEC, inscription définitive.' },
      ],
      advantages: [
        'Frais universitaires très faibles comparés au Canada ou à l’Australie',
        'Travail autorisé 964 h/an pendant les études',
        'APS d’un an après le diplôme pour trouver un emploi',
        'Accès aux aides au logement (CAF) même pour les étudiants étrangers',
      ],
      faq: [
        { q: 'Quand faut-il commencer la procédure ?', a: 'Dès octobre-novembre pour une rentrée en septembre. Les retardataires perdent une année — c’est l’erreur n°1.' },
        { q: 'Comment réussir l’entretien Campus France ?', a: 'Projet cohérent, connaissance précise des formations demandées et motivation structurée. Nous organisons des simulations d’entretien avec grille d’évaluation réelle.' },
        { q: 'Le garant doit-il être en France ?', a: 'Non. Un garant dans votre pays est accepté s’il justifie de revenus suffisants et réguliers. Une attestation de virement irrévocable est une alternative solide.' },
      ],
      relatedTools: ['budget-etudes', 'simulateur', 'generateur-documents'],
    },
    {
      slug: 'visiteur',
      name: 'Visa visiteur',
      short: 'Court séjour Schengen ou visa long séjour visiteur pour la France.',
      icon: 'Luggage',
      duration: '2–6 semaines',
      overview:
        "Le visa Schengen court séjour (type C) permet de séjourner jusqu'à 90 jours en France et dans l'espace Schengen. Pour les séjours de plus de 3 mois sans activité professionnelle, le visa long séjour visiteur (type D) est la solution.",
      eligibility: [
        'Passeport valide 3 mois après la date de retour',
        'Ressources suffisantes (65 €/jour avec hébergement, 120 €/jour sans)',
        'Assurance voyage couvrant 30 000 € minimum',
        'Justificatif d’hébergement (attestation d’accueil, réservation)',
        'Attaches dans le pays de résidence',
      ],
      documents: [
        'Formulaire de demande signé',
        'Passeport + photocopies',
        'Photos aux normes Schengen',
        'Assurance voyage (30 000 €)',
        'Réservation de vol aller-retour',
        'Attestation d’accueil ou réservation d’hôtel',
        'Relevés bancaires (3–6 mois)',
        'Attestation d’emploi ou de commerce',
      ],
      governmentFees: [
        { label: 'Visa Schengen court séjour', amount: '90 €' },
        { label: 'Enfant 6–12 ans', amount: '45 €' },
        { label: 'Frais de service (centre TLS/VFS)', amount: '~25 000 FCFA' },
      ],
      agencyNote:
        'Nous montons un dossier béton : cohérence de l’itinéraire, preuves financières lisibles et attaches documentées pour maximiser les chances d’approbation.',
      processingTime: '15 jours calendaires en moyenne (jusqu’à 45 en période de pointe)',
      steps: [
        { title: 'Préparation du dossier', text: 'Vérification des critères et checklist personnalisée.' },
        { title: 'Rendez-vous consulaire', text: 'Prise de RDV au centre TLScontact/VFS.' },
        { title: 'Dépôt et biométrie', text: 'Dépôt du dossier physique avec empreintes.' },
        { title: 'Décision', text: 'Retour du passeport avec vignette visa.' },
      ],
      advantages: [
        'Accès aux 27 pays de l’espace Schengen',
        'Visa de circulation possible (multi-entrées 1 à 5 ans) pour les voyageurs fréquents',
        'Procédure rapide comparée aux visas long séjour',
      ],
      faq: [
        { q: 'Combien de temps avant le voyage faut-il déposer ?', a: 'Au plus tôt 6 mois avant, idéalement 6–8 semaines avant le départ. Jamais moins de 15 jours ouvrés.' },
        { q: 'Un refus Schengen est-il définitif ?', a: 'Non. Vous pouvez redéposer avec un dossier corrigé, ou former un recours. L’essentiel est d’identifier le motif exact du refus.' },
      ],
      relatedTools: ['estimateur-couts', 'generateur-documents'],
    },
  ],
};

/* ────────────────────────────────────────────────────────────
   EUROPE (Schengen, Lituanie, Bulgarie, Russie, Biélorussie)
──────────────────────────────────────────────────────────── */

const schengen: Destination = {
  slug: 'schengen',
  name: 'Espace Schengen',
  flag: '🇪🇺',
  cc: 'eu',
  image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80',
  region: 'Europe',
  tagline: '27 pays, un seul visa',
  overview:
    "Le visa Schengen ouvre les portes de 27 pays européens pour des séjours jusqu'à 90 jours : tourisme, affaires, visites familiales ou événements. Un seul dossier, une liberté de circulation totale dans l'espace.",
  gradient: 'from-brand-700/20 via-brand-500/10 to-accent-300/20',
  facts: [
    { label: 'Pays couverts', value: '27' },
    { label: 'Durée max', value: '90 jours / 180' },
    { label: 'Assurance requise', value: '30 000 €' },
    { label: 'Délai moyen', value: '15 jours' },
  ],
  benefits: [
    { icon: 'Map', title: 'Liberté de circulation', text: 'Un visa unique pour voyager de Lisbonne à Helsinki sans contrôle aux frontières.' },
    { icon: 'Briefcase', title: 'Affaires et salons', text: 'Idéal pour les entrepreneurs : salons professionnels, rencontres partenaires, prospection.' },
    { icon: 'Repeat', title: 'Visa de circulation', text: 'Les voyageurs réguliers obtiennent des visas multi-entrées de 1 à 5 ans.' },
  ],
  faq: [
    { q: 'Auprès de quel pays déposer ma demande ?', a: 'Le pays de destination principale (durée la plus longue), ou le pays de première entrée si les durées sont égales. Se tromper de consulat est un motif de refus fréquent.' },
    { q: 'Quelles sont les causes de refus les plus courantes ?', a: 'Fonds insuffisants ou injustifiés, attaches faibles, itinéraire incohérent, assurance non conforme. Un dossier structuré évite 90 % de ces pièges.' },
  ],
  programs: [
    {
      slug: 'visiteur',
      name: 'Visa Schengen',
      short: 'Visa court séjour type C pour 27 pays européens.',
      icon: 'Globe',
      duration: '2–6 semaines',
      popular: true,
      overview:
        "Le visa uniforme Schengen (type C) autorise des séjours jusqu'à 90 jours sur toute période de 180 jours dans l'espace Schengen. Il se demande auprès du consulat du pays de destination principale.",
      eligibility: [
        'Passeport valide 3 mois après le retour, émis depuis moins de 10 ans',
        'Justification de l’objet du séjour (invitation, réservation, salon)',
        'Ressources suffisantes selon le barème du pays visé',
        'Assurance voyage 30 000 € valable dans tout Schengen',
        'Volonté de retour démontrée (attaches professionnelles et familiales)',
      ],
      documents: [
        'Formulaire Schengen signé',
        'Photos biométriques récentes',
        'Passeport + anciens visas',
        'Assurance voyage certifiée',
        'Réservations de vol et d’hébergement',
        'Relevés bancaires récents',
        'Documents professionnels (attestation, congés, registre de commerce)',
      ],
      governmentFees: [
        { label: 'Visa adulte', amount: '90 €' },
        { label: 'Enfant 6–12 ans', amount: '45 €' },
        { label: 'Frais de centre (selon prestataire)', amount: '20–40 €' },
      ],
      agencyNote:
        'Choix stratégique du consulat, montage complet du dossier et préparation aux questions du guichet. Analyse gratuite de vos refus antérieurs.',
      processingTime: '15 jours calendaires (jusqu’à 45 en haute saison)',
      steps: [
        { title: 'Analyse du projet', text: 'Choix du bon consulat et de la bonne catégorie de visa.' },
        { title: 'Montage du dossier', text: 'Checklist personnalisée et vérification de chaque pièce.' },
        { title: 'Dépôt', text: 'Rendez-vous au centre de visa avec biométrie.' },
        { title: 'Suivi et décision', text: 'Suivi du dossier jusqu’au retour du passeport.' },
      ],
      advantages: [
        'Un seul visa pour 27 pays',
        'Multi-entrées possible dès le premier visa avec un bon dossier',
        'Traitement rapide (15 jours en moyenne)',
      ],
      faq: [
        { q: 'Puis-je visiter plusieurs pays avec un seul visa ?', a: 'Oui, c’est le principe même du visa Schengen : libre circulation dans les 27 pays membres pendant la validité du visa.' },
        { q: 'L’assurance est-elle vraiment vérifiée ?', a: 'Systématiquement. Elle doit couvrir 30 000 € de frais médicaux et rapatriement, sur toute la durée du séjour et tout l’espace Schengen.' },
      ],
      relatedTools: ['estimateur-couts', 'generateur-documents', 'comparateur'],
    },
  ],
};

const lithuania: Destination = {
  slug: 'lituanie',
  name: 'Lituanie',
  flag: '🇱🇹',
  cc: 'lt',
  image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1600&q=80',
  region: 'Europe',
  tagline: 'Le hub tech balte qui recrute',
  overview:
    "Membre de l'UE et de l'espace Schengen, la Lituanie connaît une forte demande de main-d'œuvre : transport, industrie, BTP, tech. Les permis de travail y sont parmi les plus accessibles d'Europe, avec une voie vers la résidence de longue durée européenne.",
  gradient: 'from-yellow-400/20 via-green-500/10 to-red-500/20',
  facts: [
    { label: 'Membre UE', value: 'Depuis 2004' },
    { label: 'Salaire moyen', value: '~1 300 €/mois' },
    { label: 'Monnaie', value: 'Euro' },
    { label: 'Délai moyen', value: '2–4 mois' },
  ],
  benefits: [
    { icon: 'Factory', title: 'Forte demande de travailleurs', text: 'Transport, logistique, soudure, BTP : des quotas élevés et des employeurs qui sponsorisent.' },
    { icon: 'Globe', title: 'Résidence européenne', text: 'Après 5 ans, accès au statut de résident de longue durée UE.' },
    { icon: 'Banknote', title: 'Coût de la vie maîtrisé', text: 'Salaires en euros avec un coût de la vie bien inférieur à l’Europe de l’Ouest.' },
  ],
  faq: [
    { q: 'Faut-il parler lituanien ?', a: 'Non pour la plupart des emplois (transport, industrie) où l’anglais ou le russe suffisent. Le lituanien devient utile pour la résidence de longue durée.' },
    { q: 'Ma famille peut-elle me rejoindre ?', a: 'Oui, le regroupement familial est possible après obtention de votre permis de séjour, sous conditions de revenus et de logement.' },
  ],
  programs: [
    {
      slug: 'travail',
      name: 'Permis de travail',
      short: 'Emploi salarié en Lituanie avec permis de séjour temporaire.',
      icon: 'Briefcase',
      duration: '2–4 mois',
      popular: true,
      overview:
        "Le permis de séjour temporaire pour travail permet d'occuper un emploi chez un employeur lituanien. Pour les métiers en pénurie (chauffeurs internationaux, soudeurs, ouvriers qualifiés), la procédure est accélérée et le quota d'exemption de test du marché du travail s'applique.",
      eligibility: [
        'Offre d’emploi ou contrat d’un employeur lituanien',
        'Qualification ou expérience correspondant au poste',
        'Métier figurant idéalement sur la liste des professions en pénurie',
        'Casier judiciaire vierge',
        'Passeport valide',
      ],
      documents: [
        'Contrat ou promesse d’embauche',
        'Diplômes / certificats professionnels traduits',
        'Attestations d’expérience professionnelle',
        'Certificat de police apostillé',
        'Passeport valide',
        'Photos biométriques',
      ],
      governmentFees: [
        { label: 'Permis de séjour temporaire', amount: '160 €' },
        { label: 'Procédure accélérée', amount: '320 €' },
        { label: 'Visa national D (si requis)', amount: '140 €' },
      ],
      agencyNote:
        'Nous travaillons avec des employeurs lituaniens vérifiés et gérons la procédure de bout en bout : matching emploi, permis, visa D et installation.',
      processingTime: '1–3 mois selon procédure standard ou accélérée',
      steps: [
        { title: 'Matching emploi', text: 'Mise en relation avec un employeur selon votre métier.' },
        { title: 'Autorisation de travail', text: 'L’employeur initie la demande auprès des autorités.' },
        { title: 'Permis de séjour', text: 'Dépôt de la demande de permis temporaire (1–3 ans).' },
        { title: 'Visa D et voyage', text: 'Obtention du visa national et départ.' },
        { title: 'Installation', text: 'Enregistrement, carte de séjour biométrique, compte bancaire.' },
      ],
      advantages: [
        'Procédure parmi les plus rapides de l’UE',
        'Salaires en euros, charges sociales et protection européennes',
        'Espace Schengen accessible avec la carte de séjour',
        'Voie vers la résidence longue durée UE après 5 ans',
      ],
      faq: [
        { q: 'Quels métiers recrutent le plus ?', a: 'Chauffeurs poids lourds internationaux, soudeurs, charpentiers métalliques, ouvriers d’usine, personnel logistique. Les quotas 2026 restent élevés sur ces métiers.' },
        { q: 'Quel salaire espérer ?', a: 'De 1 000 à 1 800 € net selon le métier ; les chauffeurs internationaux dépassent souvent 2 000 € avec les indemnités de déplacement.' },
      ],
      relatedTools: ['simulateur', 'comparateur', 'estimateur-couts'],
    },
    {
      slug: 'etudes',
      name: 'Visa étudiant',
      short: 'Études supérieures en anglais à Vilnius ou Kaunas.',
      icon: 'GraduationCap',
      duration: '2–3 mois',
      overview:
        "Les universités lituaniennes proposent de nombreux programmes en anglais à des frais très compétitifs (2 000–5 000 €/an). Le permis de séjour étudiant autorise le travail à temps partiel et ouvre l'espace Schengen.",
      eligibility: [
        'Admission dans un établissement lituanien reconnu',
        'Preuve de ressources (~4 500 €/an)',
        'Niveau d’anglais B2 (ou de lituanien selon le programme)',
        'Assurance maladie',
      ],
      documents: [
        "Lettre d'admission",
        'Diplômes traduits et apostillés',
        'Preuves financières',
        'Certificat de police',
        'Passeport et photos',
      ],
      governmentFees: [
        { label: 'Permis de séjour études', amount: '160 €' },
        { label: 'Visa national D', amount: '140 €' },
      ],
      agencyNote:
        'Admission garantie dans nos universités partenaires pour les dossiers éligibles, avec accompagnement visa et installation.',
      processingTime: '2–3 mois admission comprise',
      steps: [
        { title: 'Admission', text: 'Candidature aux programmes anglophones partenaires.' },
        { title: 'Permis de séjour', text: 'Demande de permis temporaire étudiant.' },
        { title: 'Visa et départ', text: 'Visa D, logement étudiant et arrivée.' },
      ],
      advantages: [
        'Frais de scolarité parmi les plus bas de l’UE',
        'Travail étudiant autorisé (20 h/semaine)',
        'Diplômes européens reconnus partout',
      ],
      faq: [
        { q: 'Peut-on travailler après le diplôme ?', a: 'Oui : permis de recherche d’emploi de 12 mois après le diplôme, puis conversion en permis de travail.' },
      ],
      relatedTools: ['budget-etudes', 'simulateur'],
    },
  ],
};

const bulgaria: Destination = {
  slug: 'bulgarie',
  name: 'Bulgarie',
  flag: '🇧🇬',
  cc: 'bg',
  image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1600&q=80',
  region: 'Europe',
  tagline: 'La porte d’entrée accessible vers l’Union européenne',
  overview:
    "Membre de l'UE et de l'espace Schengen depuis 2025, la Bulgarie offre des permis de travail accessibles dans l'industrie, le tourisme et la construction, avec le coût de la vie le plus bas de l'Union européenne.",
  gradient: 'from-white/10 via-green-500/10 to-red-500/20',
  facts: [
    { label: 'Membre UE', value: 'Depuis 2007' },
    { label: 'Schengen', value: 'Depuis 2025' },
    { label: 'Coût de la vie', value: 'Le + bas de l’UE' },
    { label: 'Délai moyen', value: '2–4 mois' },
  ],
  benefits: [
    { icon: 'Construction', title: 'Secteurs qui recrutent', text: 'Construction, industrie, hôtellerie-restauration et agriculture cherchent des travailleurs.' },
    { icon: 'Banknote', title: 'Coût de la vie minimal', text: 'Le pouvoir d’achat le plus favorable de l’UE pour démarrer une vie européenne.' },
    { icon: 'Globe', title: 'Schengen intégré', text: 'La carte de séjour bulgare ouvre désormais la circulation Schengen.' },
  ],
  faq: [
    { q: 'La Bulgarie est-elle vraiment dans Schengen ?', a: 'Oui, la Bulgarie a pleinement intégré l’espace Schengen (frontières terrestres incluses depuis janvier 2025). Votre titre de séjour bulgare permet de circuler dans tout l’espace.' },
    { q: 'Quels salaires en Bulgarie ?', a: 'Le salaire moyen tourne autour de 1 000 €/mois brut, mais le coût de la vie très bas (loyers dès 200 €) rend l’équation favorable pour épargner ou lancer un projet.' },
  ],
  programs: [
    {
      slug: 'travail',
      name: 'Permis de travail',
      short: 'Permis unique travail + séjour pour un emploi en Bulgarie.',
      icon: 'Briefcase',
      duration: '2–4 mois',
      overview:
        "Le « permis unique » combine autorisation de travail et titre de séjour. L'employeur bulgare initie la demande auprès de l'Agence pour l'emploi ; une fois approuvée, vous obtenez un visa D puis votre carte de séjour.",
      eligibility: [
        'Contrat ou offre d’emploi d’un employeur bulgare',
        'Qualification ou expérience dans le métier visé',
        'Casier judiciaire vierge',
        'Passeport valide',
      ],
      documents: [
        'Contrat de travail',
        'Diplômes/certificats traduits et légalisés',
        'Certificat de police apostillé',
        'Certificat médical',
        'Passeport et photos',
      ],
      governmentFees: [
        { label: 'Permis unique', amount: '~110 €' },
        { label: 'Visa D', amount: '100 €' },
        { label: 'Carte de séjour', amount: '~55 €' },
      ],
      agencyNote:
        'Mise en relation avec des employeurs vérifiés et gestion complète de la procédure permis unique + visa D + installation.',
      processingTime: '2–3 mois en moyenne',
      steps: [
        { title: 'Offre d’emploi', text: 'Matching avec un employeur bulgare partenaire.' },
        { title: 'Permis unique', text: 'Demande initiée par l’employeur en Bulgarie.' },
        { title: 'Visa D', text: 'Demande au consulat avec le permis approuvé.' },
        { title: 'Carte de séjour', text: 'Enregistrement et biométrie à l’arrivée.' },
      ],
      advantages: [
        'Procédure simple pilotée par l’employeur',
        'Coût de la vie le plus bas de l’UE',
        'Accès Schengen avec le titre de séjour',
      ],
      faq: [
        { q: 'Ma famille peut-elle venir ?', a: 'Le regroupement familial est possible après l’obtention de votre titre de séjour, avec preuve de logement et de revenus.' },
      ],
      relatedTools: ['simulateur', 'comparateur'],
    },
  ],
};

const russia: Destination = {
  slug: 'russie',
  name: 'Russie',
  flag: '🇷🇺',
  cc: 'ru',
  image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1600&q=80',
  region: 'Europe',
  tagline: 'Études d’excellence à coût réduit',
  overview:
    "Les universités russes (médecine, ingénierie, aviation) offrent des formations réputées à des tarifs très inférieurs à l'Occident, avec des bourses gouvernementales dédiées aux étudiants africains et des programmes en anglais ou en russe.",
  gradient: 'from-white/10 via-brand-600/10 to-red-600/20',
  facts: [
    { label: 'Étudiants africains', value: '35 000+' },
    { label: 'Médecine', value: 'dès 3 500 $/an' },
    { label: 'Bourses d’État', value: 'Quota annuel' },
    { label: 'Délai moyen', value: '1–2 mois' },
  ],
  benefits: [
    { icon: 'Stethoscope', title: 'Médecine accessible', text: 'Facultés de médecine reconnues OMS à une fraction du coût occidental.' },
    { icon: 'GraduationCap', title: 'Bourses gouvernementales', text: 'Quotas de bourses d’État réservés aux pays africains chaque année.' },
    { icon: 'Landmark', title: 'Année préparatoire', text: 'Faculté préparatoire de russe intégrée pour démarrer sans le russe.' },
  ],
  faq: [
    { q: 'Faut-il parler russe ?', a: 'Non au départ : la faculté préparatoire (1 an) enseigne le russe intensif. De nombreux programmes existent aussi entièrement en anglais.' },
    { q: 'Les diplômes russes sont-ils reconnus ?', a: 'Les grandes universités russes figurent dans les classements mondiaux et les diplômes de médecine sont listés par l’OMS. La reconnaissance dépend ensuite de l’ordre professionnel de chaque pays.' },
  ],
  programs: [
    {
      slug: 'etudes',
      name: 'Visa étudiant',
      short: 'Études universitaires en Russie, médecine et ingénierie en tête.',
      icon: 'GraduationCap',
      duration: '1–2 mois',
      overview:
        "Le visa étudiant russe s'obtient sur invitation officielle de l'université. La procédure est rapide et le taux d'approbation élevé une fois l'admission acquise. Rentrées en septembre et février.",
      eligibility: [
        'Baccalauréat (ou équivalent) pour la licence',
        'Admission et invitation officielle d’une université russe',
        'Certificat médical et test VIH',
        'Fonds pour la première année',
      ],
      documents: [
        'Invitation officielle (émise par l’université)',
        'Diplômes traduits en russe et légalisés',
        'Certificat médical + test VIH',
        'Passeport valide 18 mois',
        'Photos',
      ],
      governmentFees: [
        { label: 'Visa étudiant', amount: '~50–160 $ selon pays' },
        { label: 'Invitation universitaire', amount: 'Incluse dans l’admission' },
      ],
      agencyNote:
        'Admission dans nos universités partenaires (médecine, ingénierie, aviation), invitation officielle, visa et accueil à l’aéroport inclus dans le pack.',
      processingTime: 'Admission : 2–4 semaines · Visa : 1–2 semaines',
      steps: [
        { title: 'Choix du programme', text: 'Université, ville, langue d’enseignement, budget.' },
        { title: 'Admission', text: 'Dossier académique et obtention de l’invitation.' },
        { title: 'Visa', text: 'Dépôt au consulat avec invitation officielle.' },
        { title: 'Départ et accueil', text: 'Accueil à l’aéroport, logement universitaire, enregistrement.' },
      ],
      advantages: [
        'Coût total études + vie parmi les plus bas du monde',
        'Logement universitaire dès 30 $/mois',
        'Universités techniques et médicales réputées',
      ],
      faq: [
        { q: 'Combien coûte la vie étudiante en Russie ?', a: 'Entre 200 et 400 $/mois logement compris dans la plupart des villes universitaires — Moscou et Saint-Pétersbourg étant plus chères.' },
      ],
      relatedTools: ['budget-etudes', 'simulateur'],
    },
    {
      slug: 'visiteur',
      name: 'Visa visiteur',
      short: 'Tourisme et affaires en Russie sur invitation.',
      icon: 'Luggage',
      duration: '2–4 semaines',
      overview:
        "Le visa touristique ou d'affaires russe s'obtient sur voucher touristique ou invitation d'entreprise. Procédure simple et rapide avec le bon support d'invitation.",
      eligibility: [
        'Passeport valide 6 mois après le retour',
        'Voucher touristique ou invitation d’affaires',
        'Assurance voyage valide en Russie',
      ],
      documents: [
        'Voucher/invitation',
        'Formulaire électronique signé',
        'Photo récente',
        'Assurance voyage',
        'Passeport',
      ],
      governmentFees: [
        { label: 'Visa touristique simple entrée', amount: '~50–90 $' },
        { label: 'Voucher touristique', amount: '20–40 $' },
      ],
      agencyNote: 'Obtention du voucher, formulaire et dépôt consulaire gérés de bout en bout.',
      processingTime: '4–10 jours ouvrés',
      steps: [
        { title: 'Voucher', text: 'Émission du voucher touristique officiel.' },
        { title: 'Dossier', text: 'Formulaire électronique et pièces.' },
        { title: 'Dépôt et décision', text: 'Dépôt consulaire et retrait du passeport.' },
      ],
      advantages: ['Procédure rapide', 'E-visa disponible pour certaines nationalités', 'Coût modéré'],
      faq: [
        { q: 'L’e-visa est-il disponible ?', a: 'La Russie déploie un e-visa unifié (16 jours) pour une liste de nationalités. Nous vérifions votre éligibilité avant de choisir la procédure.' },
      ],
      relatedTools: ['estimateur-couts'],
    },
  ],
};

const belarus: Destination = {
  slug: 'bielorussie',
  name: 'Biélorussie',
  flag: '🇧🇾',
  cc: 'by',
  image: 'https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=1600&q=80',
  region: 'Europe',
  tagline: 'Études techniques et médicales à petit budget',
  overview:
    "La Biélorussie propose des formations universitaires solides — médecine, ingénierie, agronomie — à des coûts d'études et de vie parmi les plus bas d'Europe, avec une procédure de visa simple sur invitation universitaire.",
  gradient: 'from-red-500/15 via-green-600/10 to-white/10',
  facts: [
    { label: 'Médecine', value: 'dès 3 000 $/an' },
    { label: 'Logement', value: 'dès 20 $/mois' },
    { label: 'Langues', value: 'RU · EN' },
    { label: 'Délai moyen', value: '1–2 mois' },
  ],
  benefits: [
    { icon: 'PiggyBank', title: 'Budget minimal', text: 'Le coût total études + vie le plus bas de notre catalogue.' },
    { icon: 'Stethoscope', title: 'Facultés de médecine', text: 'Universités médicales d’État listées OMS avec filières anglophones.' },
    { icon: 'GraduationCap', title: 'Admission simple', text: 'Pas de concours d’entrée pour la plupart des filières internationales.' },
  ],
  faq: [
    { q: 'Quel budget annuel total prévoir ?', a: 'Entre 4 000 et 6 000 $ par an tout compris (scolarité, logement universitaire, nourriture) selon la filière et la ville.' },
  ],
  programs: [
    {
      slug: 'etudes',
      name: 'Visa étudiant',
      short: 'Études universitaires en Biélorussie sur invitation officielle.',
      icon: 'GraduationCap',
      duration: '1–2 mois',
      overview:
        "Le visa étudiant biélorusse s'obtient sur invitation officielle du ministère via l'université. L'année préparatoire de russe est disponible, ainsi que des filières anglophones en médecine.",
      eligibility: [
        'Baccalauréat ou équivalent',
        'Admission avec invitation officielle',
        'Certificat médical',
        'Fonds pour la première année',
      ],
      documents: [
        'Invitation officielle',
        'Diplômes traduits et légalisés',
        'Certificat médical + test VIH',
        'Passeport valide 1 an minimum',
        'Photos',
      ],
      governmentFees: [
        { label: 'Visa étudiant', amount: '~60–150 $ selon consulat' },
      ],
      agencyNote: "Pack complet : admission, invitation, visa, billet et accueil à Minsk avec enregistrement à l'arrivée.",
      processingTime: 'Admission + invitation : 3–5 semaines · Visa : 1–2 semaines',
      steps: [
        { title: 'Admission', text: 'Choix de la filière et dossier académique.' },
        { title: 'Invitation', text: 'Émission de l’invitation officielle du ministère.' },
        { title: 'Visa et départ', text: 'Visa consulaire, voyage et accueil à Minsk.' },
      ],
      advantages: [
        'Le budget études le plus accessible d’Europe',
        'Filières médicales anglophones',
        'Logement universitaire quasi gratuit',
      ],
      faq: [
        { q: 'Y a-t-il un concours d’entrée ?', a: 'Non pour la plupart des filières internationales : l’admission se fait sur dossier (et entretien de langue pour les filières anglophones).' },
      ],
      relatedTools: ['budget-etudes', 'simulateur'],
    },
  ],
};

/* ────────────────────────────────────────────────────────────
   OCÉANIE
──────────────────────────────────────────────────────────── */

const australia: Destination = {
  slug: 'australie',
  name: 'Australie',
  flag: '🇦🇺',
  cc: 'au',
  image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80',
  region: 'Océanie',
  tagline: 'Salaires records et qualité de vie exceptionnelle',
  overview:
    "L'Australie combine salaires parmi les plus élevés du monde, universités du top 100 mondial et immigration à points structurée. Études, visas qualifiés et visas visiteurs pour bâtir un projet dans l'hémisphère sud.",
  gradient: 'from-accent-300/20 via-brand-500/10 to-brand-800/20',
  facts: [
    { label: 'Salaire minimum', value: '~24 AUD/h' },
    { label: 'Universités top 100', value: '9' },
    { label: 'Monnaie', value: 'Dollar AUD' },
    { label: 'Délai moyen', value: '1–9 mois' },
  ],
  benefits: [
    { icon: 'Banknote', title: 'Salaires records', text: 'Le salaire minimum le plus élevé du monde et des métiers qualifiés très bien payés.' },
    { icon: 'GraduationCap', title: 'Universités d’élite', text: 'Neuf universités dans le top 100 mondial et permis post-études généreux.' },
    { icon: 'Sun', title: 'Qualité de vie', text: 'Climat, sécurité et multiculturalisme : Melbourne et Sydney en tête des classements.' },
  ],
  faq: [
    { q: 'L’immigration australienne est-elle accessible depuis l’Afrique ?', a: 'Oui, mais elle est sélective : le système à points favorise les diplômés anglophones avec expérience. La voie études reste la plus réaliste pour la plupart des profils.' },
    { q: 'Quel niveau d’anglais faut-il ?', a: 'IELTS 6.0+ pour les études, 6.5–7.0 pour les visas qualifiés. PTE Academic est également accepté.' },
  ],
  programs: [
    {
      slug: 'etudes',
      name: 'Visa étudiant (500)',
      short: 'Études en Australie avec travail autorisé 48 h/quinzaine.',
      icon: 'GraduationCap',
      duration: '1–4 mois',
      popular: true,
      overview:
        "Le Subclass 500 permet d'étudier à temps plein dans un établissement australien enregistré (CRICOS), de travailler 48 h par quinzaine et d'accéder ensuite au Temporary Graduate visa (485) pour rester travailler après le diplôme.",
      eligibility: [
        'Admission confirmée (CoE) dans un établissement CRICOS',
        'Exigence GS (Genuine Student) : projet d’études crédible',
        'IELTS 6.0+ ou équivalent PTE/TOEFL',
        'Preuve financière : ~29 710 AUD/an de frais de vie + scolarité',
        'Assurance santé étudiante (OSHC) obligatoire',
      ],
      documents: [
        'Confirmation of Enrolment (CoE)',
        'Déclaration Genuine Student (GS)',
        'Test d’anglais valide',
        'Preuves financières solides',
        'OSHC (assurance santé)',
        'Passeport et actes d’état civil',
      ],
      governmentFees: [
        { label: 'Visa étudiant 500', amount: '1 600 AUD' },
        { label: 'OSHC (par an, indicatif)', amount: '~650 AUD' },
      ],
      agencyNote:
        "Admission dans les universités et colleges partenaires, rédaction de la déclaration GS (l'étape décisive) et montage financier du dossier.",
      processingTime: '1–4 mois selon l’établissement et le secteur',
      steps: [
        { title: 'Orientation', text: 'Choix programme/ville selon budget et objectif post-études.' },
        { title: 'Admission et CoE', text: 'Candidature, offre, paiement du dépôt, émission du CoE.' },
        { title: 'Dossier GS', text: 'Déclaration Genuine Student et preuves financières.' },
        { title: 'Dépôt du visa', text: 'Demande en ligne avec biométrie et santé.' },
        { title: 'Départ', text: 'Logement, OSHC active, arrivée en Australie.' },
      ],
      advantages: [
        'Travail autorisé 48 h/quinzaine (salaire min ~24 AUD/h)',
        'Temporary Graduate visa jusqu’à 3 ans après le diplôme',
        'Conjoint autorisé à travailler (selon niveau d’études)',
      ],
      faq: [
        { q: 'Le critère « Genuine Student » est-il difficile ?', a: 'C’est le point de refus n°1. Il faut démontrer une logique études-carrière solide et des finances limpides. Notre accompagnement se concentre précisément là-dessus.' },
      ],
      relatedTools: ['budget-etudes', 'simulateur', 'estimateur-couts'],
    },
    {
      slug: 'travail',
      name: 'Visas qualifiés (189/190/482)',
      short: 'Immigration à points et visas sponsorisés par employeur.',
      icon: 'Briefcase',
      duration: '6–12 mois',
      overview:
        "L'Australie sélectionne les travailleurs qualifiés via un système à points (Skilled Independent 189, Skilled Nominated 190) et des visas sponsorisés (Skills in Demand 482). Les métiers en pénurie — santé, ingénierie, BTP, tech — offrent les meilleures chances.",
      eligibility: [
        'Métier sur la liste des professions éligibles (skilled occupation lists)',
        'Évaluation de compétences (skills assessment) réussie',
        'Moins de 45 ans pour les visas à points',
        'Anglais competent à proficient (IELTS 6.0–7.0+)',
        '65 points minimum au test à points',
      ],
      documents: [
        'Skills assessment de l’organisme compétent',
        'Tests d’anglais',
        'Diplômes et références professionnelles',
        'EOI (Expression of Interest) dans SkillSelect',
        'Certificats de police et visites médicales',
      ],
      governmentFees: [
        { label: 'Visa 189/190 (demandeur principal)', amount: '~4 765 AUD' },
        { label: 'Skills assessment (selon organisme)', amount: '500–1 200 AUD' },
        { label: 'Conjoint', amount: '~2 385 AUD' },
      ],
      agencyNote:
        'Évaluation stratégique du score, choix de l’État de nomination, skills assessment et dossier complet avec nos partenaires agents migratoires enregistrés (MARA).',
      processingTime: '6–12 mois selon le visa et l’occupation',
      steps: [
        { title: 'Évaluation à points', text: 'Calcul du score et stratégie (189, 190, 482).' },
        { title: 'Skills assessment', text: 'Validation des qualifications par l’organisme du métier.' },
        { title: 'EOI SkillSelect', text: 'Dépôt de l’expression d’intérêt.' },
        { title: 'Invitation et visa', text: 'Invitation, dossier complet, santé et police.' },
      ],
      advantages: [
        'Résidence permanente directe (189/190)',
        'Salaires parmi les plus élevés du monde',
        'Medicare et école publique pour la famille',
      ],
      faq: [
        { q: 'Quel score faut-il réellement ?', a: 'Le minimum légal est 65 points, mais les invitations partent souvent à 80–90 pour le 189. La nomination d’un État (190) ou un employeur sponsor (482) sont des stratégies plus réalistes.' },
      ],
      relatedTools: ['simulateur', 'comparateur', 'delais-traitement'],
    },
    {
      slug: 'visiteur',
      name: 'Visa visiteur (600)',
      short: 'Tourisme, famille et affaires jusqu’à 12 mois.',
      icon: 'Luggage',
      duration: '2–6 semaines',
      overview:
        "Le Subclass 600 couvre tourisme, visites familiales et voyages d'affaires, pour des séjours de 3, 6 ou 12 mois. La demande est entièrement en ligne.",
      eligibility: [
        'Fonds suffisants pour le séjour',
        'Genuine visitor : intention de visite temporaire crédible',
        'Attaches solides dans le pays de résidence',
        'Assurance voyage recommandée',
      ],
      documents: [
        'Passeport',
        'Relevés bancaires',
        'Attestation d’emploi / registre de commerce',
        'Invitation (stream famille)',
        'Itinéraire de voyage',
      ],
      governmentFees: [
        { label: 'Visa visiteur 600', amount: '~200 AUD' },
      ],
      agencyNote: 'Montage du dossier « genuine visitor » avec preuves d’attaches — la clé de l’approbation.',
      processingTime: '2–6 semaines selon le stream',
      steps: [
        { title: 'Dossier', text: 'Preuves financières et attaches.' },
        { title: 'Dépôt ImmiAccount', text: 'Demande en ligne avec pièces.' },
        { title: 'Décision', text: 'Visa électronique lié au passeport.' },
      ],
      advantages: ['Demande 100 % en ligne', 'Séjours jusqu’à 12 mois', 'Multi-entrées possible'],
      faq: [
        { q: 'Faut-il un visa transit ?', a: 'Selon votre itinéraire, un transit par un autre pays peut nécessiter un visa distinct. Nous vérifions l’itinéraire complet avant le dépôt.' },
      ],
      relatedTools: ['estimateur-couts', 'generateur-documents'],
    },
  ],
};

const newZealand: Destination = {
  slug: 'nouvelle-zelande',
  name: 'Nouvelle-Zélande',
  flag: '🇳🇿',
  cc: 'nz',
  image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
  region: 'Océanie',
  tagline: 'Travailler et vivre dans le pays le plus paisible du monde',
  overview:
    "La Nouvelle-Zélande recrute activement dans la santé, la construction, l'agriculture et la tech via le Accredited Employer Work Visa et le Skilled Migrant Category. Un cadre de vie exceptionnel et une voie claire vers la résidence.",
  gradient: 'from-navy-800/30 via-brand-600/10 to-emerald-500/20',
  facts: [
    { label: 'Métiers en pénurie', value: 'Green List' },
    { label: 'Salaire médian', value: '~31 NZD/h' },
    { label: 'Monnaie', value: 'Dollar NZD' },
    { label: 'Délai moyen', value: '1–6 mois' },
  ],
  benefits: [
    { icon: 'Leaf', title: 'Green List', text: 'Les métiers en pénurie (santé, BTP, ingénierie) mènent directement à la résidence.' },
    { icon: 'Handshake', title: 'Employeurs accrédités', text: 'Le système AEWV sécurise les travailleurs : employeurs vérifiés par l’État.' },
    { icon: 'Mountain', title: 'Équilibre de vie', text: 'Régulièrement classée parmi les pays les plus sûrs et paisibles du monde.' },
  ],
  faq: [
    { q: 'Quels métiers recrutent en Nouvelle-Zélande ?', a: 'Infirmiers, médecins, ingénieurs civils, électriciens, charpentiers, soudeurs, développeurs : la Green List est mise à jour régulièrement et les métiers Tier 1 mènent à la résidence directe.' },
  ],
  programs: [
    {
      slug: 'travail',
      name: 'Visa de travail (AEWV)',
      short: 'Accredited Employer Work Visa — travailler pour un employeur accrédité.',
      icon: 'Briefcase',
      duration: '1–3 mois',
      popular: true,
      overview:
        "L'AEWV permet de travailler jusqu'à 5 ans pour un employeur accrédité par Immigration New Zealand. Les métiers de la Green List offrent des voies accélérées vers la résidence (Straight to Residence ou Work to Residence).",
      eligibility: [
        'Offre d’emploi d’un employeur accrédité',
        'Job check validé pour le poste',
        'Qualifications/expérience correspondant au poste',
        'Anglais fonctionnel (selon le métier)',
        'Bonne santé et casier vierge',
      ],
      documents: [
        'Offre d’emploi et job check',
        'CV et références professionnelles',
        'Diplômes et certificats',
        'Certificat de police',
        'Visite médicale (eMedical)',
        'Passeport',
      ],
      governmentFees: [
        { label: 'AEWV', amount: '~1 540 NZD' },
        { label: 'Visa résidence SMC (le cas échéant)', amount: '~6 450 NZD' },
      ],
      agencyNote:
        'Mise en relation avec des employeurs accrédités dans les métiers en demande et gestion du dossier AEWV avec nos conseillers licenciés (IAA).',
      processingTime: '4–8 semaines une fois le job check validé',
      steps: [
        { title: 'Matching emploi', text: 'Candidature auprès d’employeurs accrédités.' },
        { title: 'Job check', text: 'L’employeur valide le poste auprès d’INZ.' },
        { title: 'Demande AEWV', text: 'Dossier personnel : santé, police, qualifications.' },
        { title: 'Départ', text: 'Visa accordé, installation et prise de poste.' },
      ],
      advantages: [
        'Jusqu’à 5 ans de visa selon le métier',
        'Green List Tier 1 : résidence directe possible',
        'Famille : conjoint avec permis de travail ouvert selon conditions',
      ],
      faq: [
        { q: 'Comment trouver un employeur accrédité ?', a: 'La liste officielle est publique. Nous ciblons les employeurs accrédités qui recrutent réellement à l’international dans votre métier — c’est notre valeur ajoutée.' },
      ],
      relatedTools: ['simulateur', 'comparateur', 'delais-traitement'],
    },
    {
      slug: 'etudes',
      name: 'Visa étudiant',
      short: 'Études en Nouvelle-Zélande avec travail à temps partiel.',
      icon: 'GraduationCap',
      duration: '1–3 mois',
      overview:
        "Le Fee Paying Student Visa permet d'étudier à temps plein avec 20 h de travail par semaine. Les diplômés accèdent au Post Study Work Visa jusqu'à 3 ans selon le niveau du diplôme.",
      eligibility: [
        'Offre de place d’un établissement agréé',
        'Preuve financière : 20 000 NZD/an + scolarité',
        'Anglais IELTS 5.5–6.5 selon le programme',
        'Assurance santé et billet retour (ou fonds équivalents)',
      ],
      documents: [
        'Offre de place (Offer of Place)',
        'Preuves financières',
        'Test d’anglais',
        'Certificat de police et médical',
        'Passeport',
      ],
      governmentFees: [
        { label: 'Visa étudiant', amount: '~750 NZD' },
      ],
      agencyNote: 'Admission dans nos établissements partenaires et montage complet du dossier financier.',
      processingTime: '4–8 semaines',
      steps: [
        { title: 'Admission', text: 'Choix du programme et offre de place.' },
        { title: 'Dossier visa', text: 'Finances, santé, assurance.' },
        { title: 'Départ', text: 'Visa accordé et installation.' },
      ],
      advantages: [
        'Travail 20 h/semaine pendant les études',
        'Post Study Work Visa jusqu’à 3 ans',
        'Cadre d’études sûr et anglophone',
      ],
      faq: [
        { q: 'Quel budget prévoir ?', a: 'Comptez 20 000 NZD/an de frais de vie exigés par l’immigration, plus 22 000–35 000 NZD de scolarité selon le programme.' },
      ],
      relatedTools: ['budget-etudes', 'simulateur'],
    },
  ],
};

export const destinations: Destination[] = [
  canada,
  france,
  schengen,
  lithuania,
  bulgaria,
  russia,
  belarus,
  australia,
  newZealand,
];

export const regions = ['Amérique du Nord', 'Europe', 'Océanie'] as const;

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);

export const allPrograms = destinations.flatMap((d) =>
  d.programs.map((p) => ({ destination: d, program: p }))
);

export const popularPrograms = allPrograms.filter(({ program }) => program.popular);
