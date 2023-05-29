const ProtectedApiRoute = (req, res, requestHandler) => {
  if (!('Authorization' in req.headers)) {
    return res.status(401).json({
      status_code: 401,
      message: 'Not authorized.',
    })
  }

  if (requestHandler) {
    return requestHandler(req, res)
  }

  return res.status(400).json({
    status_code: 400,
    message: 'No request handler specified.',
  })
}

export default ProtectedApiRoute
