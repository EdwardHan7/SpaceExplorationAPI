const Joi = require('joi');

// Define the schema for validating celestial body data
const celestialBodySchema = Joi.object({
    name: Joi.string().min(3).required(),
    type: Joi.string().required(),
    discoveredBy: Joi.string().optional(),
    discoveryDate: Joi.date().iso(),
    characteristics: Joi.object({
        size: Joi.number().optional(),
        distanceFromEarth: Joi.number().optional()
    }).optional()
});

// Function to validate celestial body data
const validateCelestialBody = async (data) => {
    try {
        await celestialBodySchema.validateAsync(data);
    } catch (err) {
        throw err;
    }
};

module.exports = {
    validateCelestialBody
};
