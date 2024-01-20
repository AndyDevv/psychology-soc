import { connectToDB } from "$db/mongo";

connectToDB().then(() => console.log("Connected to DB")).catch(err => console.log(err));

export async function handle({ event, resolve }) {

    return await resolve(event);
}