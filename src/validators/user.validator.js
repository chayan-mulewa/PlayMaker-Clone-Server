// validators/user.validator.js
const Joi = require("joi");

const userValidator = Joi.object({
  fullName: Joi.string().trim().required().min(1).max(100).messages({
    "string.empty": "Full Name is required",
    "string.base": "Full Name must be a string",
    "string.min": "Full Name must be at least 1 character long",
    "string.max": "Full Name must be at most 100 characters long",
  }),

  email: Joi.string().trim().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
    "string.base": "Email must be a string",
  }),

  password: Joi.string().trim().min(8).required().messages({
    "string.empty": "Password is required",
    "string.base": "Password must be a string",
    "string.min": "Password must be at least 8 characters long",
  }),

  role: Joi.string().trim().required().messages({
    "string.empty": "Role is required",
    "string.base": "Role must be a string",
    "string.min": "Role must be at least 8 characters long",
  }),

  // age: Joi.number().integer().min(0).required().messages({
  //   "number.base": "Age must be a number",
  //   "number.integer": "Age must be an integer",
  //   "number.min": "Age must be a positive number",
  //   "any.required": "Age is required",
  // }),

  // gender: Joi.string()
  //   .trim()
  //   .valid("male", "female", "other")
  //   .required()
  //   .messages({
  //     "string.empty": "Gender is required",
  //     "string.base": "Gender must be a string",
  //     "any.only": "Gender must be one of male, female, or other",
  //   }),

  // phoneCode: Joi.string().trim().length(3).required().messages({
  //   "string.empty": "Phone code is required",
  //   "string.base": "Phone code must be a string",
  //   "string.length": "Phone code must be exactly 2 characters long",
  // }),

  // phone: Joi.string().trim().min(10).max(15).required().messages({
  //   "string.empty": "Phone number is required",
  //   "string.base": "Phone number must be a string",
  //   "string.min": "Phone number must be at least 10 characters long",
  //   "string.max": "Phone number must be at most 15 characters long",
  // }),

  // address: Joi.string().trim().min(1).max(255).required().messages({
  //   "string.empty": "Address is required",
  //   "string.base": "Address must be a string",
  //   "string.min": "Address must be at least 1 character long",
  //   "string.max": "Address must be at most 255 characters long",
  // }),

  // city: Joi.string().trim().min(1).max(100).required().messages({
  //   "string.empty": "City is required",
  //   "string.base": "City must be a string",
  //   "string.min": "City must be at least 1 character long",
  //   "string.max": "City must be at most 100 characters long",
  // }),

  // state: Joi.string().trim().min(1).max(100).required().messages({
  //   "string.empty": "State is required",
  //   "string.base": "State must be a string",
  //   "string.min": "State must be at least 1 character long",
  //   "string.max": "State must be at most 100 characters long",
  // }),

  // pinCode: Joi.string().trim().length(6).required().messages({
  //   "string.empty": "Pin code is required",
  //   "string.base": "Pin code must be a string",
  //   "string.length": "Pin code must be exactly 6 characters long",
  // }),

  // country: Joi.string().trim().min(1).max(100).required().messages({
  //   "string.empty": "Country is required",
  //   "string.base": "Country must be a string",
  //   "string.min": "Country must be at least 1 character long",
  //   "string.max": "Country must be at most 100 characters long",
  // }),
});

module.exports = userValidator;
