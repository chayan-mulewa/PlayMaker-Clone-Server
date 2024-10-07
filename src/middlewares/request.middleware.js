const { file, logger } = require("../utils");
const { InvalidFieldError } = require("../errors");
const { userValidator, materialValidator } = require("../validators");

const validateUser = async (req, res, next) => {
  const avatar = req.file;
  const { error } = userValidator.validate(req.body, { abortEarly: true });
  if (error) {
    if (avatar) {
      await file.fileDelete(avatar.file.path);
      logger.logger.info(`Local file deleted : ${avatar.file.path}`);
    }
    return next(
      new InvalidFieldError(error.details[0].path[0], error.details[0].message)
    );
  }
  next();
};

const validateShirtMaterial = async (req, res, next) => {
  const { error } = materialValidator.shirtMaterialValidator.validate(
    req.body,
    { abortEarly: true }
  );
  if (error) {
    return next(
      new InvalidFieldError(error.details[0].path[0], error.details[0].message)
    );
  }
  next();
};
const validatePoloShirtMaterial = async (req, res, next) => {
  const { error } = materialValidator.poloShirtMaterialValidator.validate(
    req.body,
    { abortEarly: true }
  );
  if (error) {
    return next(
      new InvalidFieldError(error.details[0].path[0], error.details[0].message)
    );
  }
  next();
};
const validateCoatMaterial = async (req, res, next) => {
  const { error } = materialValidator.coatMaterialValidator.validate(req.body, {
    abortEarly: true,
  });
  if (error) {
    return next(
      new InvalidFieldError(error.details[0].path[0], error.details[0].message)
    );
  }
  next();
};
const validateOvercoatMaterial = async (req, res, next) => {
  const { error } = materialValidator.overcoatMaterialValidator.validate(
    req.body,
    { abortEarly: true }
  );
  if (error) {
    return next(
      new InvalidFieldError(error.details[0].path[0], error.details[0].message)
    );
  }
  next();
};
const validatePantMaterial = async (req, res, next) => {
  const { error } = materialValidator.pantMaterialValidator.validate(req.body, {
    abortEarly: true,
  });
  if (error) {
    return next(
      new InvalidFieldError(error.details[0].path[0], error.details[0].message)
    );
  }
  next();
};
const validateJeansMaterial = async (req, res, next) => {
  const { error } = materialValidator.jeansMaterialValidator.validate(
    req.body,
    { abortEarly: true }
  );
  if (error) {
    return next(
      new InvalidFieldError(error.details[0].path[0], error.details[0].message)
    );
  }
  next();
};
const validateChinosMaterial = async (req, res, next) => {
  const { error } = materialValidator.chinosMaterialValidator.validate(
    req.body,
    { abortEarly: true }
  );
  if (error) {
    return next(
      new InvalidFieldError(error.details[0].path[0], error.details[0].message)
    );
  }
  next();
};

module.exports = {
  validateUser,

  validateShirtMaterial,
  validatePoloShirtMaterial,
  validateCoatMaterial,
  validateOvercoatMaterial,
  validatePantMaterial,
  validateJeansMaterial,
  validateChinosMaterial,
};
