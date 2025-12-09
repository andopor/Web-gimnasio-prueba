
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

// --- Time Slots Definitions ---

// Slots for Mon/Wed (Recreos: 11:00-11:20, 13:00-13:20)
const SLOTS_MW = [
    { start: "08:05", end: "08:30" },
    { start: "08:30", end: "09:20" },
    { start: "09:20", end: "10:10" },
    { start: "10:10", end: "11:00" },
    { start: "11:00", end: "11:20", type: 'break', subject: "RECREO" },
    { start: "11:20", end: "12:10" },
    { start: "12:10", end: "13:00" },
    { start: "13:00", end: "13:20", type: 'break', subject: "RECREO" },
    { start: "13:20", end: "14:10" },
    { start: "14:10", end: "15:00" }
];

// Slots for Tue/Thu/Fri (Recreo: 11:00-11:30)
const SLOTS_TJF = [
    { start: "08:05", end: "08:30" },
    { start: "08:30", end: "09:20" },
    { start: "09:20", end: "10:10" },
    { start: "10:10", end: "11:00" },
    { start: "11:00", end: "11:30", type: 'break', subject: "RECREO" },
    { start: "11:30", end: "12:20" },
    { start: "12:20", end: "13:10" },
    { start: "13:10", end: "14:00" }, // Corrected: 50 mins
    { start: "14:00", end: "14:50" }  // Corrected: 14:00 - 14:50
];

// Helper to build a session
const s = (slotIdx: number, isMW: boolean, subject: string, room: string, teacher: string, color: string): ClassSession => {
    const slot = isMW ? SLOTS_MW[slotIdx] : SLOTS_TJF[slotIdx];
    return {
        subject, room, teacher, color,
        startTime: slot.start,
        endTime: slot.end,
        type: 'class'
    };
};

const b = (slotIdx: number, isMW: boolean): ClassSession => {
    const slot = isMW ? SLOTS_MW[slotIdx] : SLOTS_TJF[slotIdx];
    return {
        subject: "RECREO", room: "", teacher: "", color: COLORS.break,
        startTime: slot.start,
        endTime: slot.end,
        type: 'break'
    };
}



const empty = (slotIdx: number, isMW: boolean): ClassSession => {
    const slot = isMW ? SLOTS_MW[slotIdx] : SLOTS_TJF[slotIdx];
    return {
        subject: "", room: "", teacher: "", color: "invisible", // invisible class to act as spacer
        startTime: slot.start,
        endTime: slot.end,
        type: 'class'
    };
}


// --- CYCLE 1 ---

export const CYCLE_1_DAYS: DaySchedule[] = [
    {
        day: "Luns",
        sessions: [
            empty(0, true), // Spacer for 08:05 alignment
            s(1, true, "IPE 1", "Aula Teórica", "María C", COLORS.orange),
            s(2, true, "Postura", "Ximnasio", "Antonio", COLORS.pink),
            s(3, true, "Postura", "Ximnasio", "Antonio", COLORS.pink),
            b(4, true), // 11:00-11:20
            s(5, true, "Musicales 1", "Aula Teórica", "Merce", COLORS.brightYellow),
            s(6, true, "Musicales 1", "Aula Teórica", "Merce", COLORS.brightYellow),
            b(7, true), // 13:00-13:20
            s(8, true, "Acuáticas 1", "Piscina", "Roberto", COLORS.cyan),
            s(9, true, "Acuáticas 1", "Piscina", "Roberto", COLORS.cyan),
        ]
    },
    {
        day: "Martes",
        sessions: [
            s(0, false, "Valoración", "Aula teórica", "Jose", COLORS.yellow),
            s(1, false, "Valoración", "Aula teórica", "Jose", COLORS.yellow),
            s(2, false, "IPE 1", "Aula Teórica", "María C", COLORS.orange),
            s(3, false, "INGLÉS 1", "Aula Teórica", "Montse", COLORS.purple),
            b(4, false), // 11:00-11:30
            s(5, false, "Sustent.", "Aula Teórica", "María P", COLORS.green),
            s(6, false, "Postura", "Aula teórica", "Antonio", COLORS.pink),
            s(7, false, "Postura", "Ximnasio", "Antonio", COLORS.pink),
            s(8, false, "Postura", "Ximnasio", "Antonio", COLORS.pink),
        ]
    },
    {
        day: "Mércores",
        sessions: [
            empty(0, true), // Spacer
            s(1, true, "Valoración", "Aula teórica", "Jose", COLORS.yellow),
            s(2, true, "Valoración", "Aula teórica", "Jose", COLORS.yellow),
            s(3, true, "INGLÉS 1", "Aula Teórica", "Montse", COLORS.purple),
            b(4, true), // 11:00-11:20
            s(5, true, "Musicales 1", "Ximnasio", "Merce", COLORS.brightYellow),
            s(6, true, "Musicales 1", "Ximnasio", "Merce", COLORS.brightYellow),
            b(7, true), // 13:00-13:20
            s(8, true, "Acuáticas 1", "Piscina", "Roberto", COLORS.cyan),
            s(9, true, "Acuáticas 1", "Piscina", "Roberto", COLORS.cyan),
        ]
    },
    {
        day: "Xoves",
        sessions: [
            s(0, false, "Valoración", "Aula teórica", "Jose", COLORS.yellow),
            s(1, false, "Valoración", "Aula teórica", "Jose", COLORS.yellow),
            s(2, false, "Acuáticas 1", "Aula teórica", "Roberto", COLORS.cyan),
            s(3, false, "Acuáticas 1", "Aula teórica", "Roberto", COLORS.cyan),
            b(4, false), // 11:00-11:30
            s(5, false, "Valoración", "Ximnasio", "Jose", COLORS.yellow),
            s(6, false, "Valoración", "Ximnasio", "Jose", COLORS.yellow),
            s(7, false, "Postura", "Ximnasio", "Antonio", COLORS.pink),
            s(8, false, "Postura", "Ximnasio", "Antonio", COLORS.pink),
        ]
    },
    {
        day: "Venres",
        sessions: [
            empty(0, false), // Spacer
            s(1, false, "Valoración", "Aula teórica", "Jose", COLORS.yellow),
            s(2, false, "Musicales 1", "Ximnasio", "Merce", COLORS.brightYellow),
            s(3, false, "Musicales 1", "Ximnasio", "Merce", COLORS.brightYellow),
            b(4, false), // 11:00-11:30
            s(5, false, "IPE 1", "Aula Teórica", "María C", COLORS.orange),
            s(6, false, "IPE 1", "Aula Teórica", "María C", COLORS.orange),
            s(7, false, "Acuáticas 1", "Piscina", "Roberto", COLORS.cyan),
            s(8, false, "Acuáticas 1", "Piscina", "Roberto", COLORS.cyan),
        ]
    }
];

