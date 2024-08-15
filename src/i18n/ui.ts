// cSpell:enable
// cSpell:language en,es

import SpainFlag from "@/components/flags/SpainFlag.astro";
import USAFlag from "@/components/flags/USAFlag.astro";

export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof USAFlag }
> = {
	en: {
		code: 'en',
		name: 'English',
		flag: USAFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
		'nav.education': 'Education',
		'nav.skills': 'Skills'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
		'nav.education': 'Educación',
		'nav.skills': 'Habilidades'
  },
} as const;