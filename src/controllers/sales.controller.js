const { salesService } = require('../services');
const errorMap = require('../utils/errorMap');

const salesControllerGetAll = async (_req, res) => {
  const { type, message } = await salesService.salesServicesGetAll();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const salesControllerGetById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.salesServicesGetId(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};
module.exports = {
  salesControllerGetAll,
  salesControllerGetById,
};