import { getToken } from 'next-auth/jwt'
import { HttpException } from './exceptions'

const secret = process.env.SECRET_KEY

const ApiRoute = async ({
  req,
  res,
  requestHandler,
  method,
  validateSchema,
}) => {
  if (req.method !== method) {
    return res.status(405).json({
      status_code: 405,
      message: 'Method not allowed.',
    })
  }

  const token = await getToken({ req, secret })
  if (!token) {
    return res.status(401).json({
      status_code: 401,
      message: 'Not authorized.',
    })
  }

  if (validateSchema) {
    try {
      await validateSchema.validate(req.body || {}, { abortEarly: false })
    } catch (err) {
      return res.status(422).json({
        status_code: 422,
        error: 'Invalid request body.',
        fields: err.errors,
      })
    }
  }

  if (requestHandler) {
    try {
      return await requestHandler(req, res, token)
    } catch (err) {
      if (err instanceof HttpException) {
        return res.status(err.statusCode).json(err.json_content)
      }
      return res.status(500).json({
        status_code: 500,
        error: `${err.name} : ${err.message}`,
      })
    }
  }

  return res.status(400).json({
    status_code: 400,
    message: 'No request handler specified.',
  })
}

export default ApiRoute
