import 'server-only';

interface DictionaryModule {
  default: Record<string, string>;
}

type Locale = 'en' | 'es';

const dictionaries: Record<Locale, () => Promise<DictionaryModule>> = {
  en: () => import('../dictionaries/en.json').then((module) => module as DictionaryModule),
  es: () => import('../dictionaries/es.json').then((module) => module as DictionaryModule),
}

export const getDictionary = async (locale: Locale): Promise<Record<string, string>> => (await dictionaries[locale]()).default;