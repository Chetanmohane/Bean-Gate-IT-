const mongoose = require('mongoose');

const planConfigSchema = new mongoose.Schema({
  courseName: { type: String, default: "MERN Stack" },
  courseTagline: { type: String, default: "Full Stack Web Development" },
  oneTimePrice: { type: Number, default: 6000 },
  oneTimeOriginalPrice: { type: Number, default: 15000 },
  heroOfferPrice: { type: Number, default: 6000 },
  installment1Price: { type: Number, default: 3200 },
  installment2Price: { type: Number, default: 3200 },
  discountPercent: { type: Number, default: 10 },
  oneTimeDiscountPercent: { type: Number, default: 10 },
  installment1DiscountPercent: { type: Number, default: 10 },
  installment2DiscountPercent: { type: Number, default: 10 },
  oneTimeFeatures: { type: [String], default: [] },
  installmentFeatures: { type: [String], default: [] },
  courses: { type: [String], default: ["Frontend Developer", "Backend Developer", "MERN Stack"] },
  colleges: { type: [String], default: ["PDPS College", "BUIT", "Other"] },
  cities: { type: [String], default: ["Bhopal", "Indore", "Jabalpur", "Other"] },
  totalSeats: { type: Number, default: 50 },
  manualSeatsOffset: { type: Number, default: 32 },
  manualSeatsOffsetRegistrationsCount: { type: Number, default: 0 },
  seatsOffsetUpdatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PlanConfig', planConfigSchema);
