
export interface ClassSession {
    subject: string;
    room?: string;
    teacher?: string;
    color: string;
    startTime: string;
    endTime: string;
    type?: 'class' | 'break';
}

export interface DaySchedule {
    day: string;
    sessions: ClassSession[];
}

const COLORS = {
    yellow: "bg-yellow-400 text-slate-900 border-yellow-500",
    orange: "bg-orange-400 text-slate-900 border-orange-500",
    pink: "bg-pink-300 text-slate-900 border-pink-400",
    purple: "bg-purple-300 text-slate-900 border-purple-400",
    cyan: "bg-cyan-400 text-slate-900 border-cyan-500",
    green: "bg-lime-300 text-slate-900 border-lime-400",
    blue: "bg-blue-300 text-slate-900 border-blue-400",
    gray: "bg-slate-200 text-slate-900 border-slate-300",
    lightOrange: "bg-orange-200 text-slate-900 border-orange-300",
    brightYellow: "bg-yellow-300 text-slate-900 border-yellow-400",
    break: "bg-slate-800/50 text-slate-500 border-slate-700/50 dashed border-2",
};

// Source: 1Ciclo.pdf and 2Ciclo.pdf, issued 31/08/2026 at 10:50.
const session = (startTime: string, endTime: string, subject: string, room: string, teacher: string, color: string): ClassSession => ({
    startTime, endTime, subject, room, teacher, color, type: 'class'
});

const recess = (startTime: string, endTime: string): ClassSession => ({
    startTime, endTime, subject: "RECREO", color: COLORS.break, type: 'break'
});

export const CYCLE_1_DAYS: DaySchedule[] = [
    {
        day: "Luns",
        sessions: [
            session("08:30", "10:10", "Valoración da CF", "Aula Ciclo", "Jose F.", COLORS.yellow),
            session("10:10", "11:00", "Inglés profesional", "Aula Ciclo", "Monserrat L.", COLORS.purple),
            recess("11:00", "11:20"),
            session("11:20", "13:00", "Control postural", "Ximnasio", "María P.", COLORS.pink),
            recess("13:00", "13:20"),
            session("13:20", "15:00", "Acond. físico aug", "Piscina", "María P.", COLORS.cyan),
        ]
    },
    {
        day: "Martes",
        sessions: [
            session("08:05", "09:20", "Valoración da CF", "Aula Ciclo", "Jose F.", COLORS.yellow),
            session("09:20", "11:00", "Control postural", "Ximnasio", "María P.", COLORS.pink),
            recess("11:00", "11:30"),
            session("11:30", "13:10", "Acond. físico aug", "Aula Ciclo", "María P.", COLORS.cyan),
            session("13:10", "14:00", "Valoración da CF", "Aula Ciclo", "Jose F.", COLORS.yellow),
            session("14:00", "14:50", "IPE I", "Aula Ciclo", "José Miguel M.", COLORS.orange),
        ]
    },
    {
        day: "Mércores",
        sessions: [
            session("08:30", "09:20", "Sostibilidade", "1.º Bach A", "Roberto L.", COLORS.green),
            session("09:20", "10:10", "IPE I", "Aula Ciclo", "José Miguel M.", COLORS.orange),
            session("10:10", "11:00", "Inglés profesional", "Aula Ciclo", "Monserrat L.", COLORS.purple),
            recess("11:00", "11:20"),
            session("11:20", "13:00", "Acond. físico musical", "Ximnasio", "Mercedes J.", COLORS.brightYellow),
            recess("13:00", "13:20"),
            session("13:20", "15:00", "Acond. físico aug", "Piscina", "María P.", COLORS.cyan),
        ]
    },
    {
        day: "Xoves",
        sessions: [
            session("08:05", "09:20", "Valoración da CF", "Aula Ciclo", "Jose F.", COLORS.yellow),
            session("09:20", "11:00", "Valoración da CF", "Ximnasio", "Jose F.", COLORS.yellow),
            recess("11:00", "11:30"),
            session("11:30", "13:10", "Control postural", "Ximnasio", "María P.", COLORS.pink),
            session("13:10", "14:50", "IPE I", "Aula Ciclo", "José Miguel M.", COLORS.orange),
        ]
    },
    {
        day: "Venres",
        sessions: [
            session("08:30", "11:00", "Acond. físico musical", "Ximnasio", "Mercedes J.", COLORS.brightYellow),
            recess("11:00", "11:30"),
            session("11:30", "12:20", "Acond. físico musical", "Aula Ciclo", "Mercedes J.", COLORS.brightYellow),
            session("12:20", "13:10", "Control postural", "Aula Ciclo", "María P.", COLORS.pink),
            session("13:10", "14:50", "Acond. físico aug", "Piscina", "María P.", COLORS.cyan),
        ]
    },
];

