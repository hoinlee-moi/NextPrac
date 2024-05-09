import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import google from "next-auth/providers/google";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
    credentials({
      type: "credentials",
      credentials: {},
      authorize: async (credentials) => {
        console.log(credentials);
        return null;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      revalidatePath(url);
      return url;
    },
  },
});
