import {IDoor} from './IDoor'
import {Door} from './Door'

export class Factory {
    public static makeDoor(width, height): IDoor {
        return new Door(width, height);
    }
}
