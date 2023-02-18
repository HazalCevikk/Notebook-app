'use client'

import Head from 'next/head'
import { useContext, useRef } from 'react'
import { AuthContext } from '@/utils/auth_context'

const Register = () => {
  const { register, registerStates } = useContext(AuthContext)
  const firstName = useRef('')
  const lastName = useRef('')
  const email = useRef('')
  const password = useRef('')
  const onSubmit = () => {
    register({
      email: email.current.value,
      password: password.current.value,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
    })
  }

  return (
    <>
      <Head>
        <title> Register </title>
      </Head>

      <div>
        <h3>register page</h3>
        <div className="flex space-x-4">
          <input
            className="border-2"
            type="text"
            placeholder="First Name"
            ref={firstName}
          />
          <input
            className="border-2"
            type="text"
            placeholder="Last Name"
            ref={lastName}
          />
        </div>
        <div className="flex space-x-4">
          <input className="border-2" type="email" placeholder="E-Mail" ref={email} />
          <input
            className="border-2"
            type="password"
            placeholder="Password"
            ref={password}
          />
        </div>
        {registerStates.error && <div>{registerStates.error}</div>}

        <button disabled={registerStates.loading} className="border-2" onClick={onSubmit}>
          {registerStates.loading ? 'Loading' : 'Register'}
        </button>
      </div>
    </>
  )
}

export default Register
