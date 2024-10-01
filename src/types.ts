import type { JSX } from 'astro/jsx-runtime';

export interface Technology {
  name: string;
  icon: JSX.Element;
  colors: string;
}

export interface AdditionalInfo {
  text: string;
  externalLink: string
}
 
export interface Language{
  flag: JSX.Element;
  level: string;
}

export interface SoftSkill{
  icon: JSX.Element;
  skill: string; 
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

export interface EducationData {
  image: ImageMetadata;
  name: string;
  certificate?: string;
  additionalInfo?: {
    specialty: string;
    university: string;
    date: string;
    average: number;
    honor: string;
  }
}

export enum EducationEnum{
  SUMMARY = "summary",
  CERTIFICATE = "certificate"
}
