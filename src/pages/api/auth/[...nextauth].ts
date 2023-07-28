import NextAuth, { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { login } from "@/app/api/user";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/app/libs/prismadb";

import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const userInfo = { ...credentials };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(credentials?.name || "")) {
          userInfo.email = credentials?.name || "";
        }
        if (!userInfo?.name || !userInfo?.password) {
          throw new Error("无效凭证");
        }

        const user = await prisma.users.findFirst({
          where: {
            OR: [{ username: userInfo.name }, { email: userInfo.email }],
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("无效凭证");
        }

        const isCorrectPassword = await bcrypt.compare(userInfo.password, user.hashedPassword);

        if (!isCorrectPassword) {
          throw new Error("无效凭证");
        }

        // login({ username: userInfo.name, password: userInfo.password }).then((res) => {
        //   console.log(res);
        // });
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // console.log("----token-----", account?.access_token);
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile?.name;
      }
      return token;
    },
  },
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
