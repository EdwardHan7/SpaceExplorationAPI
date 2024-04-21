const express = require('express');
const router = express.Router();
const SpaceMission = require('../models/SpaceMission');
const { validateSpaceMission } = require('../validations/spaceMissionValidation');  // Assuming validation logic is exported from this file

// Create a new space mission with validation
router.post('/', validateSpaceMission, async (req, res) => {
    const newMission = new SpaceMission(req.body);
    try {
        const savedMission = await newMission.save();
        res.status(201).send(savedMission);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Retrieve all space missions
router.get('/', async (req, res) => {
    try {
        const missions = await SpaceMission.find();
        res.send(missions);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Retrieve a single space mission by id
router.get('/:id', async (req, res) => {
    try {
        const mission = await SpaceMission.findById(req.params.id);
        if (!mission) {
            return res.status(404).send({ message: "Mission not found!" });
        }
        res.send(mission);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a space mission with validation
router.put('/:id', validateSpaceMission, async (req, res) => {
  try {
    const updatedMission = await SpaceMission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMission) {
      return res.status(404).send({ message: "Mission not found!" });
    }
    res.send(updatedMission);
  } catch (err) {
    res.status(500).send({ message: "Error updating mission", error: err.message });
  }
});
// Delete a space mission
router.delete('/:id', async (req, res) => {
    try {
        const deletedMission = await SpaceMission.findByIdAndDelete(req.params.id);
        if (!deletedMission) {
            return res.status(404).send({ message: "Mission not found!" });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
