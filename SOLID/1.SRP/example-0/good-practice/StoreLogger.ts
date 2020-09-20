import { Log } from "./main"

export class StoreLogger {
    public saving(id: number): void {
        Log.information(`Saving message ${id}`)
    }

    public saved(id: number): void {
        Log.information(`Saved message ${id}`)
    }
}
