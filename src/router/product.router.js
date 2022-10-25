const express = require('express');
const { productController } = require('../controllers');

const productRouter = express.Router();

productRouter.get('/', productController.productControllerGetAll);

productRouter.get('/:id', productController.productControllerGetById);

productRouter.post('/', productController.insertProductController);

productRouter.delete('/:id', productController.deleteProductController);

module.exports = {
  productRouter,
};