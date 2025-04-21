import { MongoClient } from "mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const MONGODB_URI = process.env.MONGODB_URI;

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const client = new MongoClient(MONGODB_URI || "");
        await client.connect();
        const db = client.db("soupdelivery");

        const user = await db
          .collection("admins")
          .findOne({ email: credentials.email });

        if (user && user.password === credentials.password) {
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        }

        await client.close();
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
