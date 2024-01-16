import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch data from MongoDB
      const uri = process.env.MONGODB_URI;
      const client = new MongoClient(uri);
      await client.connect();
      const db = client.db('qubicgen');
      const collection = db.collection('contactformdata');
      const data = await collection.find().toArray();
      await client.close();

      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Error fetching data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}