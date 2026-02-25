const company = {
  name: 'Les Façadiers du Nord',
  legalName: 'LES FAÇADIERS DU NORD',
  tagline: 'Travaux sur façades et toiture à Beauvais dans l’Oise',
  phone: '03 60 36 80 35',
  email: 'contact@les-facadiers-du-nord.fr',
  addressLines: ['36 avenue Salvador Allende', 'Village Mykonos - Bâtiment H', '60000 Beauvais'],
  zones: ['Beauvais', 'Creil', 'Chambly', 'Méru', 'Gisors', 'Oise (60)', 'Val d’Oise (95)'],
  yearsExperience: '15+'
};

const hero = {
  title: 'Façades, toiture et isolation : un rendu propre, durable et soigné.',
  intro:
    'Depuis Beauvais, nos équipes interviennent dans l’Oise et le Val d’Oise pour rénover et protéger votre maison avec des prestations complètes.',
  cta: 'Demander un devis'
};

const companySection = {
  title: 'Une entreprise locale, expérimentée et réactive',
  summary:
    'Les Façadiers du Nord accompagnent vos projets de rénovation avec une méthode claire : diagnostic, conseils, exécution soignée et finitions durables.',
  highlights: ['15+ ans d’expérience', 'Interventions Oise (60) & Val d’Oise (95)', 'Équipe façadiers, couvreurs et peintres']
};

const serviceGroups = [
  {
    id: 'facades',
    title: 'Travaux sur façades',
    items: [
      {
        title: 'Nettoyage de façades',
        description:
          'Démoussage, nettoyage, réparation des fissures, pose de toile de renfort, application d’hydrofuge et de revêtements professionnels.'
      },
      {
        title: 'Rejointoiement de façades',
        description: 'Réfection des joints pour restaurer l’étanchéité et l’esthétique de la maçonnerie.'
      },
      {
        title: 'Ravalement de façades',
        description: 'Ravalement complet avec traitement, imperméabilisation et finition peinture.'
      }
    ]
  },
  {
    id: 'toiture',
    title: 'Travaux sur toiture',
    items: [
      {
        title: 'Nettoyage et démoussage de toiture',
        description: 'Élimination des mousses, lichens et salissures pour prolonger la durée de vie de votre couverture.'
      },
      {
        title: 'Rénovation de couverture',
        description: 'Remise en état globale des éléments de couverture pour sécuriser votre toiture.'
      },
      {
        title: 'Travaux de zinguerie',
        description: 'Pose et reprise des éléments de zinguerie pour une évacuation des eaux efficace.'
      }
    ]
  },
  {
    id: 'isolations',
    title: 'Travaux d’isolations',
    items: [
      {
        title: 'Isolations par l’extérieur',
        description: 'Isolation thermique par l’extérieur pour améliorer le confort et réduire les pertes énergétiques.'
      },
      {
        title: 'Isolations sous toiture',
        description: 'Isolation sous toiture pour limiter les ponts thermiques et améliorer la performance globale.'
      }
    ]
  }
];

const projects = [
  {
    title: 'Rénovation de façade – secteur Beauvais',
    category: 'Façades',
    description: 'Nettoyage, traitement et finition pour redonner éclat et protection durable à la façade.',
    image: '/images/project-1.svg'
  },
  {
    title: 'Réfection de toiture – Oise',
    category: 'Toiture',
    description: 'Démoussage et rénovation de couverture pour sécuriser l’enveloppe du bâtiment.',
    image: '/images/project-2.svg'
  },
  {
    title: 'Isolation extérieure – Val d’Oise',
    category: 'Isolation',
    description: 'Amélioration thermique globale avec finitions soignées et rendu moderne.',
    image: '/images/project-3.svg'
  }
];

const illustrations = [
  { image: '/images/illu-1.svg', alt: 'Façade rénovée et propre' },
  { image: '/images/illu-2.svg', alt: 'Travaux de toiture' },
  { image: '/images/illu-3.svg', alt: 'Nettoyage façade avant/après' },
  { image: '/images/illu-4.svg', alt: 'Isolation extérieure' },
  { image: '/images/illu-5.svg', alt: 'Intervention couverture' },
  { image: '/images/illu-6.svg', alt: 'Finitions façade' }
];

const testimonials = [
  { author: 'Imen', date: 'Mai 2022', quote: 'Travail professionnel très bonne qualité.' },
  { author: 'Salah', date: 'Août 2022', quote: 'Entreprise très professionnelle, travail soigné et propre... je recommande vivement.' }
];

module.exports = {
  company,
  hero,
  companySection,
  serviceGroups,
  projects,
  illustrations,
  testimonials
};
