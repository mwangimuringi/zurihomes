// src/index.ts
import express from "express";
import { createRouteHandler } from "uploadthing/express";
import { uploadRouter } from "./uploadthing"; // Import the upload router

const app = express();

// Middleware to handle profile picture uploads
app.use(
  "/api/uploadthing/profile-picture",
  createRouteHandler({
    router: uploadRouter,
  })
);

// Middleware to handle listing image uploads
app.use(
  "/api/uploadthing/listing-images",
  createRouteHandler({
    router: uploadRouter,
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
