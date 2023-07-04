import { connectToDB } from "@/utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY ,
    }),
  ],
  callbacks: {
    async session({ session }) {
     
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDB();

        const userExist = await User.findOne({
          email: profile.email,
        });

        if (!userExist) {
          await User.create({
            email: profile.email,
            Username: profile.name,
            image: profile.picture,
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});
export { handler as GET, handler as POST };
