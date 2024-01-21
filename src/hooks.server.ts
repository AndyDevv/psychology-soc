import { connectToDB } from "$db/mongo";

connectToDB().then(() => console.log("Connected to DB")).catch(err => console.log(err));

export async function handle({ event, resolve }) {
    // create auth middleware using accessToken. Note: accessToken is in locals i.e. event.locals.accessToken and refresh token is in cookies i.e. event.cookies.refreshToken

    return await resolve(event);
}