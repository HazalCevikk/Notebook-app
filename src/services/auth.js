import bcrypt from 'bcrypt'
import mongoClient from '@/services/mongo';

async function register({
  username, password, firstName, lastName,
}) {
  const client = await mongoClient.connect()
  try {
    const db = client.db('auth')
    const collection = db.collection('users')
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const insertedDocument = await collection.insertOne({
      username, password: hashedPassword, firstName, lastName,
    })
    return insertedDocument
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    await client.close()
  }
}

export {
  // eslint-disable-next-line import/prefer-default-export
  register,
}
