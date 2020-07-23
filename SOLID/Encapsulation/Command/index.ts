class FileStore {

    /**
     * Command
     * @param id
     * @param message
     */
    save(id: number, message: string): void {
        const path = this.getFileName(id); // OK to query from command
        // write "message" to filesystem
    }

    /**
     * Query
     * @param id
     */
    getFileName(id: number): string {
        return "Some path"
    }

}
