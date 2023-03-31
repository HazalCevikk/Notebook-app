import { ObjectId } from 'mongodb'
import mongoClient from '@/services/mongo'
import { HttpException } from '@/utils/exceptions'

async function addNotebook({ name, template, user }) {
  const client = await mongoClient.connect()

  try {
    const db = client.db(user._id)
    const collection = db.collection('notebooks')
    const insertedRow = await collection.insertOne({
      name,
      template,
    })
    return insertedRow
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    await client.close()
  }
}

async function getNotebook({ id, user }) {
  const client = await mongoClient.connect()

  try {
    const db = client.db(user._id)
    const collection = db.collection('notebooks')
    const findRow = await collection.findOne({ _id: new ObjectId(id) })
    if (!findRow) {
      throw new HttpException('Notebook not found', 404)
    }
    return findRow
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    await client.close()
  }
}

async function getNotebookList({ user }) {
  const client = await mongoClient.connect()
  try {
    const db = client.db(user._id)
    const collection = db.collection('notebooks')
    const cursorNotebookList = await collection.find({})
    const notebookList = []
    await cursorNotebookList.forEach((item) => notebookList.push(item))
    if (notebookList.length === 0) {
      throw new HttpException('No notebook found.', 404)
    }
    return notebookList
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    await client.close()
  }
}

export { addNotebook, getNotebook, getNotebookList }
