const { salesModel } = require('../models');

const salesServicesGetAll = async () => {
  const sales = await salesModel.salesModelGetAll();
  return { type: null, message: sales };
};

const salesServicesGetId = async (saleId) => {
  const sale = await salesModel.salesModelGetId(saleId);
  if (!sale.length) {
    return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  }
  return { type: null, message: sale };
};

module.exports = {
  salesServicesGetAll,
  salesServicesGetId,
};
