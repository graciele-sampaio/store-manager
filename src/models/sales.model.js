const connection = require('./db/connection');
  
const salesModelGetAll = async () => {
  const [resultAll] = await connection.execute(
    `SELECT sale_id AS saleId, date, product_id AS productId,quantity
     FROM StoreManager.sales_products
     INNER JOIN StoreManager.sales ON sale_id = id
     ORDER BY saleId, productId`,
);
  return resultAll;
};

const salesModelGetId = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT date, product_id AS productId, quantity
  FROM StoreManager.sales A
  INNER JOIN StoreManager.sales_products B
  ON A.id = B.sale_id
  WHERE B.sale_id = ?`,
    [saleId],
  );
  return result;
};

module.exports = {
  salesModelGetAll,
  salesModelGetId,
};