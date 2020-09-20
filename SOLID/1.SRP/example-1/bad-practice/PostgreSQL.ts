import { PGConnection } from "./PGConnection";

export class PostgreSQL {
    connect(): any {
        return new PGConnection();
    }
}
