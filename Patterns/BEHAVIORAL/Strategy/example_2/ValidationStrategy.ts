import { I_Person } from "./Person";

export abstract class ValidationStrategy {
    abstract isValid(person: I_Person): boolean;
}
