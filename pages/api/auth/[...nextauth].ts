import NextAuth from "next-auth";
import github from "next-auth/providers/github";

export default NextAuth({
  providers: [github({ clientId: process.env.OAUTH_GITHUB_ID, clientSecret: process.env.OAUTH_GITHUB_SECRET })],
});
