'use client'

import { useContext } from 'react'
import { AuthContext } from '@/utils/auth_context'
import Header from '../components/Header'
import RegisterFormContainer from './components/RegisterFormContainer'

const Register = () => {
  const { register, registerStates } = useContext(AuthContext)
  return (
    <>
      <Header text="Register" />
      <RegisterFormContainer onSubmit={register} states={registerStates} />
      {registerStates.error && <div className="text-[#FF0000]">{registerStates.error}</div>}
    </>
  )
}

export default Register
