import {Connection} from "./Connection";

export class PostgreSQL {
    connect(): any {
        console.log('Connecting to database')
        return new Connection();
    }
}
