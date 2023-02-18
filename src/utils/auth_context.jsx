import {
  createContext, useContext, useMemo, useState,
} from 'react'
import { useSession, signIn } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

const NO_AUTH_PAGES = ['/auth/login', '/auth/register', '/auth/forgot-password']

export const AuthContext = createContext({
  authStatus: null,
  login: () => {},
  register: () => {},
  registerStates: {
    loading: false,
    error: null,
  },
  loginStates: {
    loading: false,
    error: null,
    redirectUrl: null,
  },
  userData: null,
})

export const AuthContextProvider = ({ children }) => {
  const [loginStates, setLoginStates] = useState({
    loading: false,
    error: null,
  })
  const [registerStates, setRegisterStates] = useState({
    loading: false,
    error: null,
  })

  const pathName = usePathname()
  const router = useRouter()
  const { status: authStatus, data: userData } = useSession()

  if (authStatus === 'unauthenticated' && !NO_AUTH_PAGES.includes(pathName)) {
    router.replace('/auth/login')
  }

  const login = async (email, password) => {
    setLoginStates({
      ...loginStates,
      loading: true,
    })
    signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/',
    }).then((result) => {
      if (result.ok) {
        setLoginStates({
          loading: false,
          error: null,
        })
        router.replace(result.url)
      } else {
        setLoginStates({
          loading: false,
          error: 'Wrong email or password.',
        })
      }
    })
  }

  const register = ({
    email, password, firstName, lastName,
  }) => {
    setRegisterStates({
      loading: true,
      error: null,
    })
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          const err = new Error(`HTTP status code: ${res.status}`)
          err.response = res
          err.status = res.status
          throw err
        }
        return res.json()
      })
      .then(() => {
        router.replace('/auth/login')
        setRegisterStates({
          loading: false,
          error: null,
        })
      })
      .catch((error) => {
        setRegisterStates({
          loading: false,
          error:
            error.status === 409
              ? 'This e-mail already registered'
              : 'An error occurred.',
        })
      })
  }

  const context = useMemo(() => ({
    authStatus,
    userData,
    login,
    loginStates,
    register,
    registerStates,
  }))

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export const ProtectRoute = ({ children }) => {
  const { authStatus } = useContext(AuthContext)
  const pathName = usePathname()

  if (authStatus === 'loading') {
    return <div>Loading....</div>
  }
  if (authStatus === 'unauthenticated' && !NO_AUTH_PAGES.includes(pathName)) {
    return <div>You will redirect to login page...</div>
  }
  if (authStatus === 'unauthenticated' && NO_AUTH_PAGES.includes(pathName)) {
    return children
  }
  return children
}
