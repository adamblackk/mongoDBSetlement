const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';
//const mongoURIx = 'mongodb+srv://deneme:lM70sJsIEIbGxNk1@cluster0.2cninsm.mongodb.net/deneme?w=majority&retrywrites=true&authsource=admin&minpoolsize=0'
const client = new MongoClient(url);

async function connectToDatabase(url) {
  try {
    await client.connect();

    console.log("Successfully connected to MongoDB!");
    return client.db('Test'); // Select the 'Test' database
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
    throw error;
  }
}

module.exports = connectToDatabase();
