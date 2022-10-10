export interface Person {
    Id: number;
    Name: string;
    Gender: string;
    DateOfBirth: string
    HairColor: string;
    Height: number;
    Weight: number;
}

export interface State {
    people: Person[];
}