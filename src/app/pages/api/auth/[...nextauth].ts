import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        // email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        // const authResponse = await fetch("http://47.109.94.67:3000/api/auth/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(credentials),
        // });

        // if (!authResponse.ok) {
        //   return null;
        // }
        // const user = await authResponse.json();
        // return user;
        if (!credentials?.username || !credentials?.password) {
          throw new Error("无效凭证");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.username,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("无效凭证");
        }

        const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword);

        if (!isCorrectPassword) {
          throw new Error("无效凭证");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
