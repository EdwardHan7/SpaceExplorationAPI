const Joi = require('joi');

// Updated schema to include the 'type' field
const spacecraftSchema = Joi.object({
    name: Joi.string().min(3).optional(),
    manufacturer: Joi.string().optional(),
    launchDate: Joi.date().iso().optional(),
    type: Joi.string().optional(),
    status: Joi.string().valid('Operational', 'Retired', 'Under Construction').required()  // Assume status is always required for updates
});

// Function to validate spacecraft data
const validateSpacecraft = (req, res, next) => {
    spacecraftSchema.validateAsync(req.body)
        .then(() => next())
        .catch(err => {
            res.status(400).json({ error: err.details[0].message });
        });
};

module.exports = {
    validateSpacecraft
};
