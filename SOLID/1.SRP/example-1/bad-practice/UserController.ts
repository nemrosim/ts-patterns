import {PostgreSQL} from "./PostgreSQL";
import {User} from "./User";

export class UserController {
    save(): void {
        // 1. Connecting to database;
        const db = new PostgreSQL().connect();

        // 2. Saving user to database;
        db.saveUser(new User("John Doe"));

        // 3. Logging
        console.log("User is saved");
    }
}
