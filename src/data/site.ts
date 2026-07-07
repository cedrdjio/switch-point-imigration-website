/**
 * Configuration globale du site — modifier ici les coordonnées réelles.
 */
export const SITE = {
  name: 'SwitchPoint Immigration Agency',
  shortName: 'SwitchPoint',
  tagline: "Votre passerelle vers l'international",
  description:
    "SwitchPoint Immigration Agency accompagne étudiants, travailleurs et familles africaines vers le Canada, la France, l'Europe et l'Océanie. Simulateurs d'éligibilité, accompagnement expert et suivi personnalisé depuis Douala.",
  url: 'https://switchpoint-immigration.com',
  locale: 'fr',
  phone: '+237688715318',
  phoneDisplay: '+237 688 715 318',
  whatsapp: '237688715318',
  email: 'contact@switchpoint-immigration.com',
  address: 'Tradex Logpom, Douala, Cameroun',
  hours: 'Lundi – Samedi : 08h00 à 17h30',
  socials: {
    facebook: 'https://facebook.com/switchpointimmigration',
    instagram: 'https://instagram.com/switchpointimmigration',
    linkedin: 'https://linkedin.com/company/switchpointimmigration',
    tiktok: 'https://tiktok.com/@switchpointimmigration',
  },
  bookingUrl: '/rendez-vous',
} as const;

export const whatsappLink = (message = 'Bonjour SwitchPoint, je souhaite réserver une consultation pour mon projet d’immigration.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
