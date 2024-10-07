// validators/material.validator.js
const Joi = require("joi");

const shirtMaterialValidator = Joi.object({
  materialName: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material name is required",
    "any.required": "Material name is required",
  }),

  materialCode: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material code is required",
    "any.required": "Material code is required",
  }),

  materialFabric: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material fabric is required",
    "any.required": "Material fabric is required",
  }),

  materialColor: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material color is required",
    "any.required": "Material color is required",
  }),

  materialType: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material type is required",
    "any.required": "Material type is required",
  }),

  materialDescription: Joi.string().trim().optional().messages({
    "string.empty": "Material description cannot be empty",
  }),

  materialPricePerMeter: Joi.number()
    .min(0) // Minimum price per meter should be 0
    .optional()
    .default(0)
    .messages({
      "number.base": "Material price must be a number",
      "number.min": "Material price per meter cannot be negative",
    }),

  materialGSM: Joi.number().required().messages({
    "number.base": "Material GSM must be a number",
    "any.required": "Material GSM is required",
  }),

  materialProperties: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialSeasonability: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialPattern: Joi.string().trim().lowercase().optional(),

  weavePattern: Joi.string().trim().lowercase().optional(),

  threadCount: Joi.string().trim().optional(),

  tags: Joi.array().items(Joi.string().trim().lowercase()).optional(),

  // materialURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material URL is required",
  //   "string.uri": "Material URL must be a valid URI",
  //   "any.required": "Material URL is required",
  // }),

  // materialPreviewURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material preview URL is required",
  //   "string.uri": "Material preview URL must be a valid URI",
  //   "any.required": "Material preview URL is required",
  // }),
});
const poloShirtMaterialValidator = Joi.object({
  materialName: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material name is required",
    "any.required": "Material name is required",
  }),

  materialCode: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material code is required",
    "any.required": "Material code is required",
  }),

  materialFabric: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material fabric is required",
    "any.required": "Material fabric is required",
  }),

  materialColor: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material color is required",
    "any.required": "Material color is required",
  }),

  materialType: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material type is required",
    "any.required": "Material type is required",
  }),

  materialDescription: Joi.string().trim().optional().messages({
    "string.empty": "Material description cannot be empty",
  }),

  materialPricePerMeter: Joi.number()
    .min(0) // Minimum price per meter should be 0
    .optional()
    .default(0)
    .messages({
      "number.base": "Material price must be a number",
      "number.min": "Material price per meter cannot be negative",
    }),

  materialGSM: Joi.number().required().messages({
    "number.base": "Material GSM must be a number",
    "any.required": "Material GSM is required",
  }),

  materialProperties: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialSeasonability: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialPattern: Joi.string().trim().lowercase().optional(),

  weavePattern: Joi.string().trim().lowercase().optional(),

  threadCount: Joi.string().trim().optional(),

  tags: Joi.array().items(Joi.string().trim().lowercase()).optional(),

  // materialURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material URL is required",
  //   "string.uri": "Material URL must be a valid URI",
  //   "any.required": "Material URL is required",
  // }),

  // materialPreviewURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material preview URL is required",
  //   "string.uri": "Material preview URL must be a valid URI",
  //   "any.required": "Material preview URL is required",
  // }),
});
const coatMaterialValidator = Joi.object({
  materialName: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material name is required",
    "any.required": "Material name is required",
  }),

  materialCode: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material code is required",
    "any.required": "Material code is required",
  }),

  materialFabric: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material fabric is required",
    "any.required": "Material fabric is required",
  }),

  materialColor: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material color is required",
    "any.required": "Material color is required",
  }),

  materialType: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material type is required",
    "any.required": "Material type is required",
  }),

  materialDescription: Joi.string().trim().optional().messages({
    "string.empty": "Material description cannot be empty",
  }),

  materialPricePerMeter: Joi.number()
    .min(0) // Minimum price per meter should be 0
    .optional()
    .default(0)
    .messages({
      "number.base": "Material price must be a number",
      "number.min": "Material price per meter cannot be negative",
    }),

  materialGSM: Joi.number().required().messages({
    "number.base": "Material GSM must be a number",
    "any.required": "Material GSM is required",
  }),

  materialProperties: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialSeasonability: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialPattern: Joi.string().trim().lowercase().optional(),

  weavePattern: Joi.string().trim().lowercase().optional(),

  threadCount: Joi.string().trim().optional(),

  tags: Joi.array().items(Joi.string().trim().lowercase()).optional(),

  // materialURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material URL is required",
  //   "string.uri": "Material URL must be a valid URI",
  //   "any.required": "Material URL is required",
  // }),

  // materialPreviewURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material preview URL is required",
  //   "string.uri": "Material preview URL must be a valid URI",
  //   "any.required": "Material preview URL is required",
  // }),
});
const overcoatMaterialValidator = Joi.object({
  materialName: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material name is required",
    "any.required": "Material name is required",
  }),

  materialCode: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material code is required",
    "any.required": "Material code is required",
  }),

  materialFabric: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material fabric is required",
    "any.required": "Material fabric is required",
  }),

  materialColor: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material color is required",
    "any.required": "Material color is required",
  }),

  materialType: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material type is required",
    "any.required": "Material type is required",
  }),

  materialDescription: Joi.string().trim().optional().messages({
    "string.empty": "Material description cannot be empty",
  }),

  materialPricePerMeter: Joi.number()
    .min(0) // Minimum price per meter should be 0
    .optional()
    .default(0)
    .messages({
      "number.base": "Material price must be a number",
      "number.min": "Material price per meter cannot be negative",
    }),

  materialGSM: Joi.number().required().messages({
    "number.base": "Material GSM must be a number",
    "any.required": "Material GSM is required",
  }),

  materialProperties: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialSeasonability: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialPattern: Joi.string().trim().lowercase().optional(),

  weavePattern: Joi.string().trim().lowercase().optional(),

  threadCount: Joi.string().trim().optional(),

  tags: Joi.array().items(Joi.string().trim().lowercase()).optional(),

  // materialURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material URL is required",
  //   "string.uri": "Material URL must be a valid URI",
  //   "any.required": "Material URL is required",
  // }),

  // materialPreviewURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material preview URL is required",
  //   "string.uri": "Material preview URL must be a valid URI",
  //   "any.required": "Material preview URL is required",
  // }),
});
const pantMaterialValidator = Joi.object({
  materialName: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material name is required",
    "any.required": "Material name is required",
  }),

  materialCode: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material code is required",
    "any.required": "Material code is required",
  }),

  materialFabric: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material fabric is required",
    "any.required": "Material fabric is required",
  }),

  materialColor: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material color is required",
    "any.required": "Material color is required",
  }),

  materialType: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material type is required",
    "any.required": "Material type is required",
  }),

  materialDescription: Joi.string().trim().optional().messages({
    "string.empty": "Material description cannot be empty",
  }),

  materialPricePerMeter: Joi.number()
    .min(0) // Minimum price per meter should be 0
    .optional()
    .default(0)
    .messages({
      "number.base": "Material price must be a number",
      "number.min": "Material price per meter cannot be negative",
    }),

  materialGSM: Joi.number().required().messages({
    "number.base": "Material GSM must be a number",
    "any.required": "Material GSM is required",
  }),

  materialProperties: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialSeasonability: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialPattern: Joi.string().trim().lowercase().optional(),

  weavePattern: Joi.string().trim().lowercase().optional(),

  threadCount: Joi.string().trim().optional(),

  tags: Joi.array().items(Joi.string().trim().lowercase()).optional(),

  // materialURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material URL is required",
  //   "string.uri": "Material URL must be a valid URI",
  //   "any.required": "Material URL is required",
  // }),

  // materialPreviewURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material preview URL is required",
  //   "string.uri": "Material preview URL must be a valid URI",
  //   "any.required": "Material preview URL is required",
  // }),
});
const jeansMaterialValidator = Joi.object({
  materialName: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material name is required",
    "any.required": "Material name is required",
  }),

  materialCode: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material code is required",
    "any.required": "Material code is required",
  }),

  materialFabric: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material fabric is required",
    "any.required": "Material fabric is required",
  }),

  materialColor: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material color is required",
    "any.required": "Material color is required",
  }),

  materialType: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material type is required",
    "any.required": "Material type is required",
  }),

  materialDescription: Joi.string().trim().optional().messages({
    "string.empty": "Material description cannot be empty",
  }),

  materialPricePerMeter: Joi.number()
    .min(0) // Minimum price per meter should be 0
    .optional()
    .default(0)
    .messages({
      "number.base": "Material price must be a number",
      "number.min": "Material price per meter cannot be negative",
    }),

  materialGSM: Joi.number().required().messages({
    "number.base": "Material GSM must be a number",
    "any.required": "Material GSM is required",
  }),

  materialProperties: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialSeasonability: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialPattern: Joi.string().trim().lowercase().optional(),

  weavePattern: Joi.string().trim().lowercase().optional(),

  threadCount: Joi.string().trim().optional(),

  tags: Joi.array().items(Joi.string().trim().lowercase()).optional(),

  // materialURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material URL is required",
  //   "string.uri": "Material URL must be a valid URI",
  //   "any.required": "Material URL is required",
  // }),

  // materialPreviewURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material preview URL is required",
  //   "string.uri": "Material preview URL must be a valid URI",
  //   "any.required": "Material preview URL is required",
  // }),
});
const chinosMaterialValidator = Joi.object({
  materialName: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material name is required",
    "any.required": "Material name is required",
  }),

  materialCode: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material code is required",
    "any.required": "Material code is required",
  }),

  materialFabric: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material fabric is required",
    "any.required": "Material fabric is required",
  }),

  materialColor: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material color is required",
    "any.required": "Material color is required",
  }),

  materialType: Joi.string().trim().lowercase().required().messages({
    "string.empty": "Material type is required",
    "any.required": "Material type is required",
  }),

  materialDescription: Joi.string().trim().optional().messages({
    "string.empty": "Material description cannot be empty",
  }),

  materialPricePerMeter: Joi.number()
    .min(0) // Minimum price per meter should be 0
    .optional()
    .default(0)
    .messages({
      "number.base": "Material price must be a number",
      "number.min": "Material price per meter cannot be negative",
    }),

  materialGSM: Joi.number().required().messages({
    "number.base": "Material GSM must be a number",
    "any.required": "Material GSM is required",
  }),

  materialProperties: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialSeasonability: Joi.array()
    .items(Joi.string().trim().lowercase())
    .optional(),

  materialPattern: Joi.string().trim().lowercase().optional(),

  weavePattern: Joi.string().trim().lowercase().optional(),

  threadCount: Joi.string().trim().optional(),

  tags: Joi.array().items(Joi.string().trim().lowercase()).optional(),

  // materialURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material URL is required",
  //   "string.uri": "Material URL must be a valid URI",
  //   "any.required": "Material URL is required",
  // }),

  // materialPreviewURL: Joi.string().trim().uri().required().messages({
  //   "string.empty": "Material preview URL is required",
  //   "string.uri": "Material preview URL must be a valid URI",
  //   "any.required": "Material preview URL is required",
  // }),
});

const materialValidator = {
  shirtMaterialValidator,
  poloShirtMaterialValidator,
  coatMaterialValidator,
  overcoatMaterialValidator,
  pantMaterialValidator,
  jeansMaterialValidator,
  chinosMaterialValidator,
};

module.exports = materialValidator;
