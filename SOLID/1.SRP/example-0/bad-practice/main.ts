class Log {
    static information(message: string) {
        console.log(`Log.Info: ${message}`);
    }

    static debug(message: string) {
        console.log(`Log.Debug: ${message}`);
    }
}

class File {
    static writeAllText(fileName: string, message: string) {
        console.log('File. Write all text')
    }
}

class FileStorage {
    private cache = {
        addOrUpdate: (id, message)=>{
            console.log('Cache. Add or update')
        }
    }

    public getFileInfo(id: number): { name: string } {
        console.log('Getting info');
        return {
            name: "Some-file-name"
        }
    }
    ;

    /**
     * 1. Logging
     * 2. Caching
     * 3. Storage
     *
     * @param id
     * @param message
     */
    public save(id: number, message: string): void {
        Log.information(`Saving message ${id}`)
        const file = this.getFileInfo(id);
        File.writeAllText(file.name, message);
        this.cache.addOrUpdate(id, message);
        Log.information(`Saved message ${id}`);
    }
}
