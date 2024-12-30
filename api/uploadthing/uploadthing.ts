// api/uploadthing/uploadthing.ts
import { createUploadthing, type FileRouter } from "uploadthing/express";

const f = createUploadthing();

export const uploadRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 4,    
    },
  }).onUploadComplete((data) => {
    console.log("Upload completed", data); 
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
