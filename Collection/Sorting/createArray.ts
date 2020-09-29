import * as fs from "fs/promises";
import { createArray } from "./bubleSort/bubble";

export const createArrayAndWriteToFile = async (path:string, maxValue: number) => {
    const array = createArray(maxValue);
    const result = JSON.stringify(array);
    return fs.writeFile(path, result);
};


export const readArrayFromFile = async (path:string) => {
    return fs.readFile(path, 'utf8');
}

export const readAndParseArray = async (path:string) => {
    const data =  await fs.readFile(path, 'utf8');
    return JSON.parse(data);
}
