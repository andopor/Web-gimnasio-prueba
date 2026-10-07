export interface CurriculumSource {
  label: string;
  url: string;
}

export interface ModuleInfo {
  slug: string;
  code: string;
  course: 1 | 2;
  shortTitle: string;
  title: string;
  description: string;
  curriculum: string[];
  sources: CurriculumSource[];
  note?: string;
}

export const TITLE_SOURCE: CurriculumSource = {
  label: 'Xunta de Galicia · Relación oficial de módulos del ciclo',
  url: 'https://www.edu.xunta.gal/fp/ciclo/D3AFD000200',
};
const TECHNICAL_SOURCE: CurriculumSource = {
  label: 'BOE · Real Decreto 651/2017 · Anexo I: módulos profesionales',
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2017-7981',
};
const COMMON_SOURCE: CurriculumSource = {
  label: 'BOE · Real Decreto 659/2023 · Currículos de módulos transversales',
  url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-16889',
};
const OPTIONAL_SOURCE: CurriculumSource = {
  label: 'DOG · Resolución del 1 de julio de 2025 · Módulos optativos',
  url: 'https://www.xunta.gal/dog/Publicados/2025/20250710/AnuncioG0761-010725-0002_es.html',
};

// Spanish summaries of official curriculum outcomes; no centre-specific programmes or biographies.
export const MODULES: ModuleInfo[] = [
  {
    slug: 'acuaticas', code: 'MP1151', course: 1, shortTitle: 'Acondicionamiento en el agua',
    title: 'Acondicionamiento físico en el agua',
    description: 'Programación y dirección de actividades de acondicionamiento en el medio acuático.',
    curriculum: ['Diseño de sesiones y ejercicios acuáticos.', 'Seguridad y evaluación de las actividades.'],
    sources: [TITLE_SOURCE, TECHNICAL_SOURCE],
  },
  {
    slug: 'musicales', code: 'MP1149', course: 1, shortTitle: 'Musicales · actividades básicas',
    title: 'Actividades básicas de acondicionamiento físico con soporte musical',
    description: 'Programación de sesiones grupales y diseño de coreografías básicas.',
    curriculum: ['Selección del soporte musical.', 'Dirección y adaptación de sesiones.'],
    sources: [TITLE_SOURCE, TECHNICAL_SOURCE],
  },
  {
    slug: 'postural', code: 'MP1153', course: 1, shortTitle: 'Control postural',
    title: 'Control postural, bienestar y mantenimiento funcional',
    description: 'Diseño de actividades para el control postural y mantenimiento funcional.',
    curriculum: ['Conciencia corporal, fortalecimiento y flexibilidad.', 'Adaptación y evaluación de sesiones.'],
    sources: [TITLE_SOURCE, TECHNICAL_SOURCE],
  },
  {
    slug: 'ingles-profesional', code: 'MP0179', course: 1, shortTitle: 'Inglés profesional',
    title: 'Inglés profesional (GS)',
    description: 'Comunicación oral y escrita en inglés en situaciones profesionales.',
    curriculum: ['Comprensión de mensajes y documentación.', 'Producción de textos e interacción oral.'],
    sources: [TITLE_SOURCE, COMMON_SOURCE],
  },
  {
    slug: 'empleabilidad-1', code: 'MP1709', course: 1, shortTitle: 'Empleabilidad I',
    title: 'Itinerario personal para la empleabilidad I',
    description: 'Orientación profesional, prevención de riesgos y conocimiento de la relación laboral.',
    curriculum: ['Seguridad y salud en el trabajo.', 'Autoconocimiento y desarrollo profesional.'],
    sources: [TITLE_SOURCE, COMMON_SOURCE],
  },
  {
    slug: 'sostenibilidad', code: 'MP1708', course: 1, shortTitle: 'Sostenibilidad',
    title: 'Sostenibilidad aplicada al sistema productivo',
    description: 'Análisis del impacto ambiental y social de la actividad profesional.',
    curriculum: ['Objetivos de desarrollo sostenible.', 'Economía circular y prácticas sostenibles.'],
    sources: [TITLE_SOURCE, COMMON_SOURCE],
  },
  {
    slug: 'valoracion', code: 'MP1136', course: 1, shortTitle: 'Valoración e intervención en accidentes',
    title: 'Valoración de la condición física e intervención en accidentes',
    description: 'Evaluación de la condición física y atención inicial ante accidentes.',
    curriculum: ['Pruebas y registro de resultados.', 'Primeros auxilios y respuesta inicial.'],
    sources: [TITLE_SOURCE, TECHNICAL_SOURCE],
  },
  {
    slug: 'musicales-especializadas', code: 'MP1150', course: 2, shortTitle: 'Musicales · actividades especializadas',
    title: 'Actividades especializadas de acondicionamiento físico con soporte musical',
    description: 'Programación y dirección de modalidades especializadas de ejercicio con música.',
    curriculum: ['Coreografías y uso de máquinas cíclicas.', 'Adaptación de intensidad y dificultad.'],
    sources: [TITLE_SOURCE, TECHNICAL_SOURCE],
  },
  {
    slug: 'competencias-profesionales', code: 'MO0004', course: 2, shortTitle: 'Competencias profesionales',
    title: 'Profundización en las competencias profesionales (GS)',
    description: 'Módulo optativo que complementa las competencias profesionales del ciclo.',
    curriculum: ['Ampliación de competencias del perfil profesional.', 'Contenidos concretados por el centro.'],
    note: 'Los contenidos específicos los concreta el centro conforme a la normativa.',
    sources: [TITLE_SOURCE, OPTIONAL_SOURCE],
  },
  {
    slug: 'digitalizacion', code: 'MP1665', course: 2, shortTitle: 'Digitalización',
    title: 'Digitalización aplicada a los sectores productivos (GS)',
    description: 'Uso de tecnologías digitales y análisis de su aplicación profesional.',
    curriculum: ['Tecnologías habilitadoras y transformación digital.', 'Datos, seguridad y entornos digitales.'],
    sources: [TITLE_SOURCE, COMMON_SOURCE],
  },
  {
    slug: 'fitness', code: 'MP1148', course: 2, shortTitle: 'Fitness',
    title: 'Fitness en sala de entrenamiento polivalente',
    description: 'Organización de la sala y programación del entrenamiento físico.',
    curriculum: ['Diseño y dirección de sesiones.', 'Seguimiento y evaluación del entrenamiento.'],
    sources: [TITLE_SOURCE, TECHNICAL_SOURCE],
  },
  {
    slug: 'comunicacion-lengua-extranjera', code: 'MO0002', course: 2, shortTitle: 'Comunicación en lengua extranjera',
    title: 'Habilidades comunicativas en lengua extranjera (GS)',
    description: 'Comunicación en lengua extranjera para desenvolverse en el entorno laboral.',
    curriculum: ['Interacción en situaciones profesionales.', 'Comprensión y producción de mensajes.'],
    sources: [TITLE_SOURCE, OPTIONAL_SOURCE],
  },
  {
    slug: 'habilidades-sociales', code: 'MP0017', course: 2, shortTitle: 'Habilidades sociales',
    title: 'Habilidades sociales',
    description: 'Comunicación, dinamización de grupos y gestión de relaciones profesionales.',
    curriculum: ['Trabajo en equipo y reuniones.', 'Resolución de conflictos y evaluación.'],
    sources: [TITLE_SOURCE, TECHNICAL_SOURCE],
  },
  {
    slug: 'empleabilidad-2', code: 'MP1710', course: 2, shortTitle: 'Empleabilidad II',
    title: 'Itinerario personal para la empleabilidad II',
    description: 'Desarrollo de estrategias de búsqueda de empleo e iniciativa emprendedora.',
    curriculum: ['Competencias personales y procesos de selección.', 'Innovación y proyectos de emprendimiento.'],
    sources: [TITLE_SOURCE, COMMON_SOURCE],
  },
  {
    slug: 'proyecto', code: 'MP1154', course: 2, shortTitle: 'Proyecto intermodular',
    title: 'Proyecto intermodular de acondicionamiento físico',
    description: 'Integración de competencias del ciclo en un proyecto de acondicionamiento físico.',
    curriculum: ['Planificación y desarrollo del proyecto.', 'Seguimiento y evaluación de resultados.'],
    sources: [TITLE_SOURCE, TECHNICAL_SOURCE],
  },
  {
    slug: 'hidrocinesia', code: 'MP1152', course: 2, shortTitle: 'Hidrocinesia',
    title: 'Técnicas de hidrocinesia',
    description: 'Elaboración y aplicación de protocolos de ejercicio en el agua.',
    curriculum: ['Preparación de instalaciones y recursos.', 'Dirección y evaluación de sesiones.'],
    sources: [TITLE_SOURCE, TECHNICAL_SOURCE],
  },
];
