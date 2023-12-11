const Order = require('../models/Orders');
const { errorHandler } = require('../helpers/errorHandler');

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});

    res.status(200).json({
      data: orders,
      success: true,
      message: `${req.method} - Request all orders!`,
    });
  } catch (error) {
    errorHandler(res, 500, 'Server error', error);
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    console.log(order);

    res.status(200).json({
      data: order,
      success: true,
      message: `${req.method} - Request a order!`,
    });
  } catch (error) {
    errorHandler(res, 500, 'Server error', error);
  }
};

const createOrder = async (req, res) => {
  try {
    const data = req.body;
    const order = await Order.create(data);
    console.log(order);

    res.status(200).json({
      success: true,
      message: `${req.method} - Create a order!`,
    });
  } catch (error) {
    errorHandler(res, 500, 'Server error', error);
  }
};

const updateOrder = async (req, res) => {
  try {
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
  } catch (error) {
    errorHandler(res, 500, 'Server error', error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    console.log(order);

    res.status(200).json({
      id,
      message: `${req.method} - Delete a order!`,
      success: true,
    });
  } catch (error) {
    errorHandler(res, 500, 'Server error', error);
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
