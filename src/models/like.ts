import {IDGenerator} from "./IdGenerator"
import { User } from "./user"

export class Like extends IDGenerator {
    constructor(private _user: User) {
        super()
    }

    public getID(): string {
        return this.id
    }

    public get getUser(): User{
        return this._user
    };
}
