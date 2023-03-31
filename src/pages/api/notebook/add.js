import * as yup from 'yup'
import ApiRoute from '@/utils/api_route'
import { addNotebook } from '@/services/notebook';

const TEMPLATE_ENUM = [
  'NOTEBOOK',
  'BOARD',
]

const ADD_NOTEBOOK_SCHEMA = yup.object().shape({
  name: yup.string().required(),
  template: yup.string().oneOf(TEMPLATE_ENUM).required(),
})

const RouteHandler = async (request, response, user) => {
  const { name, template } = request.body
  const insertedRow = await addNotebook({ name, template, user })

  return response.status(200).json(insertedRow)
}

async function handler(req, res) {
  return ApiRoute({
    req,
    res,
    requestHandler: RouteHandler,
    method: 'POST',
    validateSchema: ADD_NOTEBOOK_SCHEMA,
  })
}

export default handler
