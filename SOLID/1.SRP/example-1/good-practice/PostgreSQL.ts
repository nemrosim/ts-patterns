import {PGConnection} from "./PGConnection";
import {AbstractDatabase} from "./abstraction/AbstractDatabase";

export class PostgreSQL implements AbstractDatabase{
    connect(): PGConnection {
        return new PGConnection();
    }
}