export const CYCLE_2_DAYS: DaySchedule[] = [
    {
        day: "Luns",
        sessions: [
            session("08:30", "09:20", "IPE II", "Aula Desdobre 16A", "José Miguel M.", COLORS.orange),
            session("09:20", "11:00", "Habilidades sociais", "Ximnasio", "Vanessa R.", COLORS.blue),
            recess("11:00", "11:20"),
            session("11:20", "13:00", "Hidrocinesia", "Aula Ciclo", "Mercedes J.", COLORS.pink),
            recess("13:00", "13:20"),
            session("13:20", "15:00", "Act. acond. soporte musical", "Ximnasio", "Vanessa R.", COLORS.brightYellow),
        ]
    },
    {
        day: "Martes",
        sessions: [
            session("08:05", "09:20", "Fitness", "Ximnasio", "Roberto L.", COLORS.lightOrange),
            session("09:20", "10:10", "Habilidades en inglés", "Aula Ciclo", "Monserrat L.", COLORS.purple),
            session("10:10", "11:00", "Act. acond. soporte musical", "Aula Ciclo", "Vanessa R.", COLORS.brightYellow),
            recess("11:00", "11:30"),
            session("11:30", "13:10", "Act. acond. soporte musical", "Ximnasio", "Vanessa R.", COLORS.brightYellow),
            session("13:10", "14:50", "Hidrocinesia", "Piscina", "Mercedes J.", COLORS.pink),
        ]
    },
    {
        day: "Mércores",
        sessions: [
            session("08:30", "09:20", "IPE II", "Aula Ciclo", "José Miguel M.", COLORS.orange),
            session("09:20", "11:00", "Fitness", "Ximnasio", "Roberto L.", COLORS.lightOrange),
            recess("11:00", "11:20"),
            session("11:20", "12:10", "Habilidades sociais", "Aula Ciclo", "Vanessa R.", COLORS.blue),
            session("12:10", "13:00", "Competencias profesionais", "Aula Ciclo", "Roberto L.", COLORS.green),
            recess("13:00", "13:20"),
            session("13:20", "15:00", "Act. acond. soporte musical", "Ximnasio", "Vanessa R.", COLORS.brightYellow),
        ]
    },
    {
        day: "Xoves",
        sessions: [
            session("08:05", "09:20", "Fitness", "Ximnasio", "Roberto L.", COLORS.lightOrange),
            session("09:20", "11:00", "Fitness", "Aula Ciclo", "Roberto L.", COLORS.lightOrange),
            recess("11:00", "11:30"),
            session("11:30", "12:20", "Habilidades en inglés", "Aula Ciclo", "Monserrat L.", COLORS.purple),
            session("12:20", "13:10", "Habilidades sociais", "Aula Ciclo", "Vanessa R.", COLORS.blue),
            session("13:10", "14:50", "Hidrocinesia", "Piscina", "Mercedes J.", COLORS.pink),
        ]
    },
    {
        day: "Venres",
        sessions: [
            session("08:30", "09:20", "Dixitalización s.p.", "Aula Ciclo", "Alejandro O.", COLORS.gray),
            session("09:20", "11:00", "Habilidades sociais", "Aula Ciclo", "Vanessa R.", COLORS.blue),
            recess("11:00", "11:30"),
            session("11:30", "13:10", "Fitness", "Ximnasio", "Roberto L.", COLORS.lightOrange),
            session("13:10", "14:50", "Fitness", "Aula Ciclo", "Roberto L.", COLORS.lightOrange),
        ]
    },
];
