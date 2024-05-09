import NextAuth from "next-auth";
import google from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // credentials({
    //   type: "credentials",
    //   credentials: {},
    //   authorize: async (credentials) => {
    //     console.log(credentials);
    //     return null;
    //   },
    // }),
  ],
});
