import ApiRoute from '@/utils/api_route'
import { getNotebook } from '@/services/notebook';

const RouteHandler = async (request, response, token) => {
  const { id } = request.query;
  const notebook = await getNotebook({ id, user: token })
  return response.status(200).json({ ...notebook })
}

async function handler(req, res) {
  return ApiRoute({
    req,
    res,
    requestHandler: RouteHandler,
    method: 'GET',
  })
}

export default handler
