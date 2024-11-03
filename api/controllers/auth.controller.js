import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  //hashing password
  const hashedPassword = bcryptjs.hashSync(password, 10);
  //saving info in db user model
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (err) {
    res.status(500).json(error.message);
  }
};
