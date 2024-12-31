// src/index.ts
import express from "express";
import { createRouteHandler } from "uploadthing/express";
import { uploadRouter } from "./uploadthing";  // Import the upload router

const app = express();

// Middleware to handle file uploads
app.use(
  "/api/uploadthing",
  createRouteHandler({
    router: uploadRouter,
    config: { /* Optional config like JWT secret or authentication */ },
  }),
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
