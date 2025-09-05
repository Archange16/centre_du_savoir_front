// lib/auth.ts

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "./db"; // ✅ Utilisation de l'instance Prisma centralisée

// ⚙️ Configuration de NextAuth
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      // 📋 Champs attendus dans le formulaire de connexion
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Mot de passe", type: "password" },
      },

      // 🔐 Fonction appelée pour valider les identifiants
      async authorize(credentials) {
        // ⛔ Sécurité : vérifie que credentials est bien défini
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Veuillez fournir un email et un mot de passe.");
        }

        const { email, password } = credentials;

        // 🔍 Recherche de l'utilisateur dans la base
        const user = await db.user.findUnique({
          where: { email },
        });

        if (!user) {
          throw new Error("Utilisateur non trouvé.");
        }

        // ✅ Vérifie que le mot de passe correspond au hash stocké
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          throw new Error("Mot de passe incorrect.");
        }

        // 🎯 Renvoie les infos utilisateur (sans le mot de passe)
        return {
          id: user.id.toString(),
          name: user.username,
          email: user.email,
          role: user.role,
          status: user.status,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
        if (user) {
            return {
                ...token,
                id: user.id.toString(),
                username: user.name,
                email: user.email,
                role: user.role,
                status: user.status,
                
            }
        }
      return token
    },
    async session({ session, token }) {
        return {
            ...session,
            user: {
                ...session.user,
                id: token.id,
                username: token.username,
                role: token.role,
                status: token.status,
                //email: token.email,
            }
        }
    },
  },

  // 🛡️ Utilisation du JWT pour gérer la session (token côté client)
  session: {
    strategy: "jwt",
  },

  // 🖼️ Page personnalisée pour la connexion
  pages: {
    signIn: "/sign-in",
  },

  // 🔐 Secret pour sécuriser les tokens (à mettre dans .env)
  secret: process.env.NEXTAUTH_SECRET,
};
