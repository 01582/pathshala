import {Redis} from "@upstash/redis"

async function checkTokenInDb(token: string) {
  const redis = new Redis({
    url: 'https://apn1-above-eagle-34429.upstash.io',
    token: "AYZ9ACQgNTI5YWM2YzctZTZkMy00Njk4LWI1MTAtOGYyMzkyOTg4YTZkNWE0YzkxNTViNTQ3NDE5M2FhNDkwMjY2Nzk5ZDhkNDE="
  })
     
 try {
  const a = await redis.set("test", "User Data:")
  const check = await redis.exists(token)
  console.log(check)
  return check
 } catch (error) {
  
 }
}
export default checkTokenInDb;
