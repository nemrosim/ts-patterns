import { UserController } from "./UserController";
import { ConsoleLogger } from "./ConsoleLogger";
import { PostgreSQL } from "./PostgreSQL";
import { User } from "./User";

const logger = new ConsoleLogger();
const connection = new PostgreSQL().connect();

const user = new User('John Doe');

new UserController(connection, logger).save(user);
