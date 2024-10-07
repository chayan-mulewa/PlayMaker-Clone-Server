// controllers/auth.controller.js
const { authService } = require("../services");
const { asyncHandler } = require("../utils");
const { InvalidFieldError } = require("../errors");

const register = asyncHandler(async (req, res, next) => {
  // const avatarLocalPath = req.file?.path;
  // if (!avatarLocalPath) {
  //   throw new InvalidFieldError("avatar", "Avatar file is required");
  // }
  // req.body.avatarLocalPath = avatarLocalPath;
  const newUser = await authService.register(req);

  return res.status(201).json({
    statusCode: 201,
    success: true,
    data: newUser,
    message: "User Successfully Created",
  });
});

const login = asyncHandler(async (req, res, next) => {
  const options = {
    httpOnly: true,
    secure: true,
  };

  const data = await authService.login(req);

  return res
    .status(200)
    .cookie("accessToken", data.accessToken, options)
    .cookie("refreshToken", data.refreshToken, options)
    .cookie("role", data.role, options)
    .json({
      statusCode: 200,
      success: true,
      data: data,
      message: "User Successfully Logged In",
    });
});

const logout = asyncHandler(async (req, res, next) => {
  const options = {
    httpOnly: true,
    secure: true,
  };

  await authService.logout(req);

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({
      statusCode: 200,
      success: true,
      data: [],
      message: "User Successfully Logged Out",
    });
});

const refreshAccessToken = asyncHandler(async (req, res, next) => {
  const options = {
    httpOnly: true,
    secure: true,
  };

  const data = await authService.refreshAccessToken(req);
  return res
    .status(200)
    .cookie("accessToken", data.accessToken, options)
    .cookie("refreshToken", data.refreshToken, options)
    .json({
      statusCode: 200,
      success: true,
      data: data,
      message: "Access Token Refreshed",
    });
});

module.exports = { register, login, logout, refreshAccessToken };
