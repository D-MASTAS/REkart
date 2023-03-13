import { MongoClient } from 'mongodb';
// import dotenv from 'dotenv';
// dotenv.config();
// console.log(process.env.MONGO_URI);

const client = new MongoClient('mongodb+srv://0Tanq:Tanishq@cluster0.ujajqqe.mongodb.net/?retryWrites=true&w=majority');


async function connectDB() {
  try {
    await client.connect();
    // await  listDatabases(client);
    console.log('Connected to MongoDB');
    
    // Access your database and collection
    // const database = client.db('Shopping');
    // const collection = database.collection('Info');
    
    // Do something with the collection
    
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
connectDB();
export default connectDB;
