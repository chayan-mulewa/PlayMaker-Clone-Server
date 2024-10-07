// validators/measurement.validator.js
const Joi = require("joi");

const shirtMeasurementValidator = Joi.object({
  userID: Joi.string().required().messages({
    "string.empty": "User ID is required",
    "any.required": "User ID is required",
  }),

  profileName: Joi.string()
    .trim()
    .lowercase()
    .min(2)
    .max(100)
    .pattern(/^[a-zA-Z0-9\s]+$/)
    .required()
    .messages({
      "string.empty": "Profile name is required",
      "string.min": "Profile name must be at least 2 characters long",
      "string.max": "Profile name cannot exceed 100 characters",
      "string.pattern.base":
        "Profile name must contain only alphanumeric characters",
      "any.required": "Profile name is required",
    }),

  height: Joi.number().min(120).max(200).required().messages({
    "number.base": "Height must be a number",
    "number.empty": "Height is required",
    "number.min": "Height must be at least 120 cm",
    "number.max": "Height cannot exceed 200 cm",
    "any.required": "Height is required",
  }),
  weight: Joi.number().min(50).max(150).required().messages({
    "number.base": "Weight must be a number",
    "number.empty": "Weight is required",
    "number.min": "Weight must be at least 50 kg",
    "number.max": "Weight cannot exceed 150 kg",
    "any.required": "Weight is required",
  }),
  bodytype: Joi.string()
    .valid("slim", "fit", "average", "muscular")
    .required()
    .messages({
      "string.empty": "Bodytype of measurement is required",
      "any.only":
        "Bodytype of measurement must be either 'slim', 'fit', 'average', 'muscular'",
      "any.required": "Bodytype of measurement is required",
    }),
  neck: Joi.number().min(10).max(60).required().messages({
    "number.base": "Neck size must be a number",
    "number.empty": "Neck size is required",
    "number.min": "Neck size must be at least 10 cm",
    "number.max": "Neck size cannot exceed 60 cm",
    "any.required": "Neck size is required",
  }),

  chest: Joi.number().min(60).max(200).required().messages({
    "number.base": "Chest size must be a number",
    "number.empty": "Chest size is required",
    "number.min": "Chest size must be at least 60 cm",
    "number.max": "Chest size cannot exceed 200 cm",
    "any.required": "Chest size is required",
  }),

  waist: Joi.number().min(50).max(180).required().messages({
    "number.base": "Waist size must be a number",
    "number.empty": "Waist size is required",
    "number.min": "Waist size must be at least 50 cm",
    "number.max": "Waist size cannot exceed 180 cm",
    "any.required": "Waist size is required",
  }),

  hip: Joi.number()
    .min(60)
    .max(180)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Hip size must be a number",
      "number.min": "Hip size must be at least 60 cm",
      "number.max": "Hip size cannot exceed 180 cm",
    }),

  shoulder: Joi.number().min(30).max(70).required().messages({
    "number.base": "Shoulder width must be a number",
    "number.empty": "Shoulder width is required",
    "number.min": "Shoulder width must be at least 30 cm",
    "number.max": "Shoulder width cannot exceed 70 cm",
    "any.required": "Shoulder width is required",
  }),

  sleeve: Joi.number().min(40).max(100).required().messages({
    "number.base": "Sleeve length must be a number",
    "number.empty": "Sleeve length is required",
    "number.min": "Sleeve length must be at least 40 cm",
    "number.max": "Sleeve length cannot exceed 100 cm",
    "any.required": "Sleeve length is required",
  }),

  armHole: Joi.number().min(30).max(80).required().messages({
    "number.base": "Armhole size must be a number",
    "number.empty": "Armhole size is required",
    "number.min": "Armhole size must be at least 30 cm",
    "number.max": "Armhole size cannot exceed 80 cm",
    "any.required": "Armhole size is required",
  }),

  cuff: Joi.number().min(10).max(30).required().messages({
    "number.base": "Cuff size must be a number",
    "number.empty": "Cuff size is required",
    "number.min": "Cuff size must be at least 10 cm",
    "number.max": "Cuff size cannot exceed 30 cm",
    "any.required": "Cuff size is required",
  }),

  shirtLength: Joi.number().min(60).max(120).required().messages({
    "number.base": "Shirt length must be a number",
    "number.empty": "Shirt length is required",
    "number.min": "Shirt length must be at least 60 cm",
    "number.max": "Shirt length cannot exceed 120 cm",
    "any.required": "Shirt length is required",
  }),

  backLength: Joi.number().min(60).max(120).allow(null).messages({
    "number.base": "Back length must be a number",
    "number.min": "Back length must be at least 60 cm",
    "number.max": "Back length cannot exceed 120 cm",
  }),

  frontLength: Joi.number().min(60).max(120).allow(null).messages({
    "number.base": "Front length must be a number",
    "number.min": "Front length must be at least 60 cm",
    "number.max": "Front length cannot exceed 120 cm",
  }),

  bicep: Joi.number().min(20).max(70).required().messages({
    "number.base": "Bicep size must be a number",
    "number.empty": "Bicep size is required",
    "number.min": "Bicep size must be at least 20 cm",
    "number.max": "Bicep size cannot exceed 70 cm",
    "any.required": "Bicep size is required",
  }),

  wrist: Joi.number().min(10).max(30).allow(null).messages({
    "number.base": "Wrist size must be a number",
    "number.min": "Wrist size must be at least 10 cm",
    "number.max": "Wrist size cannot exceed 30 cm",
  }),

  pocketWidth: Joi.number().min(5).max(10).allow(null).messages({
    "number.base": "Pocket Width size must be a number",
    "number.min": "Pocket Width size must be at least 5 cm",
    "number.max": "Pocket Width size cannot exceed 10 cm",
  }),

  pocketHeight: Joi.number().min(5).max(10).allow(null).messages({
    "number.base": "Pocket Height size must be a number",
    "number.min": "Pocket Height size must be at least 5 cm",
    "number.max": "Pocket Height size cannot exceed 10 cm",
  }),

  unit: Joi.string().valid("cm", "inches").required().messages({
    "string.empty": "Unit of measurement is required",
    "any.only": "Unit of measurement must be either 'cm' or 'inches'",
    "any.required": "Unit of measurement is required",
  }),
});
const poloShirtMeasurementValidator = Joi.object({
  userID: Joi.string().required().messages({
    "string.empty": "User ID is required",
    "any.required": "User ID is required",
  }),

  profileName: Joi.string()
    .trim()
    .lowercase()
    .min(2)
    .max(100)
    .pattern(/^[a-zA-Z0-9\s]+$/)
    .required()
    .messages({
      "string.empty": "Profile name is required",
      "string.min": "Profile name must be at least 2 characters long",
      "string.max": "Profile name cannot exceed 100 characters",
      "string.pattern.base":
        "Profile name must contain only alphanumeric characters",
      "any.required": "Profile name is required",
    }),

  height: Joi.number().min(120).max(200).required().messages({
    "number.base": "Height must be a number",
    "number.empty": "Height is required",
    "number.min": "Height must be at least 120 cm",
    "number.max": "Height cannot exceed 200 cm",
    "any.required": "Height is required",
  }),
  weight: Joi.number().min(50).max(150).required().messages({
    "number.base": "Weight must be a number",
    "number.empty": "Weight is required",
    "number.min": "Weight must be at least 50 kg",
    "number.max": "Weight cannot exceed 150 kg",
    "any.required": "Weight is required",
  }),
  bodytype: Joi.string()
    .valid("slim", "fit", "average", "muscular")
    .required()
    .messages({
      "string.empty": "Bodytype of measurement is required",
      "any.only":
        "Bodytype of measurement must be either 'slim', 'fit', 'average', 'muscular'",
      "any.required": "Bodytype of measurement is required",
    }),
  neck: Joi.number().min(10).max(60).required().messages({
    "number.base": "Neck size must be a number",
    "number.empty": "Neck size is required",
    "number.min": "Neck size must be at least 10 cm",
    "number.max": "Neck size cannot exceed 60 cm",
    "any.required": "Neck size is required",
  }),

  chest: Joi.number().min(60).max(200).required().messages({
    "number.base": "Chest size must be a number",
    "number.empty": "Chest size is required",
    "number.min": "Chest size must be at least 60 cm",
    "number.max": "Chest size cannot exceed 200 cm",
    "any.required": "Chest size is required",
  }),

  waist: Joi.number()
    .min(50)
    .max(180)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Waist size must be a number",
      "number.min": "Waist size must be at least 50 cm",
      "number.max": "Waist size cannot exceed 180 cm",
    }),

  hip: Joi.number()
    .min(60)
    .max(180)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Hip size must be a number",
      "number.min": "Hip size must be at least 60 cm",
      "number.max": "Hip size cannot exceed 180 cm",
    }),

  shoulderWidth: Joi.number().min(30).max(70).required().messages({
    "number.base": "Shoulder width must be a number",
    "number.empty": "Shoulder width is required",
    "number.min": "Shoulder width must be at least 30 cm",
    "number.max": "Shoulder width cannot exceed 70 cm",
    "any.required": "Shoulder width is required",
  }),

  sleeveLength: Joi.number()
    .min(40)
    .max(100)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Sleeve length must be a number",
      "number.min": "Sleeve length must be at least 40 cm",
      "number.max": "Sleeve length cannot exceed 100 cm",
    }),

  armHole: Joi.number()
    .min(30)
    .max(80)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Armhole size must be a number",
      "number.min": "Armhole size must be at least 30 cm",
      "number.max": "Armhole size cannot exceed 80 cm",
    }),

  cuffWidth: Joi.number()
    .min(10)
    .max(30)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Cuff width must be a number",
      "number.min": "Cuff width must be at least 10 cm",
      "number.max": "Cuff width cannot exceed 30 cm",
    }),

  bicep: Joi.number()
    .min(20)
    .max(70)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Bicep size must be a number",
      "number.min": "Bicep size must be at least 20 cm",
      "number.max": "Bicep size cannot exceed 70 cm",
    }),

  sleeveOpening: Joi.number()
    .min(10)
    .max(30)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Sleeve opening must be a number",
      "number.min": "Sleeve opening must be at least 10 cm",
      "number.max": "Sleeve opening cannot exceed 30 cm",
    }),

  backLength: Joi.number()
    .min(60)
    .max(120)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Back length must be a number",
      "number.min": "Back length must be at least 60 cm",
      "number.max": "Back length cannot exceed 120 cm",
    }),

  frontLength: Joi.number()
    .min(60)
    .max(120)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Front length must be a number",
      "number.min": "Front length must be at least 60 cm",
      "number.max": "Front length cannot exceed 120 cm",
    }),

  poloShirtLength: Joi.number().min(60).max(120).required().messages({
    "number.base": "Polo shirt length must be a number",
    "number.empty": "Polo shirt length is required",
    "number.min": "Polo shirt length must be at least 60 cm",
    "number.max": "Polo shirt length cannot exceed 120 cm",
    "any.required": "Polo shirt length is required",
  }),

  unit: Joi.string().valid("cm", "inches").required().messages({
    "string.empty": "Unit of measurement is required",
    "any.only": "Unit of measurement must be either 'cm' or 'inches'",
    "any.required": "Unit of measurement is required",
  }),
});
const coatMeasurementValidator = Joi.object({
  userID: Joi.string().required().messages({
    "string.empty": "User ID is required",
    "any.required": "User ID is required",
  }),

  profileName: Joi.string()
    .trim()
    .lowercase()
    .min(2)
    .max(100)
    .pattern(/^[a-zA-Z0-9\s]+$/)
    .required()
    .messages({
      "string.empty": "Profile name is required",
      "string.min": "Profile name must be at least 2 characters long",
      "string.max": "Profile name cannot exceed 100 characters",
      "string.pattern.base":
        "Profile name must contain only alphanumeric characters",
      "any.required": "Profile name is required",
    }),

  height: Joi.number().min(120).max(200).required().messages({
    "number.base": "Height must be a number",
    "number.empty": "Height is required",
    "number.min": "Height must be at least 120 cm",
    "number.max": "Height cannot exceed 200 cm",
    "any.required": "Height is required",
  }),
  weight: Joi.number().min(50).max(150).required().messages({
    "number.base": "Weight must be a number",
    "number.empty": "Weight is required",
    "number.min": "Weight must be at least 50 kg",
    "number.max": "Weight cannot exceed 150 kg",
    "any.required": "Weight is required",
  }),
  bodytype: Joi.string()
    .valid("slim", "fit", "average", "muscular")
    .required()
    .messages({
      "string.empty": "Bodytype of measurement is required",
      "any.only":
        "Bodytype of measurement must be either 'slim', 'fit', 'average', 'muscular'",
      "any.required": "Bodytype of measurement is required",
    }),

  neck: Joi.number().min(10).max(60).required().messages({
    "number.base": "Neck size must be a number",
    "number.empty": "Neck size is required",
    "number.min": "Neck size must be at least 10 cm",
    "number.max": "Neck size cannot exceed 60 cm",
    "any.required": "Neck size is required",
  }),

  chest: Joi.number().min(60).max(200).required().messages({
    "number.base": "Chest size must be a number",
    "number.empty": "Chest size is required",
    "number.min": "Chest size must be at least 60 cm",
    "number.max": "Chest size cannot exceed 200 cm",
    "any.required": "Chest size is required",
  }),

  waist: Joi.number().min(50).max(180).required().messages({
    "number.base": "Waist size must be a number",
    "number.empty": "Waist size is required",
    "number.min": "Waist size must be at least 50 cm",
    "number.max": "Waist size cannot exceed 180 cm",
    "any.required": "Waist size is required",
  }),

  hip: Joi.number()
    .min(60)
    .max(180)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Hip size must be a number",
      "number.min": "Hip size must be at least 60 cm",
      "number.max": "Hip size cannot exceed 180 cm",
    }),

  shoulderWidth: Joi.number().min(30).max(70).required().messages({
    "number.base": "Shoulder width must be a number",
    "number.empty": "Shoulder width is required",
    "number.min": "Shoulder width must be at least 30 cm",
    "number.max": "Shoulder width cannot exceed 70 cm",
    "any.required": "Shoulder width is required",
  }),

  sleeveLength: Joi.number().min(40).max(100).required().messages({
    "number.base": "Sleeve length must be a number",
    "number.empty": "Sleeve length is required",
    "number.min": "Sleeve length must be at least 40 cm",
    "number.max": "Sleeve length cannot exceed 100 cm",
    "any.required": "Sleeve length is required",
  }),

  armHole: Joi.number().min(30).max(80).required().messages({
    "number.base": "Armhole size must be a number",
    "number.empty": "Armhole size is required",
    "number.min": "Armhole size must be at least 30 cm",
    "number.max": "Armhole size cannot exceed 80 cm",
    "any.required": "Armhole size is required",
  }),

  cuff: Joi.number().min(10).max(30).required().messages({
    "number.base": "Cuff size must be a number",
    "number.empty": "Cuff size is required",
    "number.min": "Cuff size must be at least 10 cm",
    "number.max": "Cuff size cannot exceed 30 cm",
    "any.required": "Cuff size is required",
  }),

  bicep: Joi.number().min(20).max(70).required().messages({
    "number.base": "Bicep size must be a number",
    "number.empty": "Bicep size is required",
    "number.min": "Bicep size must be at least 20 cm",
    "number.max": "Bicep size cannot exceed 70 cm",
    "any.required": "Bicep size is required",
  }),

  wrist: Joi.number()
    .min(10)
    .max(30)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Wrist size must be a number",
      "number.min": "Wrist size must be at least 10 cm",
      "number.max": "Wrist size cannot exceed 30 cm",
    }),

  elbow: Joi.number()
    .min(10)
    .max(30)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Elbow size must be a number",
      "number.min": "Elbow size must be at least 10 cm",
      "number.max": "Elbow size cannot exceed 30 cm",
    }),

  backLength: Joi.number()
    .min(60)
    .max(120)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Back length must be a number",
      "number.min": "Back length must be at least 60 cm",
      "number.max": "Back length cannot exceed 120 cm",
    }),

  frontLength: Joi.number()
    .min(60)
    .max(120)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Front length must be a number",
      "number.min": "Front length must be at least 60 cm",
      "number.max": "Front length cannot exceed 120 cm",
    }),

  coatLength: Joi.number().min(60).max(120).required().messages({
    "number.base": "Coat length must be a number",
    "number.empty": "Coat length is required",
    "number.min": "Coat length must be at least 60 cm",
    "number.max": "Coat length cannot exceed 120 cm",
    "any.required": "Coat length is required",
  }),

  unit: Joi.string().valid("cm", "inches").required().messages({
    "string.empty": "Unit of measurement is required",
    "any.only": "Unit of measurement must be either 'cm' or 'inches'",
    "any.required": "Unit of measurement is required",
  }),
});
const overcoatMeasurementValidator = Joi.object({
  userID: Joi.string().required().messages({
    "string.empty": "User ID is required",
    "any.required": "User ID is required",
  }),

  profileName: Joi.string()
    .trim()
    .lowercase()
    .min(2)
    .max(100)
    .pattern(/^[a-zA-Z0-9\s]+$/)
    .required()
    .messages({
      "string.empty": "Profile name is required",
      "string.min": "Profile name must be at least 2 characters long",
      "string.max": "Profile name cannot exceed 100 characters",
      "string.pattern.base":
        "Profile name must contain only alphanumeric characters",
      "any.required": "Profile name is required",
    }),

  height: Joi.number().min(120).max(200).required().messages({
    "number.base": "Height must be a number",
    "number.empty": "Height is required",
    "number.min": "Height must be at least 120 cm",
    "number.max": "Height cannot exceed 200 cm",
    "any.required": "Height is required",
  }),
  weight: Joi.number().min(50).max(150).required().messages({
    "number.base": "Weight must be a number",
    "number.empty": "Weight is required",
    "number.min": "Weight must be at least 50 kg",
    "number.max": "Weight cannot exceed 150 kg",
    "any.required": "Weight is required",
  }),
  bodytype: Joi.string()
    .valid("slim", "fit", "average", "muscular")
    .required()
    .messages({
      "string.empty": "Bodytype of measurement is required",
      "any.only":
        "Bodytype of measurement must be either 'slim', 'fit', 'average', 'muscular'",
      "any.required": "Bodytype of measurement is required",
    }),
  neck: Joi.number().min(10).max(60).required().messages({
    "number.base": "Neck size must be a number",
    "number.empty": "Neck size is required",
    "number.min": "Neck size must be at least 10 cm",
    "number.max": "Neck size cannot exceed 60 cm",
    "any.required": "Neck size is required",
  }),

  chest: Joi.number().min(60).max(200).required().messages({
    "number.base": "Chest size must be a number",
    "number.empty": "Chest size is required",
    "number.min": "Chest size must be at least 60 cm",
    "number.max": "Chest size cannot exceed 200 cm",
    "any.required": "Chest size is required",
  }),

  waist: Joi.number().min(50).max(180).required().messages({
    "number.base": "Waist size must be a number",
    "number.empty": "Waist size is required",
    "number.min": "Waist size must be at least 50 cm",
    "number.max": "Waist size cannot exceed 180 cm",
    "any.required": "Waist size is required",
  }),

  hip: Joi.number()
    .min(60)
    .max(180)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Hip size must be a number",
      "number.min": "Hip size must be at least 60 cm",
      "number.max": "Hip size cannot exceed 180 cm",
    }),

  shoulderWidth: Joi.number().min(30).max(70).required().messages({
    "number.base": "Shoulder width must be a number",
    "number.empty": "Shoulder width is required",
    "number.min": "Shoulder width must be at least 30 cm",
    "number.max": "Shoulder width cannot exceed 70 cm",
    "any.required": "Shoulder width is required",
  }),

  sleeveLength: Joi.number().min(40).max(100).required().messages({
    "number.base": "Sleeve length must be a number",
    "number.empty": "Sleeve length is required",
    "number.min": "Sleeve length must be at least 40 cm",
    "number.max": "Sleeve length cannot exceed 100 cm",
    "any.required": "Sleeve length is required",
  }),

  armHole: Joi.number().min(30).max(80).required().messages({
    "number.base": "Armhole size must be a number",
    "number.empty": "Armhole size is required",
    "number.min": "Armhole size must be at least 30 cm",
    "number.max": "Armhole size cannot exceed 80 cm",
    "any.required": "Armhole size is required",
  }),

  cuff: Joi.number().min(10).max(30).required().messages({
    "number.base": "Cuff size must be a number",
    "number.empty": "Cuff size is required",
    "number.min": "Cuff size must be at least 10 cm",
    "number.max": "Cuff size cannot exceed 30 cm",
    "any.required": "Cuff size is required",
  }),

  bicep: Joi.number().min(20).max(70).required().messages({
    "number.base": "Bicep size must be a number",
    "number.empty": "Bicep size is required",
    "number.min": "Bicep size must be at least 20 cm",
    "number.max": "Bicep size cannot exceed 70 cm",
    "any.required": "Bicep size is required",
  }),

  wrist: Joi.number()
    .min(10)
    .max(30)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Wrist size must be a number",
      "number.min": "Wrist size must be at least 10 cm",
      "number.max": "Wrist size cannot exceed 30 cm",
    }),

  elbow: Joi.number()
    .min(10)
    .max(30)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Elbow size must be a number",
      "number.min": "Elbow size must be at least 10 cm",
      "number.max": "Elbow size cannot exceed 30 cm",
    }),

  lapelWidth: Joi.number()
    .min(5)
    .max(15)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Lapel width must be a number",
      "number.min": "Lapel width must be at least 5 cm",
      "number.max": "Lapel width cannot exceed 15 cm",
    }),

  backLength: Joi.number()
    .min(60)
    .max(120)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Back length must be a number",
      "number.min": "Back length must be at least 60 cm",
      "number.max": "Back length cannot exceed 120 cm",
    }),

  frontLength: Joi.number()
    .min(60)
    .max(120)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Front length must be a number",
      "number.min": "Front length must be at least 60 cm",
      "number.max": "Front length cannot exceed 120 cm",
    }),

  overcoatLength: Joi.number().min(60).max(120).required().messages({
    "number.base": "Overcoat length must be a number",
    "number.empty": "Overcoat length is required",
    "number.min": "Overcoat length must be at least 60 cm",
    "number.max": "Overcoat length cannot exceed 120 cm",
    "any.required": "Overcoat length is required",
  }),

  unit: Joi.string().valid("cm", "inches").required().messages({
    "string.empty": "Unit of measurement is required",
    "any.only": "Unit of measurement must be either 'cm' or 'inches'",
    "any.required": "Unit of measurement is required",
  }),
});
const pantMeasurementValidator = Joi.object({
  userID: Joi.string().required().messages({
    "string.empty": "User ID is required",
    "any.required": "User ID is required",
  }),

  profileName: Joi.string()
    .trim()
    .lowercase()
    .min(2)
    .max(100)
    .pattern(/^[a-zA-Z0-9\s]+$/)
    .required()
    .messages({
      "string.empty": "Profile name is required",
      "string.min": "Profile name must be at least 2 characters long",
      "string.max": "Profile name cannot exceed 100 characters",
      "string.pattern.base":
        "Profile name must contain only alphanumeric characters",
      "any.required": "Profile name is required",
    }),

  height: Joi.number().min(120).max(200).required().messages({
    "number.base": "Height must be a number",
    "number.empty": "Height is required",
    "number.min": "Height must be at least 120 cm",
    "number.max": "Height cannot exceed 200 cm",
    "any.required": "Height is required",
  }),
  weight: Joi.number().min(50).max(150).required().messages({
    "number.base": "Weight must be a number",
    "number.empty": "Weight is required",
    "number.min": "Weight must be at least 50 kg",
    "number.max": "Weight cannot exceed 150 kg",
    "any.required": "Weight is required",
  }),
  bodytype: Joi.string()
    .valid("slim", "fit", "average", "muscular")
    .required()
    .messages({
      "string.empty": "Bodytype of measurement is required",
      "any.only":
        "Bodytype of measurement must be either 'slim', 'fit', 'average', 'muscular'",
      "any.required": "Bodytype of measurement is required",
    }),
  waist: Joi.number().min(50).max(180).required().messages({
    "number.base": "Waist size must be a number",
    "number.empty": "Waist size is required",
    "number.min": "Waist size must be at least 50 cm",
    "number.max": "Waist size cannot exceed 180 cm",
    "any.required": "Waist size is required",
  }),

  hip: Joi.number().min(60).max(180).required().messages({
    "number.base": "Hip size must be a number",
    "number.empty": "Hip size is required",
    "number.min": "Hip size must be at least 60 cm",
    "number.max": "Hip size cannot exceed 180 cm",
    "any.required": "Hip size is required",
  }),

  inseam: Joi.number().min(70).max(90).required().messages({
    "number.base": "Inseam must be a number",
    "number.empty": "Inseam is required",
    "number.min": "Inseam size must be at least 70 cm",
    "number.max": "Inseam size cannot exceed 90 cm",
    "any.required": "Inseam is required",
  }),

  outseam: Joi.number()
    .min(100)
    .max(120)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Outseam width must be a number",
      "number.min": "Outseam width must be at least 100 cm",
      "number.max": "Outseam width cannot exceed 120 cm",
    }),

  frontRise: Joi.number()
    .min(22)
    .max(35)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Front Rise must be a number",
      "number.min": "Front Rise must be at least 22 cm",
      "number.max": "Front Rise cannot exceed 35 cm",
    }),

  backRise: Joi.number()
    .min(27)
    .max(36)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Back Rise must be a number",
      "number.min": "Back Rise must be at least 27 cm",
      "number.max": "Back Rise cannot exceed 36 cm",
    }),

  thighWidth: Joi.number()
    .min(50)
    .max(75)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Thigh Width must be a number",
      "number.min": "Thigh Width must be at least 50 cm",
      "number.max": "Thigh Width cannot exceed 75 cm",
    }),

  kneeWidth: Joi.number()
    .min(32)
    .max(50)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Knee Width must be a number",
      "number.min": "Knee Width must be at least 32 cm",
      "number.max": "Knee Width cannot exceed 50 cm",
    }),

  legOpening: Joi.number()
    .min(18)
    .max(30)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Leg Opening must be a number",
      "number.min": "Leg Opening must be at least 18 cm",
      "number.max": "Leg Opening cannot exceed 30 cm",
    }),

  unit: Joi.string().valid("cm", "inches").required().messages({
    "string.empty": "Unit of measurement is required",
    "any.only": "Unit of measurement must be either 'cm' or 'inches'",
    "any.required": "Unit of measurement is required",
  }),
});
const jeansMeasurementValidator = Joi.object({
  userID: Joi.string().required().messages({
    "string.empty": "User ID is required",
    "any.required": "User ID is required",
  }),

  profileName: Joi.string()
    .trim()
    .lowercase()
    .min(2)
    .max(100)
    .pattern(/^[a-zA-Z0-9\s]+$/)
    .required()
    .messages({
      "string.empty": "Profile name is required",
      "string.min": "Profile name must be at least 2 characters long",
      "string.max": "Profile name cannot exceed 100 characters",
      "string.pattern.base":
        "Profile name must contain only alphanumeric characters",
      "any.required": "Profile name is required",
    }),

  height: Joi.number().min(120).max(200).required().messages({
    "number.base": "Height must be a number",
    "number.empty": "Height is required",
    "number.min": "Height must be at least 120 cm",
    "number.max": "Height cannot exceed 200 cm",
    "any.required": "Height is required",
  }),
  weight: Joi.number().min(50).max(150).required().messages({
    "number.base": "Weight must be a number",
    "number.empty": "Weight is required",
    "number.min": "Weight must be at least 50 kg",
    "number.max": "Weight cannot exceed 150 kg",
    "any.required": "Weight is required",
  }),
  bodytype: Joi.string()
    .valid("slim", "fit", "average", "muscular")
    .required()
    .messages({
      "string.empty": "Bodytype of measurement is required",
      "any.only":
        "Bodytype of measurement must be either 'slim', 'fit', 'average', 'muscular'",
      "any.required": "Bodytype of measurement is required",
    }),
  waist: Joi.number().min(50).max(180).required().messages({
    "number.base": "Waist size must be a number",
    "number.empty": "Waist size is required",
    "number.min": "Waist size must be at least 50 cm",
    "number.max": "Waist size cannot exceed 180 cm",
    "any.required": "Waist size is required",
  }),

  hip: Joi.number().min(60).max(180).required().messages({
    "number.base": "Hip size must be a number",
    "number.empty": "Hip size is required",
    "number.min": "Hip size must be at least 60 cm",
    "number.max": "Hip size cannot exceed 180 cm",
    "any.required": "Hip size is required",
  }),

  inseam: Joi.number().min(70).max(90).required().messages({
    "number.base": "Inseam must be a number",
    "number.empty": "Inseam is required",
    "number.min": "Inseam size must be at least 70 cm",
    "number.max": "Inseam size cannot exceed 90 cm",
    "any.required": "Inseam is required",
  }),

  outseam: Joi.number()
    .min(100)
    .max(120)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Outseam width must be a number",
      "number.min": "Outseam width must be at least 100 cm",
      "number.max": "Outseam width cannot exceed 120 cm",
    }),

  frontRise: Joi.number()
    .min(22)
    .max(35)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Front Rise must be a number",
      "number.min": "Front Rise must be at least 22 cm",
      "number.max": "Front Rise cannot exceed 35 cm",
    }),

  backRise: Joi.number()
    .min(27)
    .max(36)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Back Rise must be a number",
      "number.min": "Back Rise must be at least 27 cm",
      "number.max": "Back Rise cannot exceed 36 cm",
    }),

  thighWidth: Joi.number()
    .min(50)
    .max(75)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Thigh Width must be a number",
      "number.min": "Thigh Width must be at least 50 cm",
      "number.max": "Thigh Width cannot exceed 75 cm",
    }),

  kneeWidth: Joi.number()
    .min(32)
    .max(50)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Knee Width must be a number",
      "number.min": "Knee Width must be at least 32 cm",
      "number.max": "Knee Width cannot exceed 50 cm",
    }),

  legOpening: Joi.number()
    .min(18)
    .max(30)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Leg Opening must be a number",
      "number.min": "Leg Opening must be at least 18 cm",
      "number.max": "Leg Opening cannot exceed 30 cm",
    }),

  unit: Joi.string().valid("cm", "inches").required().messages({
    "string.empty": "Unit of measurement is required",
    "any.only": "Unit of measurement must be either 'cm' or 'inches'",
    "any.required": "Unit of measurement is required",
  }),
});
const chinosMeasurementValidator = Joi.object({
  userID: Joi.string().required().messages({
    "string.empty": "User ID is required",
    "any.required": "User ID is required",
  }),

  profileName: Joi.string()
    .trim()
    .lowercase()
    .min(2)
    .max(100)
    .pattern(/^[a-zA-Z0-9\s]+$/)
    .required()
    .messages({
      "string.empty": "Profile name is required",
      "string.min": "Profile name must be at least 2 characters long",
      "string.max": "Profile name cannot exceed 100 characters",
      "string.pattern.base":
        "Profile name must contain only alphanumeric characters",
      "any.required": "Profile name is required",
    }),

  height: Joi.number().min(120).max(200).required().messages({
    "number.base": "Height must be a number",
    "number.empty": "Height is required",
    "number.min": "Height must be at least 120 cm",
    "number.max": "Height cannot exceed 200 cm",
    "any.required": "Height is required",
  }),
  weight: Joi.number().min(50).max(150).required().messages({
    "number.base": "Weight must be a number",
    "number.empty": "Weight is required",
    "number.min": "Weight must be at least 50 kg",
    "number.max": "Weight cannot exceed 150 kg",
    "any.required": "Weight is required",
  }),
  bodytype: Joi.string()
    .valid("slim", "fit", "average", "muscular")
    .required()
    .messages({
      "string.empty": "Bodytype of measurement is required",
      "any.only":
        "Bodytype of measurement must be either 'slim', 'fit', 'average', 'muscular'",
      "any.required": "Bodytype of measurement is required",
    }),
  waist: Joi.number().min(50).max(180).required().messages({
    "number.base": "Waist size must be a number",
    "number.empty": "Waist size is required",
    "number.min": "Waist size must be at least 50 cm",
    "number.max": "Waist size cannot exceed 180 cm",
    "any.required": "Waist size is required",
  }),

  hip: Joi.number().min(60).max(180).required().messages({
    "number.base": "Hip size must be a number",
    "number.empty": "Hip size is required",
    "number.min": "Hip size must be at least 60 cm",
    "number.max": "Hip size cannot exceed 180 cm",
    "any.required": "Hip size is required",
  }),

  inseam: Joi.number().min(70).max(90).required().messages({
    "number.base": "Inseam must be a number",
    "number.empty": "Inseam is required",
    "number.min": "Inseam size must be at least 70 cm",
    "number.max": "Inseam size cannot exceed 90 cm",
    "any.required": "Inseam is required",
  }),

  outseam: Joi.number()
    .min(100)
    .max(120)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Outseam width must be a number",
      "number.min": "Outseam width must be at least 100 cm",
      "number.max": "Outseam width cannot exceed 120 cm",
    }),

  frontRise: Joi.number()
    .min(22)
    .max(35)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Front Rise must be a number",
      "number.min": "Front Rise must be at least 22 cm",
      "number.max": "Front Rise cannot exceed 35 cm",
    }),

  backRise: Joi.number()
    .min(27)
    .max(36)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Back Rise must be a number",
      "number.min": "Back Rise must be at least 27 cm",
      "number.max": "Back Rise cannot exceed 36 cm",
    }),

  thighWidth: Joi.number()
    .min(50)
    .max(75)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Thigh Width must be a number",
      "number.min": "Thigh Width must be at least 50 cm",
      "number.max": "Thigh Width cannot exceed 75 cm",
    }),

  kneeWidth: Joi.number()
    .min(32)
    .max(50)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Knee Width must be a number",
      "number.min": "Knee Width must be at least 32 cm",
      "number.max": "Knee Width cannot exceed 50 cm",
    }),

  legOpening: Joi.number()
    .min(18)
    .max(30)
    .allow(null) // Allow null as per the Mongoose schema
    .messages({
      "number.base": "Leg Opening must be a number",
      "number.min": "Leg Opening must be at least 18 cm",
      "number.max": "Leg Opening cannot exceed 30 cm",
    }),

  unit: Joi.string().valid("cm", "inches").required().messages({
    "string.empty": "Unit of measurement is required",
    "any.only": "Unit of measurement must be either 'cm' or 'inches'",
    "any.required": "Unit of measurement is required",
  }),
});

const measurementValidator = {
  shirtMeasurementValidator,
  poloShirtMeasurementValidator,
  coatMeasurementValidator,
  overcoatMeasurementValidator,
  pantMeasurementValidator,
  jeansMeasurementValidator,
  chinosMeasurementValidator,
};

module.exports = measurementValidator;
