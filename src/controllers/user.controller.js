// services/user.controller.js
const { userService } = require("../services");
const { asyncHandler } = require("../utils");

const getUserProfile = asyncHandler(async (req, res, next) => {
  const userProfile = await userService.getUserProfile(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "User Details Geted Successfully",
    data: userProfile,
  });
});

const updateUserProfile = asyncHandler(async (req, res, next) => {
  const updatedUser = await userService.updateUserProfile(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "User Details Updated Successfully",
    data: updatedUser,
  });
});

const updateUserAvatar = asyncHandler(async (req, res, next) => {
  const updatedUserAvatat = await userService.updateUserAvatar(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "User Avatar Updated Successfully",
    data: updatedUserAvatat,
  });
});

const getAddresses = asyncHandler(async (req, res, next) => {
  const addresses = await userService.getAddresses(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Addresses Geted Successfully",
    data: addresses,
  });
});
const createAddress = asyncHandler(async (req, res, next) => {
  const newAddress = await userService.createAddress(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Address Created Successfully",
    data: newAddress,
  });
});
const updateAddress = asyncHandler(async (req, res, next) => {
  const updatedAddress = await userService.updateAddress(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Address Updated Successfully",
    data: updatedAddress,
  });
});
const deleteAddress = asyncHandler(async (req, res, next) => {
  const deletedAddress = await userService.deleteAddress(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Address Deleted Successfully",
    data: deletedAddress,
  });
});

const getCarts = asyncHandler(async (req, res, next) => {
  const carts = await userService.getCarts(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Cart Geted Successfully",
    data: carts,
  });
});
const addItemToCart = asyncHandler(async (req, res, next) => {
  const addedItem = await userService.addItemToCart(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Product Added Successfully",
    data: addedItem,
  });
});
const incressItemQuantity = asyncHandler(async (req, res, next) => {
  const incressedItemQuantity = await userService.incressItemQuantity(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Product Quantity Incressed Successfully",
    data: incressedItemQuantity,
  });
});
const decreaseItemQuantity = asyncHandler(async (req, res, next) => {
  const decreasedItemQuantity = await userService.decreaseItemQuantity(req);
  return res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Product Quantity Decreased Successfully",
    data: decreasedItemQuantity,
  });
});

module.exports = {
  getUserProfile,
  updateUserAvatar,
  updateUserProfile,

  getAddresses,
  createAddress,
  updateAddress,
  deleteAddress,

  getCarts,
  addItemToCart,
  incressItemQuantity,
  decreaseItemQuantity,
};
