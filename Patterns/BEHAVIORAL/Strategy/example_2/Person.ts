import { ValidationStrategy } from "./ValidationStrategy";

export interface I_Person {
    getAge(): number;
}

export class Person implements I_Person {
    private _age: number;
    private _name: string;
    private _phoneNumber: string;
    private _strategy: ValidationStrategy;

    constructor(age: number, name: string, phoneNumber: string, validator: ValidationStrategy) {
        this._age = age;
        this._name = name;
        this._phoneNumber = phoneNumber;
        this._strategy = validator;
    }

    getAge(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    isValid(): boolean {
        return this._strategy.isValid(this);
    }
}