// --- CYCLE 2 ---

export const CYCLE_2_DAYS: DaySchedule[] = [
    {
        day: "Luns",
        sessions: [
            empty(0, true), // Spacer
            s(1, true, "DIXITAL", "Aula Teórica", "Antonio", COLORS.gray),
            s(2, true, "Fitness", "Aula Teórica", "Roberto", COLORS.lightOrange),
            s(3, true, "Fitness", "Aula Teórica", "Roberto", COLORS.lightOrange),
            b(4, true), // 11:00-11:20
            s(5, true, "Fitness", "Ximnasio", "Roberto", COLORS.lightOrange),
            s(6, true, "Fitness", "Ximnasio", "Roberto", COLORS.lightOrange),
            b(7, true), // 13:00-13:20
            s(8, true, "Musicales 2", "Ximnasio", "Vanessa", COLORS.brightYellow),
            s(9, true, "Musicales 2", "Ximnasio", "Vanessa", COLORS.brightYellow),
        ]
    },
    {
        day: "Martes",
        sessions: [
            s(0, false, "Fitness", "Ximnasio", "Roberto", COLORS.lightOrange),
            s(1, false, "Fitness", "Ximnasio", "Roberto", COLORS.lightOrange),
            s(2, false, "HHSS", "Ximnasio", "Vanessa", COLORS.blue),
            s(3, false, "HHSS", "Ximnasio", "Vanessa", COLORS.blue),
            b(4, false), // 11:00-11:30
            s(5, false, "Fitness", "Ximnasio", "Roberto", COLORS.lightOrange),
            s(6, false, "Fitness", "Ximnasio", "Roberto", COLORS.lightOrange),
            s(7, false, "Hidrocinesia", "Piscina", "Merce", COLORS.pink),
            s(8, false, "Hidrocinesia", "Piscina", "Merce", COLORS.pink),
        ]
    },
    {
        day: "Mércores",
        sessions: [
            empty(0, true), // Spacer
            s(1, true, "HHSS", "Ximnasio", "Vanessa", COLORS.blue),
            s(2, true, "Musicales 2", "Ximnasio", "Vanessa", COLORS.brightYellow),
            s(3, true, "Musicales 2", "Ximnasio", "Vanessa", COLORS.brightYellow),
            b(4, true), // 11:00-11:20
            s(5, true, "Fitness", "Aula Teórica", "Roberto", COLORS.lightOrange),
            s(6, true, "Fitness", "Aula Teórica", "Roberto", COLORS.lightOrange),
            b(7, true), // 13:00-13:20
            s(8, true, "Hidrocinesia", "Aula Teórica", "Merce", COLORS.pink),
            s(9, true, "Hidrocinesia", "Aula Teórica", "Merce", COLORS.pink),
        ]
    },
    {
        day: "Xoves",
        sessions: [
            s(0, false, "Fitness", "Ximnasio", "Roberto", COLORS.lightOrange),
            s(1, false, "Fitness", "Ximnasio", "Roberto", COLORS.lightOrange),
            s(2, false, "IPE 2", "Aula Teórica", "María C", COLORS.orange),
            s(3, false, "IPE 2", "Aula Teórica", "María C", COLORS.orange),
            b(4, false), // 11:00-11:30
            s(5, false, "INGLÉS 2", "Aula Teórica", "Montse", COLORS.purple),
            s(6, false, "HHSS", "Aula teórica", "Vanessa", COLORS.blue),
            s(7, false, "Hidrocinesia", "Piscina", "Merce", COLORS.pink),
            s(8, false, "Hidrocinesia", "Piscina", "Merce", COLORS.pink),
        ]
    },
    {
        day: "Venres",
        sessions: [
            empty(0, false), // Spacer
            s(1, false, "COMP PROF", "1BAC D", "Vanessa", COLORS.pink),
            s(2, false, "HHSS", "Aula Teórica", "Vanessa", COLORS.blue),
            s(3, false, "HHSS", "Aula Teórica", "Vanessa", COLORS.blue),
            b(4, false), // 11:00-11:30
            s(5, false, "Musicales 2", "Ximnasio", "Vanessa", COLORS.brightYellow),
            s(6, false, "Musicales 2", "Ximnasio", "Vanessa", COLORS.brightYellow),
            s(7, false, "Musicales 2", "Ximnasio", "Vanessa", COLORS.brightYellow),
            s(8, false, "INGLÉS 2", "Aula Teórica", "Montse", COLORS.purple),
        ]
    }
];
