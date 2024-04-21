const mongoose = require('mongoose');

const CelestialBodySchema = new mongoose.Schema({
  name: String,
  type: String, // e.g., planet, asteroid, comet, etc.
  discoveredBy: String,
  discoveryDate: Date
});

const CelestialBody = mongoose.model('CelestialBody', CelestialBodySchema);

module.exports = CelestialBody;
