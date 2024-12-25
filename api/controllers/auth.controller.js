import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import admin from '../utils/server.js';  // Keep only this import

export const signup = async (req, res, next) => {
  const { email, password, username } = req.body;
  try {
    // Check if email is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandler(400, "Email already exists"));
    }
    // Hashing the password
    const hashedPassword = bcryptjs.hashSync(password, 10);
    // Saving info in DB user model
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid password"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "User signed in", user: rest });
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { email, username, photo, idToken } = req.body;

  try {
    // Verify Google ID token using Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const googleEmail = decodedToken.email;  // Get email from the decoded token

    // Check if the email matches the provided one
    if (googleEmail !== email) {
      return next(errorHandler(400, "Google token verification failed"));
    }

    // Look for an existing user in the database using the email
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      return res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json({ message: "User signed in", user: rest });
    } else {
      // Create a new user if none exists
      const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const hashedPassword = await bcryptjs.hash(generatedPassword, 10);
      const newUser = new User({
        username: username.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4),
        email,
        password: hashedPassword,
        avatar: photo,
      });
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc;
      return res
        .cookie("access_token", token, { httpOnly: true })
        .status(201)
        .json({ message: "User created successfully via Google", user: rest });
    }
  } catch (error) {
    next(error);
  }
};

export const signout = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({ message: "User has been signed out successfully" });
  } catch (error) {
    next(error);
  }
};