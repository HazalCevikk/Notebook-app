import { getNotebookList } from '@/services/notebook'
import ApiRoute from '@/utils/api_route'

const RouteHandler = async (request, response, user) => {
  const notebookList = await getNotebookList({ user })
  return response.status(200).json(notebookList)
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
