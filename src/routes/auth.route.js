// routes/auth.route.js
const express = require("express");
const { authController } = require("../controllers");
const {
  authMiddleware,
  multerMiddleware,
  requestMiddleware,
} = require("../middlewares");

const router = express.Router();

router.post(
  "/register",
  // (req,res,next)=>{
  //   console.log(req.body)
  //   res.json();
  // },
  // multerMiddleware.uploadAvatar,
  requestMiddleware.validateUser,
  authController.register
);
router.post("/login", authController.login);
router.post("/logout", authMiddleware.protect, authController.logout);
router.get("/refresh-token", authController.refreshAccessToken);

module.exports = router;
