import { connectToDB } from "$db/mongo";

connectToDB().then(() => console.log("Connected to DB")).catch(err => console.log(err));