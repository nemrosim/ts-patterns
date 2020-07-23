import {AbstractConnection} from "./AbstractConnection";

export interface AbstractDatabase {
    connect(): AbstractConnection
}
