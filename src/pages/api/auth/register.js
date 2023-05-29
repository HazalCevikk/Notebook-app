import * as yup from 'yup'
import { register } from '@/services/auth';

const REGISTER_SCHEMA = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
})

async function handler(req, res) {
  const isValidSchema = await REGISTER_SCHEMA.isValid(req.body)

  if (!isValidSchema) {
    res.status(429).json({
      status_code: 429,
      error: 'Invalid request body.',
    })
    return;
  }

  try {
    const inserted = await register(req.body)
    res.status(200).json(inserted)
  } catch (e) {
    if (e.name === 'EmailAlreadyRegisteredException') {
      res.status(409).json({
        status_code: 409,
        message: 'User with this email already registered',
      })
      return;
    }
    res.status(500).json({
      status_code: 500,
      message: 'An error occurred.',
    })
  }
}

export default handler
