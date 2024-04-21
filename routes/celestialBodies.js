const express = require('express');
const router = express.Router();
const CelestialBody = require('../models/CelestialBody');

// POST a new celestial body
router.post('/', async (req, res) => {
    const body = new CelestialBody(req.body);
    try {
        const savedBody = await body.save();
        res.status(201).send(savedBody);
    } catch (err) {
        res.status(400).send(err);
    }
});

// GET all celestial bodies
router.get('/', async (req, res) => {
    try {
        const bodies = await CelestialBody.find();
        res.send(bodies);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Retrieve a single celestial body by id
router.get('/:id', async (req, res) => {
    try {
        const body = await CelestialBody.findById(req.params.id);
        if (!body) {
            return res.status(404).send({ message: "Celestial body not found!" });
        }
        res.send(body);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a celestial body
router.put('/:id', async (req, res) => {
    try {
        const updatedBody = await CelestialBody.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBody) {
            return res.status(404).send({ message: "Celestial body not found!" });
        }
        res.send(updatedBody);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a celestial body
router.delete('/:id', async (req, res) => {
    try {
        const deletedBody = await CelestialBody.findByIdAndDelete(req.params.id);
        if (!deletedBody) {
            return res.status(404).send({ message: "Celestial body not found!" });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
