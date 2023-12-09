const Order = require('../models/Orders');

const getAllOrders = async (req, res) => {
  const orders = await Order.find({});

  res.status(200).json({
    data: orders,
    success: true,
    message: `${req.method} - Request all orders!`,
  });
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findById(id);
  console.log(order);

  res.status(200).json({
    data: order,
    success: true,
    message: `${req.method} - Request a order!`,
  });
};

const createOrder = async (req, res) => {
  const data = req.body;
  const order = await Order.create(data);
  console.log(order);

  res.status(200).json({
    success: true,
    message: `${req.method} - Create a order!`,
  });
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const order = await Order.findByIdAndUpdate(id, data, {
    new: true,
  });
  console.log(order);

  res.status(200).json({
    data: order,
    success: true,
    message: `${req.method} - Update a order!`,
  });
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findByIdAndDelete(id);
  console.log(order);

  res.status(200).json({
    id,
    message: `${req.method} - Delete a order!`,
    success: true,
  });
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
