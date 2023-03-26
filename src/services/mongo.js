import { MongoClient } from 'mongodb';

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}`;
const mongoClient = new MongoClient(connectionString);

export default mongoClient;
