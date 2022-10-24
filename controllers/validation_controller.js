const Joi = require("joi");

const validators = {
  register: Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  }),
};

module.exports = validators;
