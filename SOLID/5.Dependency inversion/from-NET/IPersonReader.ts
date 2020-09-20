import { Person } from "./Person";

export interface IPersonReader {
    getPeople(): Array<Person>

    getPerson(id: number): Person;
}
