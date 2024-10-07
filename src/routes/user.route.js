// routes/user.route.js
const express = require("express");
const { userController } = require("../controllers");
const {
  multerMiddleware,
  requestMiddleware,
  authMiddleware,
} = require("../middlewares");

const router = express.Router();

router.get("/profile", authMiddleware.protect, userController.getUserProfile);
router.put(
  "/profile",
  authMiddleware.protect,
  userController.updateUserProfile
);
router.put(
  "/profile/avatar",
  authMiddleware.protect,
  multerMiddleware.uploadAvatar,
  userController.updateUserAvatar
);

router.get("/addresses", authMiddleware.protect, userController.getAddresses);
router.post("/addresses", authMiddleware.protect, userController.createAddress);
router.put(
  "/addresses/:id",
  authMiddleware.protect,
  userController.updateAddress
);
router.delete(
  "/addresses/:id",
  authMiddleware.protect,
  userController.deleteAddress
);

router.post("/carts", authMiddleware.protect, userController.addItemToCart);
router.get("/carts", authMiddleware.protect, userController.getCarts);
router.put(
  "/carts/incress/:id",
  authMiddleware.protect,
  userController.incressItemQuantity
);
router.put(
  "/carts/decrease/:id",
  authMiddleware.protect,
  userController.decreaseItemQuantity
);

module.exports = router;
