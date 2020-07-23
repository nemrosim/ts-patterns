import {PostgreSQL} from "./PostgreSQL";
import {User} from "./User";
import {AbstractLogger} from "./abstraction/AbstractLogger";
import {AbstractConnection} from "./abstraction/AbstractConnection";

export class UserController {
    private connection: AbstractConnection;
    private logger: AbstractLogger;

    constructor(connection: AbstractConnection, logger: AbstractLogger) {
        this.connection = connection;
        this.logger = logger;
    }

    save(user: User): void {
        // 1. Logging
        this.logger.log("Connecting to database");

        // 2. Saving user to database;
        this.connection.saveUser(user);

        // 3. Logging
        this.logger.log("User is saved");
    }
}
