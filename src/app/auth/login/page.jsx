'use client'

import { useContext } from 'react'
import { AuthContext } from '../../../utils/auth_context'
import { LoginFormContainer } from './components'
import Header from '../components/Header'

const Login = () => {
  const { login, loginStates } = useContext(AuthContext)
  return (
    <>
      <Header text="Log in" />
      <LoginFormContainer onSubmit={login} states={loginStates} />
      {loginStates.error && <div className="text-[#FF0000]">{loginStates.error}</div>}
    </>
  )
}

export default Login
