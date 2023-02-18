import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import { login } from '@/services/auth'

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = login({ email, password })
        return user
      },
    }),
  ],
  callbacks: {
    async jwt(data) {
      return { ...data.token, ...data.user };
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      // eslint-disable-next-line no-param-reassign
      session.user = token;

      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.SECRET_KEY,
})
