export interface Time {
    timezone: string;
    local: string;
    utc: string;
};

export interface Event {
    title: string;
    priority: number;
    description: string;
    details: string;
    image: string;
    link: string;
    recurring: boolean;
    time: {
        start: Time;
        end: Time;
    };
};

export type EventsList = Event[];