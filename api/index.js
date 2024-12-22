import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js"
import cookieParser from "cookie-parser";
import path from "path"; // Added path module for directory handling
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", err);
  });

const __dirname = path.resolve(); // Resolving __dirname for correct static path

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Connect routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// Serving static files from client/dist
app.use(express.static(path.join(__dirname, '/client/dist')));
