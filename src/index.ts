import { User } from "./models/user";
import { UserRepositoryDb } from "./repositories/users.repository";
import { Tweet } from "./models/tweet";
import { TweetRepositoryDb } from "./repositories/tweet.repository";

const userRepositoryDb: UserRepositoryDb = new UserRepositoryDb()

const lucas: User = new User("Lucas", "lucky", "lucas@gmail.com", "123456")
const morgana: User = new User("Morgana", "morgana", "morgana@gmail.com", "123456")
const nami: User = new User("Nami", "namizinha", "namizinha@gmail.com", "123456")
const brand: User = new User("Brand", "brandizinha", "brandizinha@gmail.com", "123456")

userRepositoryDb.create(lucas)
userRepositoryDb.create(morgana)
userRepositoryDb.create(nami)
userRepositoryDb.create(brand)

lucas.follow(morgana)
lucas.follow(nami)
lucas.follow(brand)

lucas.sendTweet("Comi um x-tudo no precin", "Normal")
morgana.sendTweet("Curtindo o carnavallllll", "Normal")
brand.sendTweet("viajandoooooo", "Normal")

const tweetsLucas: Tweet[] = new TweetRepositoryDb().getTweetsByUsername(lucas.username)
tweetsLucas[0].reply("Muito bom esse lanche mesmo ", "Reply", morgana)
tweetsLucas[0].like(morgana)

const tweetsMorgana: Tweet[] = new TweetRepositoryDb().getTweetsByUsername(morgana.username)
tweetsMorgana[0].reply("tambem vou irrrrr", "Reply", lucas)
tweetsMorgana[0].like(lucas)

const tweetsBrand: Tweet[] = new TweetRepositoryDb().getTweetsByUsername(brand.username)
tweetsBrand[0].reply("tambem vou irrrrr", "Reply", nami)
tweetsBrand[0].reply("tambem vou irrrrr", "Reply", nami)
tweetsBrand[0].like(nami)
tweetsBrand[0].like(nami)

console.log(lucas.showFeed())
 