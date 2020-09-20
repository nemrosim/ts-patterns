import { AbstractLogger } from "./abstraction/AbstractLogger";

export class ConsoleLogger implements AbstractLogger {
    log(text: string) {
        console.log(text);
    }
}
