class File {
}

interface IStore {
    read(id: number);

    save(file: File);

    getFileInfo(path: string);
}

class SqlStore implements IStore {
    getFileInfo(path: string) {
    }

    read(id: number) {
    }

    save(file: File) {
    }
}

class FileStore implements IStore {
    getFileInfo(path: string) {
    }

    read(id: number) {
    }

    save(file: File) {
    }
}
