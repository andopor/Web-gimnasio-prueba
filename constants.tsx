import React from 'react';
import { Dumbbell, Droplets, Users, Trophy } from 'lucide-react';
import { DailySchedule, FeatureItem, PricingPlan } from './types';

export const SCHEDULE_DATA: DailySchedule = {
  "Lunes": [
    { time: "07:00", class: "CrossFit Morning", trainer: "Alex R.", difficulty: "Alto" },
    { time: "09:00", class: "Hatha Yoga", trainer: "Elena M.", difficulty: "Bajo" },
    { time: "18:00", class: "HIIT Intensity", trainer: "Marc S.", difficulty: "Alto" },
    { time: "20:00", class: "Boxeo Técnico", trainer: "Javi G.", difficulty: "Medio" },
  ],
  "Martes": [
    { time: "07:00", class: "Cycling Pro", trainer: "Sarah L.", difficulty: "Alto" },
    { time: "10:00", class: "Pilates Reformer", trainer: "Elena M.", difficulty: "Bajo" },
    { time: "18:00", class: "Powerlifting", trainer: "Alex R.", difficulty: "Alto" },
    { time: "19:30", class: "Zumba Energy", trainer: "Carla D.", difficulty: "Medio" },
  ],
  "Miércoles": [
    { time: "07:00", class: "CrossFit Morning", trainer: "Alex R.", difficulty: "Alto" },
    { time: "09:00", class: "Vinyasa Yoga", trainer: "Elena M.", difficulty: "Bajo" },
    { time: "17:00", class: "Calistenia", trainer: "Marc S.", difficulty: "Alto" },
    { time: "20:00", class: "Muay Thai", trainer: "Javi G.", difficulty: "Alto" },
  ],
  "Jueves": [
    { time: "08:00", class: "Body Pump", trainer: "Sarah L.", difficulty: "Medio" },
    { time: "11:00", class: "Aquagym", trainer: "Carla D.", difficulty: "Bajo" },
    { time: "18:30", class: "HIIT Intensity", trainer: "Marc S.", difficulty: "Alto" },
    { time: "20:30", class: "Meditación", trainer: "Elena M.", difficulty: "Bajo" },
  ],
  "Viernes": [
    { time: "07:00", class: "Iron Circuit", trainer: "Alex R.", difficulty: "Alto" },
    { time: "16:00", class: "Open Gym", trainer: "Staff", difficulty: "Bajo" },
    { time: "18:00", class: "Friday Dance", trainer: "Carla D.", difficulty: "Medio" },
    { time: "19:30", class: "Yoga Sunset", trainer: "Elena M.", difficulty: "Bajo" },
  ]
};

export const FEATURES_DATA: FeatureItem[] = [
  { 
    icon: <Dumbbell className="h-8 w-8 text-lime-400" />, 
    title: "Sala de Musculación", 
    desc: "Equipamiento Hammer Strength de última generación y zona de peso libre olímpico para maximizar tu fuerza." 
  },
  { 
    icon: <Droplets className="h-8 w-8 text-lime-400" />, 
    title: "Spa & Wellness", 
    desc: "Recupera tu cuerpo en nuestra sauna finlandesa, baño turco y zona de crioterapia post-entreno." 
  },
  { 
    icon: <Users className="h-8 w-8 text-lime-400" />, 
    title: "Entrenamiento Personal", 
    desc: "Planes a medida diseñados por expertos en fisiología deportiva para alcanzar tus metas específicas." 
  },
  { 
    icon: <Trophy className="h-8 w-8 text-lime-400" />, 
    title: "Zona Funcional", 
    desc: "100m² de césped artificial premium equipados para trineo, kettlebells, TRX y entrenamientos de alta intensidad." 
  },
];

export const PRICING_DATA: PricingPlan[] = [
  {
    name: "Básico",
    price: 29,
    features: [
      { text: "Acceso Mañanas (06-14h)", included: true },
      { text: "Sala de Musculación", included: true },
      { text: "Vestuarios y Duchas", included: true },
      { text: "Clases Dirigidas", included: false },
      { text: "Acceso a Spa", included: false },
    ]
  },
  {
    name: "Unlimited",
    price: 49,
    highlight: true,
    features: [
      { text: "Acceso 24/7", included: true },
      { text: "Todas las instalaciones", included: true },
      { text: "Clases Ilimitadas", included: true },
      { text: "1 Sesión PT Mensual", included: true },
      { text: "Acceso a Spa", included: false },
    ]
  },
  {
    name: "Elite",
    price: 89,
    features: [
      { text: "Todo lo incluido en Unlimited", included: true },
      { text: "Acceso Spa & Sauna", included: true },
      { text: "Servicio de Nutrición", included: true },
      { text: "Toalla y Taquilla Fija", included: true },
      { text: "Parking Gratuito", included: true },
    ]
  }
];