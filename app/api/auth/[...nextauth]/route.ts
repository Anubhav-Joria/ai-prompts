import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY as string,
    }),
  ],
  callbacks: {
    async session({ session, token, user }: any) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      console.log(session);
      return session;
    },
    
    async signin({ profile }: any) {
      try {
        await connectToDB();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
export default NextAuth(authOptions);
