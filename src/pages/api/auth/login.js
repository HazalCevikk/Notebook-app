import * as yup from 'yup'
// import { login } from '@/services/auth';

const LOGIN_SCHEMA = yup.object().shape({
  username: yup.string().email().required(),
  password: yup.string().required(),
})

async function handler(req, res) {
  const isValidSchema = await LOGIN_SCHEMA.isValid(req.body)
  if (!isValidSchema) {
    res.status(429).json({
      status_code: 429,
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
