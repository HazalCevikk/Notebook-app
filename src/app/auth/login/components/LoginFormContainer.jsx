import { useRef } from 'react'
import { TextInput, Button } from '@/components/Inputs'
import FormContainer from '../../components/FormContainer'

const LoginFormContainer = ({ onSubmit, states }) => {
  const email = useRef('')
  const password = useRef('')

  return (
    <FormContainer>
      <TextInput
        placeholder="Enter your e-mail address"
        label="E-Mail"
        innerRef={email}
      />
      <TextInput
        placeholder="Enter your e-mail address"
        label="Password"
        type="password"
        innerRef={password}
      />
      <Button
        text={states.loading ? 'Loading' : 'Log in'}
        className="mt-4"
        onClick={() => onSubmit(email.current.value, password.current.value)}
        disabled={states.loading}
      />
    </FormContainer>
  )
}

export default LoginFormContainer
