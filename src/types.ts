import type { JSX } from 'astro/jsx-runtime';

type Technology = {
  name: string;
  icon: JSX.Element;
  colors: string;
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
  technologies: Technology[];
}

export interface ProjectData{
  image: ImageMetadata;
  name: string;
  description: string;
  technologies: Technology[];
  github?: string;
  preview?: string;
  importance: number; //1 highest 99 lowest
}