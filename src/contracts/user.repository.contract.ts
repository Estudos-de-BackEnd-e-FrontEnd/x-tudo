import {User} from "../models/user"

export interface UserRepositoryContract {
    create: (newUser: User) => void;
    getByUsername: (username: string) => void;
}