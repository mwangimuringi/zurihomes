import { createUploadthing } from "uploadthing/express";
import type { FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const uploadRouter = {
  imageUploader: f({
    allowedFileTypes: ["image"], 
    maxFileSize: "4MB",       
    maxFileCount: 6,            
  }).onUploadComplete(({ metadata, file }) => {
    console.log("Upload completed:", { metadata, file });
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;