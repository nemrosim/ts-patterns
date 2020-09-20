import { Factory } from './Factory'

function main() {
    const door = Factory.makeDoor(100, 200);

    console.log("DOOR: ", door.getHeight());
    console.log("DOOR: ", door.getWidth());
}

main();
