import bcrypt from 'bcrypt'
import mongoClient from '@/services/mongo'

class EmailAlreadyRegisteredException extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name
  }
}

async function register({
  email, password, firstName, lastName,
}) {
  const client = await mongoClient.connect()
  try {
    const db = client.db('auth')
    const collection = db.collection('users')
    const user = await collection.findOne({ email })
    if (user) {
      throw new EmailAlreadyRegisteredException('Email already registered.')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const insertedDocument = await collection.insertOne({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    })
    return insertedDocument
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    await client.close()
  }
}

async function login({ email, password }) {
  const client = await mongoClient.connect()
  try {
    const db = client.db('auth')
    const collection = db.collection('users')
    const user = await collection.findOne({ email })
    if (!user) {
      return null
    }
    const passCheck = await bcrypt.compare(password, user.password)
    if (passCheck) {
      return user
    }
    return null
  } catch (e) {
    console.error(e)
    return null
  } finally {
    await client.close()
  }
}

export {
  // eslint-disable-next-line import/prefer-default-export
  register,
  login,
}
