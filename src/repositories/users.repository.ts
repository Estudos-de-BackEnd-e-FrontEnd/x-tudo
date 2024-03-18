import { UserRepositoryContract } from "../contracts/user.repository.contract";
import { userdb } from "../db/users_db";
import { User } from "../models/user";

export class UserRepositoryDb implements UserRepositoryContract {

    public create(newUser: User): void {

        this.isUsernameExists(newUser)
        userdb.push(newUser)
       // console.log(userdb)
    }

    public getByUsername(username: string): User{
        const isUserFound = userdb.find((user)=> user.username === username)
        
        if(!isUserFound) throw Error("User not found")

        return isUserFound
    }


    public isUsernameExists(checkUser: User): void{
        const userExists = userdb.some((user)=> user.username === checkUser.username)
        if(userExists) throw Error('Username already register')
    }
}
