import { PostgreSQL } from "./PostgreSQL";
import { User } from "./User";

export class UserController {
    save(): void {
        // 1. Logging
        console.log("Connecting to database");

        // 2. Connecting to database;
        const db = new PostgreSQL().connect();

        // 3. Saving user to database;
        db.saveUser(new User("John Doe"));

        // 4. Logging
        console.log("User is saved");
    }
}
