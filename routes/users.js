var express = require('express');
var router = express.Router();
var connectMongoDB = require('../bin/mongoDb')

/* GET users listing. */
router.get('/connect', async (req, res, next) => {
  try {
    const db = await connectMongoDB;
    const collection = db.collection('test');

    // Veriyi toArray ile getiriyoruz
    const data = await collection.find({}).toArray();;
    // Veriyi JSON formatında döndürüyoruz
    res.json(data);
  } catch (error) {
    console.error("Hata oluştu:", error);
    res.status(500).send('Bir hata oluştu');
  }
});



module.exports = router;
