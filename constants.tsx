import React from 'react';
import { Dumbbell, Droplets, Users, Trophy } from 'lucide-react';
import { DailySchedule, FeatureItem, PricingPlan } from './types';

// Updated Schedule based on user request:
// Fitness -> Roberto A.
// Musicales -> Vanessa R.
// Postural -> Antonio D.
// Hidrocinesia -> Merce J.

export const SCHEDULE_DATA: DailySchedule = {
  "Lunes": [
    { time: "09:00", class: "Postural", trainer: "Antonio D.", difficulty: "Bajo" },
    { time: "11:00", class: "Fitness", trainer: "Roberto A.", difficulty: "Alto" },
    { time: "18:00", class: "Musicales", trainer: "Vanessa R.", difficulty: "Medio" },
    { time: "20:00", class: "Fitness", trainer: "Roberto A.", difficulty: "Alto" },
  ],
  "Martes": [
    { time: "09:30", class: "Fitness", trainer: "Roberto A.", difficulty: "Medio" },
    { time: "11:00", class: "Musicales", trainer: "Vanessa R.", difficulty: "Medio" },
    { time: "12:30", class: "Hidrocinesia", trainer: "Merce J.", difficulty: "Bajo" },
    { time: "17:00", class: "Postural", trainer: "Antonio D.", difficulty: "Bajo" },
    { time: "19:00", class: "Fitness", trainer: "Roberto A.", difficulty: "Alto" },
  ],
  "Miércoles": [
    { time: "09:00", class: "Musicales", trainer: "Vanessa R.", difficulty: "Alto" },
    { time: "11:00", class: "Postural", trainer: "Antonio D.", difficulty: "Bajo" },
    { time: "18:00", class: "Fitness", trainer: "Roberto A.", difficulty: "Alto" },
    { time: "20:00", class: "Musicales", trainer: "Vanessa R.", difficulty: "Alto" },
  ],
  "Jueves": [
    { time: "09:00", class: "Fitness", trainer: "Roberto A.", difficulty: "Medio" },
    { time: "11:00", class: "Fitness", trainer: "Roberto A.", difficulty: "Alto" },
    { time: "16:00", class: "Hidrocinesia", trainer: "Merce J.", difficulty: "Bajo" },
    { time: "17:30", class: "Postural", trainer: "Antonio D.", difficulty: "Bajo" },
    { time: "19:30", class: "Musicales", trainer: "Vanessa R.", difficulty: "Medio" },
  ],
  "Viernes": [
    { time: "10:00", class: "Postural", trainer: "Antonio D.", difficulty: "Bajo" },
    { time: "12:00", class: "Musicales", trainer: "Vanessa R.", difficulty: "Medio" },
    { time: "17:00", class: "Fitness", trainer: "Roberto A.", difficulty: "Alto" },
    { time: "19:00", class: "Postural", trainer: "Antonio D.", difficulty: "Bajo" },
  ]
};

export const FEATURES_DATA: FeatureItem[] = [
  { 
    icon: <Dumbbell className="h-8 w-8 text-brand-blue" />, 
    title: "Aula de Fitness", 
    desc: "Equipamiento profesional para el desarrollo de la fuerza y acondicionamiento físico general." 
  },
  { 
    icon: <Users className="h-8 w-8 text-brand-blue" />, 
    title: "Actividades Dirigidas", 
    desc: "Sesiones grupales de Musicales, Postural, Hidrocinesia y Fitness dirigidas por nuestros especialistas." 
  },
  { 
    icon: <Trophy className="h-8 w-8 text-brand-blue" />, 
    title: "Formación de Calidad", 
    desc: "Un entorno educativo de alto rendimiento en el Ciclo Superior de Acondicionamiento Físico." 
  },
  { 
    icon: <Droplets className="h-8 w-8 text-brand-blue" />, 
    title: "Zona de Agua", 
    desc: "Acceso a instalaciones complementarias para la recuperación y actividades acuáticas como Hidrocinesia." 
  },
];

export const PRICING_DATA: PricingPlan[] = [
  {
    name: "Abonado",
    price: 20,
    features: [
      { text: "Acceso Mañanas", included: true },
      { text: "Aula de Fitness", included: true },
      { text: "Vestuarios y Duchas", included: true },
      { text: "Clases Dirigidas", included: false },
      { text: "Tutoría Personal", included: false },
    ]
  },
  {
    name: "CSAF Total",
    price: 35,
    highlight: true,
    features: [
      { text: "Acceso Completo", included: true },
      { text: "Todas las instalaciones", included: true },
      { text: "Clases Ilimitadas", included: true },
      { text: "Seguimiento Técnico", included: true },
      { text: "Participación en Eventos", included: true },
    ]
  },
  {
    name: "Externo",
    price: 50,
    features: [
      { text: "Acceso Limitado", included: true },
      { text: "Uso de Pista", included: true },
      { text: "Servicio de Asesoramiento", included: true },
      { text: "Seguro Deportivo", included: true },
      { text: "Taquilla", included: true },
    ]
  }
];