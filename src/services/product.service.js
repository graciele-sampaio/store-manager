const { productModel } = require('../models');
const {
  validateProductId,
  validateNewProduct,
} = require('./validations/validationsServicesValues');

const productServiceGetAll = async () => {
  const products = await productModel.productModelGetAll();
  return { type: null, message: products };
};

const productServiceGetById = async (productId) => {
  const error = validateProductId(productId);
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

const updateProductService = async (productId) => {
  const error = validateProductId(productId);
  if (error.type) return error;

    const errorTwo = validateNewProduct(name);
  if (errorTwo.type) return errorTwo;

  await productModel.updateProductModel(productId, name);
  const productGetById = await productModel.productModelGetById(productId);

  return { type: null, message: productGetById };
};

const deleteProductService = async (productId) => {
  const error = await validateProductId(productId);
  if (error.type) return error;
  
 const deleteProduct = await productModel.deleteProductModel(productId);
  if (deleteProduct.affectedRows) return { type: null, message: null };
  if (!deleteProduct.affectedRows) {
 return {
    type: 'PRODUCT_NOT_FOUND', message: 'Product not found',
  }; 
}
};

module.exports = {
  productServiceGetAll,
  productServiceGetById,
  insertProductService,
  updateProductService,
  deleteProductService,
};
