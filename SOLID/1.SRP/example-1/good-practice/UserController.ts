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
        this.logger.log("Connecting to database");
        this.connection.saveUser(user);
        this.logger.log("User is saved");
    }
}
