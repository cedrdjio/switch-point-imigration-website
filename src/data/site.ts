/**
 * Configuration globale du site — modifier ici les coordonnées réelles.
 */
export const SITE = {
  name: 'Switch Point Immigration',
  shortName: 'Switch Point',
  tagline: "Votre passerelle vers l'international",
  description:
    "Switch Point Immigration accompagne étudiants, travailleurs et familles africaines vers le Canada, la France, l'Europe et l'Océanie. Simulateurs d'éligibilité, accompagnement expert et suivi personnalisé.",
  url: 'https://switchpoint-immigration.com',
  locale: 'fr',
  phone: '+237 6 55 00 00 00',
  phoneDisplay: '+237 655 00 00 00',
  whatsapp: '237655000000',
  email: 'contact@switchpoint-immigration.com',
  address: 'Douala, Cameroun',
  socials: {
    facebook: 'https://facebook.com/switchpointimmigration',
    instagram: 'https://instagram.com/switchpointimmigration',
    linkedin: 'https://linkedin.com/company/switchpointimmigration',
    tiktok: 'https://tiktok.com/@switchpointimmigration',
  },
  bookingUrl: '/rendez-vous',
} as const;

export const whatsappLink = (message = 'Bonjour Switch Point, je souhaite être accompagné(e) dans mon projet d’immigration.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
