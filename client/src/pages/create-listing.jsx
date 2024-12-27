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
  const [uploading, _setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(formData);
  // const handleImageSubmit = (e) => {
  //   if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
  //     const promises = [];
  //     for (let i = 0; i < files.length; i++) {
  //       promises.push(storeimage(files[i]));
  //     }
  //     Promise.all(promises)
  //       .then((urls) => {
  //         setFormData({
  //           ...formData,
  //           imageUrls: formData.imageUrls.concat(urls),
  //         });
  //         setImageUploadError(false);
  //       })
  //       .catch((error) => {
  //         setImageUploadError("Error uploading image (2 mb max per image)");
  //       });
  //   } else {
  //     setImageUploadError("You can only upload 6 images per listing");
  //   }
  // };
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
      setImageUploadError("Error uploading image (2 mb max per image)");
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
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };
  // const handleChange = (e) => {
  //   if (e.target.id === "sale" || e.target.id === "rent") {
  //     setFormData({
  //       ...formData,
  //       type: e.target.id,
  //     });
  //   }
  //   if (
  //     e.target.id === "parking" ||
  //     e.target.id === "furnished" ||
  //     e.target.id === "offer"
  //   ) {
  //     setFormData({
  //       ...formData,
  //       [e.target.id]: e.target.checked,
  //     });
  //   }
  //   if (
  //     e.target.id === "number" ||
  //     e.target.id === "text" ||
  //     e.target.id === "textarea"
  //   ) {
  //     setFormData({
  //       ...formData,
  //       [e.target.id]: e.target.value,
  //     });
  //   }
  // };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    // Handle checkboxes
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [id]: checked,
      });
    } else {
      // Handle other input types
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     //conditional validation
  //     if (formData.imageUrls.length < 1)
  //       return setError("You must upload atleast 1 image");
  //     //convert to Number
  //     if (+formData.regular_price < +formData.discounted_price)
  //       return setError("Discounted price must be less than regular price");
  //     setLoading(true);
  //     setError(false);
  //     const res = await fetch("/api/listing/create", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         ...formData,
  //         useRef: currentUser._id,
  //       }),
  //     });
  //     const data = await res.json();
  //     setLoading(false);
  //     if (data.success === false) {
  //       setError(data.message);
  //     }
  //     navigate(`/listing/${data._id}`);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    if (formData.imageUrls.length < 1) {
      setError("You must upload atleast 1 image");
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
            type="text"
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
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                id="sale"
                onChange={handleChange}
                checked={formData.type === "sale"}
              />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                id="rent"
                onChange={handleChange}
                checked={formData.type === "rent"}
              />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                id="parking"
                onChange={handleChange}
                checked={formData.parking}
              />
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                id="furnished"
                onChange={handleChange}
                checked={formData.furnished}
              />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-5"
                id="offer"
                onChange={handleChange}
                checked={formData.offer}
              />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="border p-3 border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.bedrooms}
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                className="border p-3 border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.bathrooms}
              />
              <p>Baths</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="regular_price"
                min="Ksh 1000"
                max="Ksh 1000,000"
                required
                className="border p-3 border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.regular_price}
              />
              <div className="flex flex-col items-center">
                <p>Regular price</p>
                {formData.type === "rent" && (
                  <span className="text-xs"> (Ksh / month)</span>
                )}
              </div>
            </div>
            {formData.offer && (
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="discounted_price"
                  min="Ksh 100"
                  max="Ksh 1000,000"
                  required
                  className="border p-3 border-gray-300 rounded-lg"
                  onChange={handleChange}
                  value={formData.discounted_price}
                />
                <div className="flex flex-col items-center">
                  <p>Discounted price</p>
                  {formData.type === "rent" && (
                    <span className="text-xs"> (Ksh / month)</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold text-center">
            Upload images:
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4 flex-wrap">
            <input
              onChange={(e) => setFiles(e.target.files)}
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="images/*"
              multiple
            />
            <button
              type="button"
              onClick={handleImageSubmit}
              className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
            >
              Upload
            </button>
          </div>
          <p className="text-red-700 text-sm">
            {imageUploadError && imageUploadError}
          </p>
          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`listing - ${index}`}
                className="w-40 h-40 object-cover rounded-lg"
              />
            ))}
          <button
            disabled={loading || uploading}
            className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Creating..." : "Create Listing"}
          </button>
          {error && <p className="text-red-700 text-sm">{error}</p>}
        </div>
        <p>{imageUploadError && imageUploadError}</p>
      </form>
    </main>
  );
}
