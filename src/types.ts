import type { JSX } from 'astro/jsx-runtime';

type Technology = {
  name: string;
  icon: JSX.Element;
}

type AdditionalInfo = {
  text: string;
  externalLink: string
}

export interface JobData{
  logo: JSX.Element;
  workstation: string;
  name: string;
  startDate: string;
  endDate?: string;
  description: string;
  additionalInfo?: AdditionalInfo;
  technologies: Technology[]
}