import { ReactNode } from 'react';

export interface ScheduleSlot {
  time: string;
  class: string;
  trainer: string;
  difficulty?: 'Bajo' | 'Medio' | 'Alto';
}

export interface DailySchedule {
  [key: string]: ScheduleSlot[];
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: number;
  features: PricingFeature[];
  highlight?: boolean;
}

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

export enum NavLink {
  HOME = 'home',
  FACILITIES = 'facilities',
  CLASSES = 'classes',
  PRICING = 'pricing',
  CONTACT = 'contact'
}