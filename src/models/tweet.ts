import { IDGenerator } from "./IdGenerator";
import { Type } from "./types";
import { User } from "./user";
import { Like } from "./like";

//user executa o sendtweet > cria um Tweet do tipo Normal
// reply tweet com o metodo da classe tweet chamado reply.

export class Tweet extends IDGenerator{
    public likes: Like[] = [];
    private _replies: Tweet[] = [];
   
    constructor(public content: string, public type: Type, public author: User) {
        super()
    }

    public reply(content: string, type: Type, author: User): void {
        if(type !== "Reply") throw Error("To reply to a tweet, use the Reply type")

        const replyTweet = new Tweet(content, type , author);
        this._replies.push(replyTweet);
    }

    public like(user: User): void {
        this.likes.push(new Like(user));
    }

    public show(): string{

        let displayTweet = ""
        if(!this.likes.length){
            displayTweet = `\@${this.author.username}: ${this.content}\n[0 likes]`
        }

        if(this.likes.length === 1){
            displayTweet = `\@${this.author.username}: ${this.content}\n[${this.likes[0].getUser.username} curtiu]`
        }

        if(this.likes.length > 1){
            displayTweet = `@${this.author.username}: ${this.content}\n[@${this.likes[0].getUser.username} e mais ${this.likes.length - 1} usuários curtiram]`
        }
        

        return displayTweet
    }

    public showReplies(): string {
        let displayTweetWithReply = ""
        for(const reply of this._replies){
            displayTweetWithReply += ` > @${reply.author.username}: ${reply.content}\n`
        }
        
       return displayTweetWithReply
    }

    public getID(): string {
        return this.id
    }

}
