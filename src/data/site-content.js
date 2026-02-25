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

const navigation = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'societe', label: 'Société' },
  { id: 'facades', label: 'Travaux sur façades' },
  { id: 'toiture', label: 'Travaux sur toiture' },
  { id: 'isolations', label: 'Travaux d’isolations' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'avis', label: 'Avis' },
  { id: 'contact', label: 'Contact' }
];

const hero = {
  title: 'Travaux sur façades et toiture avec Les Façadiers du Nord à Beauvais',
  intro:
    'Vous êtes à la recherche de professionnels pour vos travaux sur la façade ou sur la toiture de votre habitation dans l’Oise ou le Val d’Oise ? Les Façadiers du Nord, situés à Beauvais, effectuent vos travaux sur façade et toiture avec une réelle expérience de plus de 15 ans.',
  cta: 'Prenez contact'
};

const companySection = {
  title: 'Les Façadiers du Nord, professionnels de la façade et de la toiture à Beauvais',
  paragraphs: [
    'Les Façadiers du Nord vous proposent sérieux, expérience et compétences de façadiers et couvreurs pour la réalisation de vos travaux de façade et couverture dans toute l’Oise (60) et le Val d’Oise (95).',
    'L’entreprise doit son succès au professionnalisme de sa démarche et à ses engagements auprès de ses clients : travail soigné, respect des délais, conseils techniques et solutions durables.',
    'Nos équipes d’artisans façadiers, couvreurs et peintres sont formées pour intervenir sur des chantiers de construction, extension et rénovation.'
  ]
};

const serviceGroups = [
  {
    id: 'facades',
    title: 'Travaux sur façades',
    items: [
      {
        title: 'Nettoyage de façades',
        description:
          'Démoussage, nettoyage, réparation des fissures, pose de toile de renfort, application d’hydrofuge et de revêtements professionnels pour embellir durablement vos murs extérieurs.'
      },
      {
        title: 'Rejointoiement de façades',
        description:
          'Réfection des joints pour restaurer l’étanchéité et l’esthétique de la maçonnerie, en conservant le caractère du bâti.'
      },
      {
        title: 'Ravalement de façades',
        description:
          'Ravalement complet avec traitement, imperméabilisation et finition peinture pour protéger votre maison contre les agressions climatiques.'
      }
    ]
  },
  {
    id: 'toiture',
    title: 'Travaux sur toiture',
    items: [
      {
        title: 'Nettoyage et démoussage de toiture',
        description:
          'Élimination des mousses, lichens et salissures pour prolonger la durée de vie de votre couverture et préserver ses performances.'
      },
      {
        title: 'Rénovation de couverture',
        description:
          'Interventions sur tuiles, éléments endommagés et remise en état globale pour sécuriser et valoriser votre toiture.'
      },
      {
        title: 'Travaux de zinguerie',
        description:
          'Pose et reprise des éléments de zinguerie (gouttières, descentes, finitions) pour une évacuation des eaux efficace.'
      }
    ]
  },
  {
    id: 'isolations',
    title: 'Travaux d’isolations',
    items: [
      {
        title: 'Isolations par l’extérieur',
        description:
          'Isolation thermique par l’extérieur pour améliorer le confort, réduire les pertes énergétiques et rénover l’aspect de la façade.'
      },
      {
        title: 'Isolations sous toiture',
        description:
          'Isolation sous toiture (dont solutions de type sarking) pour limiter les ponts thermiques et optimiser la performance été/hiver.'
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

const testimonials = [
  { author: 'Imen', date: 'Mai 2022', quote: 'Travail professionnel très bonne qualité.' },
  { author: 'Salah', date: 'Août 2022', quote: 'Entreprise très professionnelle, travail soigné et propre... je recommande vivement.' }
];

module.exports = {
  company,
  navigation,
  hero,
  companySection,
  serviceGroups,
  projects,
  testimonials
};
