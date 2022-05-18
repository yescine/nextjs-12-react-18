import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongodb";

export default NextAuth({
  providers: [github({ clientId: process.env.OAUTH_GITHUB_ID, clientSecret: process.env.OAUTH_GITHUB_SECRET })],
  adapter: MongoDBAdapter(clientPromise),
  session:{
    strategy:"jwt"
  },
  jwt:{
    secret:"random-string"
  }
  
});
