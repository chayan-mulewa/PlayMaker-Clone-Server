const User = require("./user/user.model");
const Address = require("./user/address.model");
const Cart = require("./user/cart.model");

const Product = require("./products/product.model");

const Material = require("./materials/material.model");
const ShirtMaterial = require("./materials/shirt.material.model");
const PoloShirtMaterial = require("./materials/poloShirt.material.model");
const CoatMaterial = require("./materials/coat.material.model");
const OvercoatMaterial = require("./materials/overcoat.material.model");
const PantMaterial = require("./materials/pant.material.model");
const JeansMaterial = require("./materials/jeans.material.model");
const ChinosMaterial = require("./materials/chinos.material.model");

const Design = require("./designs/design.model");
const ShirtDesign = require("./designs/shirt.design.model");
const PoloShirtDesign = require("./designs/poloShirt.design.model");
const CoatDesign = require("./designs/coat.design.model");
const OvercoatDesign = require("./designs/overcoat.design.model");
const PantDesign = require("./designs/pant.design.model");
const JeansDesign = require("./designs/jeans.design.model");
const ChinosDesign = require("./designs/chinos.design.model");

const Measurement = require("./measurements/measurement.model");
const ShirtMeasurement = require("./measurements/shirt.measurement.model");
const PoloShirtMeasurement = require("./measurements/poloShirt.measurement.model");
const CoatMeasurement = require("./measurements/coat.measurement.model");
const OvercoatMeasurement = require("./measurements/overcoat.measurement.model");
const PantMeasurement = require("./measurements/pant.measurement.model");
const JeansMeasurement = require("./measurements/jeans.measurement.model");
const ChinosMeasurement = require("./measurements/chinos.measurement.model");

module.exports = {
  User,
  Address,
  Cart,

  Product,

  Material,
  ShirtMaterial,
  PoloShirtMaterial,
  CoatMaterial,
  OvercoatMaterial,
  PantMaterial,
  JeansMaterial,
  ChinosMaterial,

  Design,
  ShirtDesign,
  PoloShirtDesign,
  CoatDesign,
  OvercoatDesign,
  PantDesign,
  JeansDesign,
  ChinosDesign,

  Measurement,
  ShirtMeasurement,
  PoloShirtMeasurement,
  CoatMeasurement,
  OvercoatMeasurement,
  PantMeasurement,
  JeansMeasurement,
  ChinosMeasurement,
};
