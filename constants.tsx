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

export const MODULES_DATA = {
  fitness: {
    title: "Fitness",
    description: "Desarrolla tu fuerza, resistencia y potencia con nuestro programa integral de fitness. Diseñado para maximizar tu rendimiento físico mediante técnicas avanzadas de entrenamiento y biomecánica aplicada.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    color: "brand-blue",
    professor: {
      name: "Roberto",
      role: "Coordinador de Fitness",
      qualities: [
        "Experto en Biomecánica Aplicada",
        "Especialista en Hipertrofia y Fuerza",
        "Planificación Deportiva de Alto Rendimiento",
        "Entrenador Personal Certificado"
      ],
      image: "/roberto.png"
    },
    curriculum: [
      "Fundamentos del entrenamiento de fuerza",
      "Biomecánica de los ejercicios multiarticulares",
      "Programación del entrenamiento para hipertrofia",
      "Nutrición deportiva básica",
      "Prevención de lesiones en sala de fitness"
    ]
  },
  postural: {
    title: "Postural",
    description: "Recupera el equilibrio natural de tu cuerpo. Nuestro módulo postural combina técnicas de Pilates, Yoga y reeducación funcional para mejorar tu alineación, flexibilidad y salud de espalda.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    color: "lime-400",
    professor: {
      name: "Antonio",
      role: "Especialista en Salud Postural",
      qualities: [
        "Máster en Reeducación Postural Global",
        "Instructor Avanzado de Pilates Suelo y Máquinas",
        "Especialista en Patologías de Espalda",
        "Enfoque Holístico de la Salud"
      ],
      image: "/antonio.png"
    },
    curriculum: [
      "Anatomía funcional de la columna vertebral",
      "Principios del método Pilates",
      "Técnicas de respiración y relajación",
      "Corrección de patrones posturales erróneos",
      "Estiramientos analíticos y globales"
    ]
  },
  musicales: {
    title: "Musicales",
    description: "¡Muévete al ritmo de la música! Este módulo fusiona ejercicio físico y expresión corporal. Mejora tu coordinación, capacidad cardiovascular y diviértete con nuestras coreografías dinámicas.",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    color: "pink-500",
    professor: {
      name: "Vanessa",
      role: "Directora de Actividades Dirigidas",
      qualities: [
        "Coreógrafa con Trayectoria Internacional",
        "Especialista en Zumba, Step y Aeróbic",
        "Dinamismo y Energía Contagiosa",
        "Pedagogía del Ritmo y la Danza"
      ],
      image: "/vanessa.png"
    },
    curriculum: [
      "Estructura musical y conteo",
      "Metodología de enseñanza coreográfica",
      "Diseño de sesiones de Zumba y Aeróbic",
      "Expresión corporal y comunicación no verbal",
      "Liderazgo y motivación de grupos"
    ]
  },
  hidrocinesia: {
    title: "Hidrocinesia",
    description: "Descubre el poder terapéutico del agua. La hidrocinesia utiliza las propiedades del medio acuático para la rehabilitación, el entrenamiento de bajo impacto y la mejora de la condición física general.",
    image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    color: "cyan-400",
    professor: {
      name: "Merce",
      role: "Experta en Terapia Acuática",
      qualities: [
        "Especialista en Hidroterapia y Salud",
        "Instructora de Natación Terapéutica",
        "Rehabilitación de Lesiones en Medio Acuático",
        "Adaptación de Ejercicios para Poblaciones Especiales"
      ],
      image: "/merce.png"
    },
    curriculum: [
      "Propiedades físicas del agua y sus efectos fisiológicos",
      "Técnicas de flotación y propulsión",
      "Diseño de programas de Aquafitness",
      "Hidrocinesia aplicada a patologías",
      "Seguridad y salvamento acuático"
    ]
  }
};