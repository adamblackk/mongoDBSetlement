const { MongoClient } = require('mongodb');

// MongoDB bağlantı URL'si
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connectToDatabase() {
  await client.connect();
  console.log("MongoDB'ye başarılı bir şekilde bağlandınız!");
  return client.db('Test'); // 'Test' veritabanını seçiyoruz
}

module.exports = connectToDatabase();
