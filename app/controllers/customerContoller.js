const getAllCustomers = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Request all customers!`,
  });
};

const getCustomerById = (req, res) => {
  (req, res) => {
    const { id } = req.params;

    res.status(200).json({
      id,
      success: true,
      message: `${req.method} - Request a customer!`,
    });
  };
};

const createCustomer = (req, res) => {
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
