import * as yup from 'yup'
// import { login } from '@/services/auth';

const LOGIN_SCHEMA = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

async function handler(req, res) {
  const isValidSchema = await LOGIN_SCHEMA.isValid(req.body)
  if (!isValidSchema) {
    res.status(422).json({
      status_code: 422,
      error: 'Invalid request body',
    })
    return;
  }

  try {
    // const loginStatus = await login(req.body)
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status_code: 500,
      message: 'An error occurred.',
    })
  }
}

export default handler
