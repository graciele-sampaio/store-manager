const { productModel } = require('../models');
const {
  validateId,
  validateNewProduct,
} = require('./validations/validationsServicesValues');

const productServiceGetAll = async () => {
  const products = await productModel.productModelGetAll();
  return { type: null, message: products };
};

const productServiceGetById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;

  const product = await productModel.productModelGetById(productId);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const insertProductService = async (name) => {
  const error = validateNewProduct(name);
  if (error.type) return error;

  const newProductId = await productModel.insertProductModel({ name });
  const newProduct = await productModel.productModelGetById(newProductId);

  return { type: null, message: newProduct };
};

module.exports = {
  productServiceGetAll,
  productServiceGetById,
  insertProductService,
};
