import {v4 as uuid} from "uuid"

export abstract class IDGenerator {
    protected id: string;

    constructor() {
        this.id = uuid(); 
    }

    abstract getID(): string;
}