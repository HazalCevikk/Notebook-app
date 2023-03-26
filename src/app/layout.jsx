'use client'

import { SessionProvider } from 'next-auth/react'
import { AuthContextProvider, ProtectRoute } from '@/utils/auth_context'
import './globals.css'
import { SideBarContextProvider } from "@/context/SideBarContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <SessionProvider>
        <AuthContextProvider>
          <SideBarContextProvider>
            <body>
              <ProtectRoute>{children}</ProtectRoute>
            </body>
          </SideBarContextProvider>
        </AuthContextProvider>
      </SessionProvider>
    </html>
  )
}
