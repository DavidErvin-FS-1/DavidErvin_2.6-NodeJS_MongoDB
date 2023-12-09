const mongoose = require('mongoose');
const moment = require('moment');

const orderSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      default: moment(Date.now).format('YYYY-MM-DD'),
    },
    amount: {
      type: Number,
      default: 0,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
