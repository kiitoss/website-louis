import en from './en'
import fr from './fr'

export const defaultLang = 'fr' as const

export const languages = {
  en: 'English',
  fr: 'Français',
} as const

export type Lang = keyof typeof languages

const translations = { en, fr } satisfies Record<Lang, typeof en>

export type Translations = typeof en

export function useTranslations(lang: string | null | undefined): Translations {
  const locale = (lang && lang in translations ? lang : defaultLang) as Lang
  return translations[locale]
}
