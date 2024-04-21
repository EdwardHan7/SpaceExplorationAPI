const express = require('express');
const router = express.Router();
const Spacecraft = require('../models/Spacecraft');
const { validateSpacecraft } = require('../validations/spacecraftValidation');  // Assuming validation logic is exported from this file

// Create a new spacecraft with validation
router.post('/', validateSpacecraft, async (req, res) => {
    try {
        const newSpacecraft = new Spacecraft(req.body);
        const savedSpacecraft = await newSpacecraft.save();
        res.status(201).send(savedSpacecraft);
    } catch (err) {
        // If saving fails, send a 500 error
        res.status(500).send({ message: 'Internal Server Error', error: err.message });
    }
});

// Retrieve all spacecraft
router.get('/', async (req, res) => {
    try {
        const spacecrafts = await Spacecraft.find();
        res.send(spacecrafts);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Retrieve a single spacecraft by id with validation to ensure valid ID
router.get('/:id', async (req, res) => {
    try {
        const spacecraft = await Spacecraft.findById(req.params.id);
        if (!spacecraft) {
            return res.status(404).send({ message: "Spacecraft not found!" });
        }
        res.send(spacecraft);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a spacecraft with validation
router.put('/:id', validateSpacecraft, async (req, res) => {
    try {
        const updatedSpacecraft = await Spacecraft.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSpacecraft) {
            return res.status(404).send({ message: "Spacecraft not found!" });
        }
        res.send(updatedSpacecraft);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a spacecraft
router.delete('/:id', async (req, res) => {
    try {
        const deletedSpacecraft = await Spacecraft.findByIdAndDelete(req.params.id);
        if (!deletedSpacecraft) {
            return res.status(404).send({ message: "Spacecraft not found!" });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
