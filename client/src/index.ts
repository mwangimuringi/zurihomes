import express from "express";

import { createRouteHandler } from "uploadthing/express";

import { uploadRouter } from "./uploadthing";

const app = express();

app.use(
  "/api/uploadthing",
  createRouteHandler({
    router: uploadRouter,
    config: { ... },
  }),
);
