export interface Testimonial {
  name: string;
  origin: string;
  destination: string;
  /** Code pays flagcdn */
  cc: string;
  program: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sandrine K.',
    origin: 'Douala, Cameroun',
    destination: 'Montréal, Canada',
    cc: 'ca',
    program: 'Arrima — Travailleurs qualifiés',
    quote:
      "De la simulation en ligne jusqu'à mon CSQ, Switch Point a piloté chaque étape. Leur préparation au test de français m'a fait gagner les points décisifs. Je vis à Montréal depuis 8 mois.",
    rating: 5,
  },
  {
    name: 'Yann T.',
    origin: 'Yaoundé, Cameroun',
    destination: 'Toulouse, France',
    cc: 'fr',
    program: 'Visa étudiant — Campus France',
    quote:
      "L'entretien Campus France me terrorisait. Après trois simulations avec l'équipe, je l'ai passé avec confiance. Admis en master d'ingénierie avec visa obtenu en 12 jours.",
    rating: 5,
  },
  {
    name: 'Fatou D.',
    origin: 'Dakar, Sénégal',
    destination: 'Vilnius, Lituanie',
    cc: 'lt',
    program: 'Permis de travail',
    quote:
      "Je ne connaissais rien à la Lituanie. Switch Point m'a trouvé un employeur vérifié, géré mon permis et même mon logement. Salaire en euros, contrat sécurisé — je recommande.",
    rating: 5,
  },
  {
    name: 'Christian M.',
    origin: 'Abidjan, Côte d’Ivoire',
    destination: 'Sydney, Australie',
    cc: 'au',
    program: 'Visa étudiant 500',
    quote:
      "Ma déclaration Genuine Student a été travaillée mot par mot. Visa accordé du premier coup alors que deux amis avaient été refusés en solo. Le professionnalisme change tout.",
    rating: 5,
  },
  {
    name: 'Aïcha B.',
    origin: 'Douala, Cameroun',
    destination: 'Toronto, Canada',
    cc: 'ca',
    program: 'Express Entry — Volet francophone',
    quote:
      "Score CRS optimisé de 397 à 471 en huit mois grâce à leur stratégie TEF + EDE. Invitation reçue au tirage francophone. Résidente permanente aujourd'hui.",
    rating: 5,
  },
  {
    name: 'Emmanuel N.',
    origin: 'Libreville, Gabon',
    destination: 'Auckland, Nouvelle-Zélande',
    cc: 'nz',
    program: 'AEWV — Électricien',
    quote:
      "Employeur accrédité trouvé en 6 semaines, job check validé, visa en 5 semaines. Ma famille me rejoint le mois prochain. Merci Switch Point.",
    rating: 5,
  },
];
