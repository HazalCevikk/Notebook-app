'use client'

// import { Inter } from '@next/font/google'
import { signOut } from 'next-auth/react'
import { useContext } from 'react';
import { AuthContext } from '../utils/auth_context';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { userData } = useContext(AuthContext)

  return (
    <main>
      Welcome,  { userData.user.firstName} {userData.user.lastName}
      <button onClick={signOut}>
        log out
      </button>
    </main>
  )
}
