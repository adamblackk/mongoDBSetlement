var express = require('express');
var router = express.Router();
var connectMongoDB = require('../bin/mongoDb')

/* GET users listing. */
router.get('/insert', async (req, res, next) => {
  try {
    const db = await connectMongoDB;
    const collection = db.collection('newCollection');

     // Eklenecek örnek veri
     const data = { name: "Yeni xxxx", description: "Bu yeni koleksiyona eklenen bir veri örneğidir" };
     const insertResult = await collection.insertOne(data);

    // Ekleme işleminin başarılı olup olmadığını kontrol edelim
    if (insertResult.acknowledged && insertResult.insertedId) {
        res.json({
          success: true,
          message: 'Veri başarıyla eklendi',
          testCollectionData: data,
          insertedDataId: insertResult.insertedId, // Eklenen verinin _id'si
        });
      } else {
        // Eğer acknowledged veya insertedId yoksa işlem başarısız olmuştur
        res.status(500).json({
          success: false,
          message: 'Veri eklenemedi',
        });
    }
  } catch (error) {
    console.error("Hata oluştu:", error);
    res.status(500).send('Bir hata oluştu');
  }
});



module.exports = router;
