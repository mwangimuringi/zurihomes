import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({
    message: "Api route is working!",
  });
};
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(
      errorHandler(
        401,
        "Unauthorized",
        "You are not authorized to update this user"
      )
    );
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
   const updateUser = await User.findByIdAndUpdate(req.params.id, {
    $set:{
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar,
    }
  });
    } catch (error) {
      next (error)
    }
};
