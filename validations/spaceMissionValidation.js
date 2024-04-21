const Joi = require('joi');

// General schema that can adapt based on the operation type
const spaceMissionSchema = Joi.object({
  name: Joi.string().when('$isUpdate', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
  missionType: Joi.string().when('$isUpdate', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
  status: Joi.string().optional()
});

// Validate space mission with a single function
const validateSpaceMission = (req, res, next) => {
  // Determine if it's an update based on HTTP method or presence of an ID in parameters
  const isUpdate = req.method === 'PUT' || req.params.id;
  const options = { context: { isUpdate } };

  const { error } = spaceMissionSchema.validate(req.body, options);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = {
  validateSpaceMission
};
