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
  title: 'Une façade transformée. Une maison valorisée.',
  intro:
    'Démonstration UI orientée image : animations fluides, galerie visuelle et présentation claire de nos prestations en façade, toiture et isolation.',
  cta: 'Lancer mon projet'
};

const companySection = {
  title: 'Une équipe terrain pour vos rénovations extérieures',
  summary:
    'Nous intervenons sur vos extérieurs avec une méthode précise : diagnostic, préparation, traitement, finition. Le tout avec un rendu propre et durable.',
  highlights: ['15+ ans d’expérience', 'Interventions Oise (60) & Val d’Oise (95)', 'Devis gratuit et conseils personnalisés']
};

const serviceGroups = [
  {
    id: 'facades',
    title: 'Travaux sur façades',
    items: [
      { title: 'Nettoyage de façades', description: 'Suppression des salissures, mousses et micro-organismes pour retrouver un support sain.' },
      { title: 'Rejointoiement de façades', description: 'Réfection des joints pour renforcer l’étanchéité et l’esthétique de la maçonnerie.' },
      { title: 'Ravalement de façades', description: 'Traitement complet et finition durable pour protéger et valoriser votre bien.' }
    ]
  },
  {
    id: 'toiture',
    title: 'Travaux sur toiture',
    items: [
      { title: 'Nettoyage et démoussage', description: 'Entretien approfondi de la couverture pour prolonger sa durée de vie.' },
      { title: 'Rénovation de couverture', description: 'Remise en état ciblée des éléments abîmés ou vieillissants.' },
      { title: 'Travaux de zinguerie', description: 'Gestion des eaux pluviales et finitions métalliques durables.' }
    ]
  },
  {
    id: 'isolations',
    title: 'Travaux d’isolations',
    items: [
      { title: 'Isolations par l’extérieur', description: 'Amélioration du confort thermique et réduction des consommations.' },
      { title: 'Isolations sous toiture', description: 'Optimisation des performances été/hiver avec traitement des ponts thermiques.' }
    ]
  }
];

const projects = [
  {
    title: 'Rénovation de façade',
    category: 'Beauvais',
    description: 'Nettoyage, reprise et finition minérale.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Réfection de toiture',
    category: 'Oise',
    description: 'Traitement complet et remise en état.',
    image:
      'https://images.unsplash.com/photo-1632718545026-4d5b9dd342ad?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Isolation extérieure',
    category: 'Val d’Oise',
    description: 'Performance énergétique + nouveau rendu.',
    image:
      'https://images.unsplash.com/photo-1599619585752-c3edb42a414c?auto=format&fit=crop&w=1200&q=80'
  }
];

const photos = [
  'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80'
];

const illustrations = [
  { image: '/images/illu-1.svg', alt: 'Illustration façades' },
  { image: '/images/illu-2.svg', alt: 'Illustration toiture' },
  { image: '/images/illu-3.svg', alt: 'Illustration isolation' }
];

const processSteps = [
  { title: '01 • Diagnostic', text: 'Analyse de l’état de vos façades/toitures et recommandations techniques.' },
  { title: '02 • Préparation', text: 'Protection du chantier, nettoyage et préparation des supports.' },
  { title: '03 • Intervention', text: 'Mise en œuvre des travaux selon vos priorités de performance et d’esthétique.' },
  { title: '04 • Finition', text: 'Contrôle qualité et rendu final soigné.' }
];

const testimonials = [
  { author: 'Imen', date: 'Mai 2022', quote: 'Travail professionnel, très bonne qualité.' },
  { author: 'Salah', date: 'Août 2022', quote: 'Entreprise très professionnelle, chantier propre, je recommande vivement.' }
];

module.exports = {
  company,
  hero,
  companySection,
  serviceGroups,
  projects,
  photos,
  illustrations,
  processSteps,
  testimonials
};
