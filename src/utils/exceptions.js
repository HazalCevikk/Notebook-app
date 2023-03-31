class HttpException extends Error {
  constructor(message, statusCode) {
    super(message)
    this.name = 'HandledHttpError'
    this.statusCode = statusCode
    this.json_content = {
      status_code: this.statusCode,
      error: message,
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { HttpException }
