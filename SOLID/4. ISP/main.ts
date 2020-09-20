// Role Interfaces
interface Movable {
    move();
}

interface Readable {
    read();
}

interface Writable {
    write();
}

// Header Interface
interface IDatabase {
    getAll();

    getOne();

    create();

    update();

    delete();

    deleteAll();
}
