import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Implémente ta logique ici (ex: requête vers ta base de données)
        const user = await getUserFromDB(credentials.email, credentials.password)

        if (user) {
          return user
        }
        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role // injecter le rôle dans le token
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role // injecter le rôle dans la session
      }
      return session
    }
  },
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/signin', // optionnel
  }
})
