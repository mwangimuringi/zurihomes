// src/components/UploadButton.jsx
import React, { useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage";
import { app } from "../firebase";

export const UploadButton = ({ onUploadSuccess, onUploadError }) => {
  const fileRef = useRef(null);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = `${new Date().getTime()}_${file.name}`;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        onUploadError();
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          onUploadSuccess(downloadURL);
        });
      }
    );
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileRef}
        hidden
        accept="image/*"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Upload Image
      </button>
      <p>
        {fileUploadError && (
          <span className="text-red-700">Error uploading image</span>
        )}
        {filePercentage > 0 && filePercentage < 100 && (
          <span>{`Uploading ${filePercentage}%`}</span>
        )}
        {filePercentage === 100 && !fileUploadError && (
          <span className="text-green-700">Successfully uploaded!</span>
        )}
      </p>
    </div>
  );
};