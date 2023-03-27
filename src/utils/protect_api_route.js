import { getToken } from 'next-auth/jwt'

const secret = process.env.SECRET_KEY

const ProtectedApiRoute = async (req, res, requestHandler) => {
  const token = await getToken({ req, secret })
  if (!token) {
    return res.status(401).json({
      status_code: 401,
      message: 'Not authorized.',
    })
  }

  if (requestHandler) {
    return requestHandler(req, res, token)
  }

  return res.status(400).json({
    status_code: 400,
    message: 'No request handler specified.',
  })
}

export default ProtectedApiRoute
