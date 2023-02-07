import mongoClient from "@/services/mongo";

async function register({ username, password, firstName, lastName }) {
    const client = await mongoClient.connect()
    try {
        const db = client.db('auth')
        const collection = db.collection('users')
        const insertedDocument = await collection.insertOne({
            username, password, firstName, lastName
        })
        return insertedDocument
    } catch (e) {

        throw e
    }

}

export {
    register
}