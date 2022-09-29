export interface Tudeng {
    martiklinr: string;
    eesnimi: string;
    perenimi: string;
    staatus: string;
    sugu: string;
    kuupaev: Date;
    vanus: number;
}

export interface State {
    exercises: Tudeng[];
}