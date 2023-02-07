import mongoClient from "@/services/mongo";
import bcrypt from 'bcrypt'


async function register({ username, password, firstName, lastName }) {
    const client = await mongoClient.connect()
    try {
        const db = client.db('auth')
        const collection = db.collection('users')
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const insertedDocument = await collection.insertOne({
            username, password: hashedPassword, firstName, lastName
        })
        return insertedDocument
    } catch (e) {

        throw e
    }
}

export {
    register
}