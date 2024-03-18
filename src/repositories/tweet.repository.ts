import { TweetRepositoryContract  } from "../contracts/tweet.repository.contract";
import { tweetsdb } from "../db/tweets_db";
import { Tweet } from "../models/tweet";

export class TweetRepositoryDb implements TweetRepositoryContract{
    public create(newTweet: Tweet):void{
        tweetsdb.push(newTweet)
    }

    public getTweetsByUsername(username: string):Tweet[]{
            const tweetFound = tweetsdb.filter((tweet)=> tweet.author.username === username)
            if(!tweetFound) throw Error("This user doesn't have tweets")
            return tweetFound
    }
}