import {User} from "./User";

export class PGConnection {
    saveUser(user: User) {
        console.log(`Saving ${user}`);
    }
}
