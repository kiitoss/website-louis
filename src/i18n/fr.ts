import type { Translations } from './index'

export default {
  nav: {
    about: 'Accueil',
    research: 'Recherche',
    teaching: 'Enseignement',
  },
  lang: {
    en: 'English',
    fr: 'Français',
  },
  site: {
    mail: 'louis.chataignier@math.univ-toulouse.fr',
    phone: '+33 6 22 65 15 78',
  },
  home: {
    welcome: 'Bienvenue',
    job: 'Doctorant en mathématiques',
    localisation: 'Institut de Mathématiques de Toulouse',
    introduction:
      "Je suis doctorant à l'Institut de Mathématiques de Toulouse sous la supervision de {{supervisor1}} et {{supervisor2}}. Mes recherches portent sur la théorie des probabilités, plus précisément les processus de branchement tels que le mouvement brownien branchant et les marches aléatoires branchantes.",
    downloadCv: 'Télécharger le CV',
  },
  research: {
    heading: 'Recherche',
    description: 'Publications et prépublications en théorie des probabilités.',
  },
  teaching: {
    heading: 'Enseignement',
    description: "Activités d'enseignement à l'Institut de Mathématiques de Toulouse.",
    roles: {
      instructor: 'Chargé de cours',
      ta: "Assistant d'enseignement",
    },
  },
} satisfies Translations
