const company = {
  name: 'Les Façadiers du Nord',
  tagline: 'Experts en ravalement et isolation de façades',
  phone: '03 20 00 00 00',
  email: 'contact@les-facadiers-du-nord.fr',
  address: 'Lille et métropole lilloise'
};

const services = [
  {
    title: 'Ravalement de façade',
    description: 'Nettoyage, traitement et remise en état complète de vos façades pour une protection durable.',
    icon: '🧱'
  },
  {
    title: 'Isolation thermique par l’extérieur',
    description: 'Améliorez le confort de votre maison et réduisez vos dépenses énergétiques.',
    icon: '🌡️'
  },
  {
    title: 'Peinture et finitions',
    description: 'Application de revêtements performants avec finitions soignées et modernes.',
    icon: '🎨'
  },
  {
    title: 'Traitement anti-humidité',
    description: 'Solutions professionnelles contre l’infiltration, les fissures et l’usure prématurée.',
    icon: '💧'
  }
];

const projects = [
  {
    title: 'Maison de ville – Lille',
    category: 'Ravalement complet',
    description: 'Réfection de façade brique + traitement hydrofuge pour un rendu lumineux et durable.',
    image: '/images/project-1.svg'
  },
  {
    title: 'Pavillon – Marcq-en-Barœul',
    category: 'ITE + finitions',
    description: 'Isolation thermique extérieure et nouvelle teinte de façade pour valoriser le bien.',
    image: '/images/project-2.svg'
  },
  {
    title: 'Immeuble – Roubaix',
    category: 'Réparation + peinture',
    description: 'Réparation des fissures, réenduisage et protection anti-humidité longue durée.',
    image: '/images/project-3.svg'
  }
];

const stats = [
  { value: '15+', label: 'années d’expérience' },
  { value: '1200+', label: 'chantiers réalisés' },
  { value: '98%', label: 'clients satisfaits' }
];

module.exports = { company, services, projects, stats };
