const Customer = require('../models/Customers');

const getAllCustomers = async (req, res) => {
  const customers = await Customer.find({});

  res.status(200).json({
    data: customers,
    success: true,
    message: `${req.method} - Request all customers!`,
  });
};

const getCustomerById = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Request a customer!`,
  });
};

const createCustomer = async (req, res) => {
  const data = req.body;
  const createCustomer = await Customer.create(data);
  console.log(createCustomer);

  res.status(200).json({
    success: true,
    message: `${req.method} - Create a customer!`,
  });
};

const updateCustomer = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Update a customer!`,
  });
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    id,
    message: `${req.method} - Delete a customer!`,
    success: true,
  });
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
