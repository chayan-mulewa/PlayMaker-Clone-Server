// controllers/material.controller.js
const { materialService } = require("../services");
const { asyncHandler } = require("../utils");

const getMaterials = asyncHandler(async (req, res, next) => {
  const materials = await materialService.getMaterials(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "",
    data: materials,
  });
});
const getShirtsMaterials = asyncHandler(async (req, res, next) => {
  const materials = await materialService.getShirtsMaterials(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "",
    data: materials,
  });
});
const getPoloShirtsMaterials = asyncHandler(async (req, res, next) => {
  const materials = await materialService.getPoloShirtsMaterials(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "",
    data: materials,
  });
});
const getCoatsMaterials = asyncHandler(async (req, res, next) => {
  const materials = await materialService.getCoatsMaterials(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "",
    data: materials,
  });
});
const getOvercoatsMaterials = asyncHandler(async (req, res, next) => {
  const materials = await materialService.getOvercoatsMaterials(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "",
    data: materials,
  });
});
const getPantsMaterials = asyncHandler(async (req, res, next) => {
  const materials = await materialService.getPantsMaterials(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "",
    data: materials,
  });
});
const getJeansMaterials = asyncHandler(async (req, res, next) => {
  const materials = await materialService.getJeansMaterials(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "",
    data: materials,
  });
});
const getChinosMaterials = asyncHandler(async (req, res, next) => {
  const materials = await materialService.getChinosMaterials(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "",
    data: materials,
  });
});

// ********** Single Creation of Material **********

const createShirtMaterial = asyncHandler(async (req, res, next) => {
  const newMaterial = await materialService.createShirtMaterial(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Shirt Material Created Successfully",
    data: newMaterial,
  });
});
const createPoloShirtMaterial = asyncHandler(async (req, res, next) => {
  const newMaterial = await materialService.createPoloShirtMaterial(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Polo Shirt Material Created Successfully",
    data: newMaterial,
  });
});
const createCoatMaterial = asyncHandler(async (req, res, next) => {
  const newMaterial = await materialService.createCoatMaterial(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Coat Material Created Successfully",
    data: newMaterial,
  });
});
const createOvercoatMaterial = asyncHandler(async (req, res, next) => {
  const newMaterial = await materialService.createOvercoatMaterial(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Overcoat Material Created Successfully",
    data: newMaterial,
  });
});
const createPantMaterial = asyncHandler(async (req, res, next) => {
  const newMaterial = await materialService.createPantMaterial(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Pant Material Created Successfully",
    data: newMaterial,
  });
});
const createJeansMaterial = asyncHandler(async (req, res, next) => {
  const newMaterial = await materialService.createJenasMaterial(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Jeans Material Created Successfully",
    data: newMaterial,
  });
});
const createChinosMaterial = asyncHandler(async (req, res, next) => {
  const newMaterial = await materialService.createChinosMaterial(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Chinos Material Created Successfully",
    data: newMaterial,
  });
});

// ********** Single Updation of Material **********

const updateShirtMaterial = asyncHandler(async (req, res, next) => {
  const updatedMaterial = await materialService.updateShirtMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Shirt Material Updated Successfully",
    data: updatedMaterial,
  });
});
const updatePoloShirtMaterial = asyncHandler(async (req, res, next) => {
  const updatedMaterial = await materialService.updatePoloShirtMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Polo Shirt Material Updated Successfully",
    data: updatedMaterial,
  });
});
const updateCoatMaterial = asyncHandler(async (req, res, next) => {
  const updatedMaterial = await materialService.updateCoatMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Coat Material Updated Successfully",
    data: updatedMaterial,
  });
});
const updateOvercoatMaterial = asyncHandler(async (req, res, next) => {
  const updatedMaterial = await materialService.updateOvercoatMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Overcoat Material Updated Successfully",
    data: updatedMaterial,
  });
});
const updatePantMaterial = asyncHandler(async (req, res, next) => {
  const updatedMaterial = await materialService.updatePantMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Pant Material Updated Successfully",
    data: updatedMaterial,
  });
});
const updateJeansMaterial = asyncHandler(async (req, res, next) => {
  const updatedMaterial = await materialService.updateJeansMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Jeans Material Updated Successfully",
    data: updatedMaterial,
  });
});
const updateChinosMaterial = asyncHandler(async (req, res, next) => {
  const updatedMaterial = await materialService.updateChinosMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Chinos Material Updated Successfully",
    data: updatedMaterial,
  });
});

// ********** Single Deletion of Materials **********

