import {Tweet} from "../models/tweet"

export interface TweetRepositoryContract  {
    create: (newTweet: Tweet) => void;
    getTweetsByUsername: (username: string) => Tweet[];
}