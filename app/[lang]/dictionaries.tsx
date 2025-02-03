import 'server-only';

export interface DictionaryInterface {

  title: string;
  description: string;
  links: {
    timeline: string;
    projects: string;
    contact: string;
    blog: string;
  };
  welcome: {
    presentation: string;
    a: string;
    developer: string;
    description: string;
  };

}

export type Locale = 'en' | 'es';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  es: () => import('../dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]