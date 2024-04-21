const mongoose = require('mongoose');

const SpaceMissionSchema = new mongoose.Schema({
  name: String,
  missionType: String,
  status: String
});

const SpaceMission = mongoose.model('SpaceMission', SpaceMissionSchema);

module.exports = SpaceMission;
