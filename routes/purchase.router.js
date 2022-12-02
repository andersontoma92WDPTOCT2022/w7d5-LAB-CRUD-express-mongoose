import express from 'express';
import PurchaseModel from '../models/purchase.model.js';
//
// Iteração 3: Crie as rotas /purchases
const purchaseRote = express.Router();
//
// do index.js-> app -> /purchase/...
//
// 3.1 Crie a rota POST /purchases
//
purchaseRote.post('/purchases', async (req, res) => {
  try {
    //
    const newPurchase = await PurchaseModel.create({
      ...req.body,
    });

    return res.status(201).json(newPurchase);
    //
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});
//
// 3.2 Crie a rota GET /purchases/:purchaseId
//
purchaseRote.get('/purchases/:purchaseId', async (req, res) => {
  try {
    const { purchaseId } = req.params;
    //
    const onePurchase = await PurchaseModel.findById(purchaseId).populate(
      'album'
    );

    return res.status(201).json(onePurchase);
    //
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});
//
export default purchaseRote;
