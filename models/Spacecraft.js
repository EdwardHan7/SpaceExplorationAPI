const mongoose = require('mongoose');

const SpacecraftSchema = new mongoose.Schema({
  name: String,
  manufacturer: String,
  launchDate: Date,
  status: String
});

const Spacecraft = mongoose.model('Spacecraft', SpacecraftSchema);

module.exports = Spacecraft;
