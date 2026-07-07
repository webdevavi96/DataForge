import { User } from "./model.js";
import mongoose from "mongoose";

export const register = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password)
      return res.status(400).json({ message: "Missing credentials!" });

    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
    });

    if (!user)
      return res.status(501).json({ message: "Internal server error!" });
    return res.status(201).json({ message: "Success" });
  } catch (error) {
    throw new Error(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(401).json({ message: "Invalid Credentials!" });

    const user = await User.findOne({ email }).select("+password");

    if (!user)
      return res
        .status(404)
        .json({ message: "User not exists or wrong credentials!" });

    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Wrong credentials" });
    }

    const refreshToken = user.generateRefreshToken();
    const accessToken = user.generateAccessToken();

    user.refreshToken = refreshToken;
    user.save({ validateBeforeSave: false });

    const userObj = user.toObject();
    delete userObj.refreshToken;
    delete userObj.password;

    return res
      .status(200)
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None",
        expires: new Date(Date.now() + 15 * 60 * 1000),
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None",
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      })
      .json({ data: userObj, message: "Login Success" });
  } catch (error) {
    throw new Error(error);
  }
};

export const logout = async (req, res) => {
  try {
    const { userId } = req._id;
    if (!mongoose.Types.ObjectId.isValid(userId))
      return res.status(400).json({ message: "Invalid User Credentials!" });

    await User.findByIdAndUpdate(
      userId,
      { $unset: { refreshToken: "" } },
      { new: true },
    );

    return res
      .status(200)
      .clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None",
      })
      .clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None",
      })
      .json({ message: "Logout success!" });
  } catch (error) {
    throw new Error(error);
  }
};
