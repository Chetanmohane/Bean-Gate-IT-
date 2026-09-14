const mongoose = require('mongoose');

const refCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discount: { type: String, default: '10%' },
  discountPercent: { type: Number, default: 10 },
  applicablePlan: { type: String, enum: ['all', 'one-time', 'installment'], default: 'all' },
  active: { type: Boolean, default: true },
  created: { type: String, required: true }, // Format: YYYY-MM-DD
  uses: { type: Number, default: 0 },
  creator: { type: String } // username of sub-admin or "admin"
});

module.exports = mongoose.model('RefCode', refCodeSchema);
