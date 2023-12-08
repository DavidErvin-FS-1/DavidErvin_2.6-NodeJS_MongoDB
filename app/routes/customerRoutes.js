const router = require('express').Router();

// GET all customers from /api/v1/customer
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Request all customers!`,
  });
});

// GET a customer from /api/v1/customer/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Request a customer!`,
  });
});

// POST a customer to /api/v1/customer
router.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Create a customer!`,
  });
});

// PUT a customer to /api/v1/customer/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Update a customer!`,
  });
});

// DELETE a customer from /api/v1/customer/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    id,
    message: `${req.method} - Delete a customer!`,
    success: true,
  });
});

module.exports = router;
