'use client'

import Head from 'next/head'
import { useRef, useContext } from 'react'
import { AuthContext } from '../../../utils/auth_context'

export const metadata = {
  title: 'Login Page',
}
const Login = () => {
  const email = useRef('')
  const password = useRef('')
  const { login, loginStates } = useContext(AuthContext)

  return (
    <>
      <Head>
        <title>Login page</title>
      </Head>
      <div>login page</div>
      <input type="text" ref={email} />
      <input type="password" ref={password} />
      {loginStates.error && <div className="text-red">{loginStates.error}</div>}
      <button
        disabled={loginStates.loading}
        onClick={() => login(email.current.value, password.current.value)}
      >
        {loginStates.loading ? 'Loading...' : 'Login'}
      </button>
    </>
  )
}

export default Login
