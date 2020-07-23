export class User {
    name: string;

    constructor(name:string) {
        this.name = name
    }

    toString() {
        return `User with name: "${this.name}"`
    }
}
