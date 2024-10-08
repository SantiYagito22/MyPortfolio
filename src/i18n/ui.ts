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
		'nav.skills': 'Skills',
		'acc.languageButton': 'Change Language',
		'acc.switchDark': 'Change To Dark Mode',
		'acc.switchLight': 'Change To Light Mode',
		'acc.photo': 'Santiago\'s Photo',
    'acc.gitHubBut': 'Access To My GitHub Profile',
		'acc.linkedInBut': 'Access To My LinkedIn Profile',
    'acc.whatsAppBut': 'Contact me on WhatsApp',
		'acc.itchIoBut': 'Access To My Itch.io Profile',
		'acc.sendEmail': 'Send Email',
		'acc.copyEmail': 'Copy Email',
		'acc.downloadCV': 'Download CV',
		'acc.ProjectGitHub': 'Access To The Project Repository',
		'acc.ProjectPreview': 'Project Preview',
		'acc.certificateBut': 'Open Certificate',
		'acc.moreInfo': 'See More Information',
		'nav.mainCertificates': 'Main Certificates',
		'nav.others': 'Others',
		'nav.technicalSkills': "Technical Skills",
		'nav.softSkills': 'Soft Skills',
		'nav.languages': 'Languages'
	},
  es: {
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
		'nav.education': 'Educación',
		'nav.skills': 'Habilidades',
		'acc.languageButton': 'Cambiar Idioma',
		'acc.switchDark': 'Cambiar A Modo Oscuro',
		'acc.switchLight': 'Cambiar A Modo Claro',
		'acc.photo': 'Foto de Santiago',
    'acc.gitHubBut': 'Acceder A Mi Perfil De GitHub',
		'acc.linkedInBut': 'Acceder A Mi Perfil De LinkedIn',
    'acc.whatsAppBut': 'Contactarme Por WhatsApp',
		'acc.itchIoBut': 'Acceder A Mi Perfil De Itch.io',
		'acc.sendEmail': 'Enviar email',
		'acc.copyEmail': 'Copiar email',
		'acc.downloadCV': 'Descargar CV',
		'acc.ProjectGitHub': 'Acceder Al Repositorio Del Proyecto',
		'acc.ProjectPreview': 'Vista Previa Del Proyecto',
		'acc.certificateBut': 'Abrir Certificado',
		'acc.moreInfo': 'Ver Más Información',
		'nav.mainCertificates': 'Certificados Principales',
		'nav.others': 'Otros',
		'nav.technicalSkills': "Habilidades Técnicas",
		'nav.softSkills': 'Habilidades Blandas',
		'nav.languages': 'Idiomas'
  },
} as const;