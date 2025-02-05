import 'server-only'

export interface Dictionary {
  title: string
  description: string
  links: {
    timeline: string
    projects: string
    contact: string
    blog: string
  }
  welcome: {
    presentation: string
    a: string
    developer: string
    description: string
  }
}


const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  es: () => import('../dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'es' | 'en') =>
  dictionaries[locale]()