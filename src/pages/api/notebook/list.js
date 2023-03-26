import ProtectedApiRoute from '@/utils/protect_api_route'

async function handler(req, res) {
  return ProtectedApiRoute(req, res, (request, response) => response.status(200).json({
    list: ['a', 'b', 'c'],
  }))
}

export default handler
