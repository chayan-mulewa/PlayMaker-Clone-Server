// services/auth.service.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_CONFIG } = require("../config");
const { User } = require("../database/models");
const { cloudinary, file } = require("../utils");
const { InvalidFieldError, AppError } = require("../errors");

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new AppError(
      "Something went wrong while generating referesh and access token",
      500
    );
  }
};

const register = async (req) => {
  const { fullName, email, password, role } = req.body;

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new InvalidFieldError("email", "Email is already taken", 403);
  }

  const user = new User({
    fullName,
    email,
    password,
    role,
  });
  await user.save();

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new AppError(500, "Something went wrong while registering the user");
  }

  return { createdUser };
};

const login = async (req) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new InvalidFieldError("email", "Email does not exists", 403);
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new InvalidFieldError("password", "Password is invalid", 403);
  }

  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const data = {
    user: loggedInUser,
    accessToken,
    refreshToken,
    role: loggedInUser.role,
  };

  return data;
};

const logout = async (req) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
};

const refreshAccessToken = async (req) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new InvalidFieldError("refreshToken", "Unauthorized Request", 401);
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      JWT_CONFIG.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new InvalidFieldError("refreshToken", "Invalid Refresh Token", 401);
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new InvalidFieldError(
        "refreshToken",
        "Refresh Token is Expired or Used",
        401
      );
    }

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefereshTokens(user._id);

    const data = { accessToken, refreshToken: newRefreshToken };

    return data;
  } catch (error) {
    throw new InvalidFieldError("refreshToken", "Invalid refresh token", 401);
  }
};

module.exports = { register, login, logout, refreshAccessToken };
