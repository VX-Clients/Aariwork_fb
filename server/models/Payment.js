const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  option: String,
  amount: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);
