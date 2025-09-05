// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      username?: string;
      role?: string;
      status: boolean;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: string;
    username?: string;
    status?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string | null;
    role?: string;
    status?: boolean;
    email?: string | null;
    
  }
}
