import { User } from "./User";
import { AbstractConnection } from "./abstraction/AbstractConnection";

export class PGConnection implements AbstractConnection {
    saveUser(user: User) {
        console.log(`Saving ${user}`);
    }
}