const deleteShirtMaterial = asyncHandler(async (req, res, next) => {
  const deletedMaterial = await materialService.deleteShirtMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Shirt Material Deleted Successfully",
    data: deletedMaterial,
  });
});
const deletePoloShirtMaterial = asyncHandler(async (req, res, next) => {
  const deletedMaterial = await materialService.deletePoloShirtMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Polo Shirt Material Deleted Successfully",
    data: deletedMaterial,
  });
});
const deleteCoatMaterial = asyncHandler(async (req, res, next) => {
  const deletedMaterial = await materialService.deleteCoatMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Coat Material Deleted Successfully",
    data: deletedMaterial,
  });
});
const deleteOvercoatMaterial = asyncHandler(async (req, res, next) => {
  const deletedMaterial = await materialService.deleteOvercoatMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Shirt Material Deleted Successfully",
    data: deletedMaterial,
  });
});
const deletePantMaterial = asyncHandler(async (req, res, next) => {
  const deletedMaterial = await materialService.deletePantMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Shirt Material Deleted Successfully",
    data: deletedMaterial,
  });
});
const deleteJeansMaterial = asyncHandler(async (req, res, next) => {
  const deletedMaterial = await materialService.deleteJeansMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Shirt Material Deleted Successfully",
    data: deletedMaterial,
  });
});
const deleteChinosMaterial = asyncHandler(async (req, res, next) => {
  const deletedMaterial = await materialService.deleteChinosMaterial(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Shirt Material Deleted Successfully",
    data: deletedMaterial,
  });
});

// ********** Bulk Creation of Materials **********

const createBulkShirtsMaterials = asyncHandler(async (req, res, next) => {
  const newMaterials = await materialService.createBulkShirtsMaterials(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Bulk Shirts Materials Created Successfully",
    data: newMaterials,
  });
});
const createBulkPoloShirtsMaterials = asyncHandler(async (req, res, next) => {
  const newMaterials = await materialService.createBulkPoloShirtsMaterials(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Bulk Polo Shirts Materials Created Successfully",
    data: newMaterials,
  });
});
const createBulkCoatsMaterials = asyncHandler(async (req, res, next) => {
  const newMaterials = await materialService.createBulkCoatsMaterials(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Bulk Coats Materials Created Successfully",
    data: newMaterials,
  });
});
const createBulkOvercoatsMaterials = asyncHandler(async (req, res, next) => {
  const newMaterials = await materialService.createBulkOvercoatsMaterials(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Bulk Overcoats Materials Created Successfully",
    data: newMaterials,
  });
});
const createBulkPantsMaterials = asyncHandler(async (req, res, next) => {
  const newMaterials = await materialService.createBulkPantsMaterials(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Bulk Pants Materials Created Successfully",
    data: newMaterials,
  });
});
const createBulkJeansMaterials = asyncHandler(async (req, res, next) => {
  const newMaterials = await materialService.createBulkJeansMaterials(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Bulk Jeans Materials Created Successfully",
    data: newMaterials,
  });
});
const createBulkChinosMaterials = asyncHandler(async (req, res, next) => {
  const newMaterials = await materialService.createBulkChinosMaterials(req);
  return res.status(201).json({
    statusCode: 201,
    success: true,
    message: "Bulk Chinos Materials Created Successfully",
    data: newMaterials,
  });
});

module.exports = {
  getMaterials,
  getShirtsMaterials,
  getPoloShirtsMaterials,
  getCoatsMaterials,
  getOvercoatsMaterials,
  getPantsMaterials,
  getJeansMaterials,
  getChinosMaterials,

  createShirtMaterial,
  createPoloShirtMaterial,
  createCoatMaterial,
  createOvercoatMaterial,
  createPantMaterial,
  createJeansMaterial,
  createChinosMaterial,

  updateShirtMaterial,
  updatePoloShirtMaterial,
  updateCoatMaterial,
  updateOvercoatMaterial,
  updatePantMaterial,
  updateJeansMaterial,
  updateChinosMaterial,

  deleteShirtMaterial,
  deletePoloShirtMaterial,
  deleteCoatMaterial,
  deleteOvercoatMaterial,
  deletePantMaterial,
  deleteJeansMaterial,
  deleteChinosMaterial,

  createBulkShirtsMaterials,
  createBulkPoloShirtsMaterials,
  createBulkCoatsMaterials,
  createBulkOvercoatsMaterials,
  createBulkPantsMaterials,
  createBulkJeansMaterials,
  createBulkChinosMaterials,
};
