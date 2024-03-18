import { UserRepositoryDb } from "../repositories/users.repository";
import { IDGenerator } from "./IdGenerator";
import { TweetRepositoryDb } from "../repositories/tweet.repository";
import { Tweet } from "./tweet";
import { Type } from "./types";

export class User extends IDGenerator{

    private _following: User[] = [];

    constructor(public name: string, public username: string, public email: string, public password: string ) {
        super();
        this.validateUsername()

    }

    public sendTweet(content: string, type: Type){
        const newTweet: Tweet = new Tweet(content, type, this)
        new TweetRepositoryDb().create(newTweet)
    }

    public follow(user: User): void {
        if(user.id === this.id) throw Error("You cannot follow yourself")
        
        const isFollowing = this._following.some((allreadyFollowing)=> allreadyFollowing.username === user.username )
        
        if(isFollowing){
            throw Error("You allready following this user")
        }
        
        this._following.push(user)
    }
    
    public showFeed(){
        
        let displayFollwingTweets = ""
        this._following.forEach((user)=> {
            displayFollwingTweets += this.showTweets(user.username)
        })
        
        return this.showTweets(this.username) + displayFollwingTweets 
    }
    public showTweets(username: string): string{

        const tweets: Tweet[] = new TweetRepositoryDb().getTweetsByUsername(username)
        
        let displayTweetWithReply = ""
        
        if(tweets.length){
            for(const tweet of tweets){
                displayTweetWithReply += tweet.show() + "\n" + tweet.showReplies()
                displayTweetWithReply += "----------------------------------------\n"
            }
        }
        
        return displayTweetWithReply 
    }

    public getID(): string {
        return `User ID: ${this.id}`
    }

    private validateUsername(): void {
        new UserRepositoryDb().isUsernameExists(this)
    }
}