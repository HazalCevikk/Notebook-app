import { useRef } from 'react'
import { Button, TextInput } from '@/app/components/Inputs'
import FormContainer from '../../components/FormContainer'

const RegisterFormContainer = ({ onSubmit, states }) => {
  const firstName = useRef(null)
  const lastName = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  return (
    <FormContainer>
      <TextInput placeholder="First Name" label="First Name" innerRef={firstName} />
      <TextInput placeholder="Last Name" label="Last Name" innerRef={lastName} />
      <TextInput placeholder="Email" label="Email" innerRef={email} />
      <TextInput placeholder="Password" label="Password" innerRef={password} type="password" />
      <Button
        text={states.loading ? 'Loading...' : 'Register'}
        className="mt-4"
        onClick={() => onSubmit({
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          email: email.current.value,
          password: password.current.value,
        })
        }
        disabled={states.loading}
      />
    </FormContainer>
  )
}

export default RegisterFormContainer
