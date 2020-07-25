import {IPersonReader} from "./IPersonReader";
import {Person} from "./Person";

class ServiceReader implements IPersonReader{
    getPeople(): Array<Person> {
        return undefined;
    }

    getPerson(id: number): Person {
        return undefined;
    }

}
