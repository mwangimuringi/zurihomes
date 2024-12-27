import React, { useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreateListing() {
  const currentUser = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    regular_price: 500,
    discounted_price: 100,
    offer: false,
    parking: false,
    furnished: false,
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Image submission logic
  const handleImageSubmit = async () => {
    setImageUploadError(false);

    if (files.length + formData.imageUrls.length > 6) {
      setImageUploadError("You can only upload 6 images per listing");
      return;
    }
    const uploadPromises = Array.from(files).map((file) => storeimage(file));

    try {
      const urls = await Promise.all(uploadPromises);
      setFormData((prev) => ({
        ...prev,
        imageUrls: [...prev.imageUrls, ...urls],
      }));
    } catch (error) {
      setImageUploadError("Error uploading image (2 MB max per image)");
    }
  };

  const storeimage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => reject(error),
        () =>
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
            resolve(downloadURL)
          )
      );
    });
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [id]: checked,
      });
    } else if (type === "number") {
      setFormData({
        ...formData,
        [id]: Math.max(Number(value), 0), // Ensure non-negative numbers
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    if (formData.imageUrls.length < 1) {
      setError("You must upload at least 1 image");
      return;
    }

    if (+formData.regular_price < +formData.discounted_price) {
      setError("Discounted price must be less than regular price");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          useRef: currentUser._id,
        }),
      });

      const result = await res.json();
      setLoading(false);

      if (!result.success) {
        setError(result.message);
        return;
      }

      navigate(`/listing/${result._id}`);
    } catch (error) {
      setError(
        "An error occurred while creating the listing. Please try again."
      );
      setLoading(false);
    }
  };

  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <textarea
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
            onChange={handleChange}
            value={formData.description}
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            id="address"
            required
            onChange={handleChange}
            value={formData.address}
          />
          {/* Rest of the JSX remains unchanged */}
        </div>
      </form>
    </main>
  );
}
