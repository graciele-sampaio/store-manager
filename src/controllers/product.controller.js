const { productService } = require('../services');
const errorMap = require('../utils/errorMap');

const productControllerGetAll = async (_req, res) => {
  const { type, message } = await productService.productServiceGetAll();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const productControllerGetById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.productServiceGetById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const insertProductController = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productService.insertProductService(name);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.deleteProductService(id);

  if (type) {
    return res.status(errorMap.mapError(type)).json({ message });
  }

  return res.status(204).end();
};

module.exports = {
  productControllerGetAll,
  productControllerGetById,
  insertProductController,
  deleteProductController,
};
