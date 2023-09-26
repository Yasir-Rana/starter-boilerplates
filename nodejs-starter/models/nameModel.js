const mongoose = require('mongoose');

const nameSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Name', nameSchema);