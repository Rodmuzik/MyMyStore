import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      // 可以在這裡加入額外的用戶資料
      return session
    },
  },
  pages: {
    signIn: '/auth/signin', // 自訂登入頁面 (可選)
    error: '/auth/error',   // 錯誤頁面 (可選)
  },
}