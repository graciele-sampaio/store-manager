const connection = require('./db/connection');

const productModelGetAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM  StoreManager.products ORDER BY id ASC',
  );
  return result;
};

const productModelGetById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return product;
};

const insertProductModel = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [product.name],
  );
  return insertId;
};

module.exports = {
  productModelGetAll,
  productModelGetById,
  insertProductModel,
};