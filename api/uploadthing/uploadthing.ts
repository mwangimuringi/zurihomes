import { createUploadthing } from "uploadthing/express";

const uploadthing = createUploadthing({
  image: {
    maxFileSize: "4MB",
    maxFileCount: 4,
  },
}).onUploadComplete((data) => {
  console.log("Upload completed:", data);
});

export default uploadthing;