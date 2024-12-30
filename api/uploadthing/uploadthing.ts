import { createUploadthing } from "uploadthing/express";
import type { FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const uploadRouter: FileRouter = {
  imageUploader: f()
    .onUploadStart(({ file }) => {
      // Optionally validate the file here
      console.log("Upload started:", file.name);
    })
    .onUploadComplete(({ file }) => {
      console.log("Upload completed:", file);
    }),
};

export type OurFileRouter = typeof uploadRouter;
