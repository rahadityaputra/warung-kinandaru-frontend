import Joi from "joi";

export const confirmationValidation = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  address: Joi.string().alphanum().min(3).max(100).required(),
  phoneNumber: Joi.string().pattern(/^[0-9\-\(\)\+\s]+$/)
    .min(8)
    .max(20)
    .messages({
      'string.base': 'Phone number must be a string.',
      'string.empty': 'Phone number cannot be empty.',
      'string.min': 'Phone number should have a minimum length of {#limit} characters.',
      'string.max': 'Phone number should have a maximum length of {#limit} characters.',
      'string.pattern.base': 'Phone number contains invalid characters. Only numbers, +, -, (), and spaces are allowed.'
    })
})
