const express = require('express');
const { salesController } = require('../controllers');

const salesRouter = express.Router();

salesRouter.get('/', salesController.salesControllerGetAll);

salesRouter.get('/:id', salesController.salesControllerGetById);

module.exports = {
  salesRouter,
};