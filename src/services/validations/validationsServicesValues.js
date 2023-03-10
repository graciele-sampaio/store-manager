const { idSchema, insertProductSchema } = require('./schemas');

const validateProductId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: '' };
};

const validateNewProduct = (name) => {
  const { error } = insertProductSchema.validate({ name });
  
  if (!name) return { type: 'FIELD_IS_REQUIRED', message: error.message };
  
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateProductId,
  validateNewProduct,
};
