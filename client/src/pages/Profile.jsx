// src/components/Profile.jsx
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signoutUserStart,
  signoutUserFailure,
  signoutUserSuccess,
} from "../redux/User/userSlice";
import { useDispatch } from "react-redux";
import { uploadFile } from "@uploadthing/react";

export default function Profile() {
  const fileRef = useRef(null);
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
  const { currentUser, loading } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  const getAuthToken = () => {
    return localStorage.getItem("authToken");
  };

  useEffect(() => {
    const uploadProfileImage = async () => {
      if (!file) return;

      if (file.size > MAX_FILE_SIZE) {
        setFileUploadError(true);
        return;
      }

      try {
        setFilePercentage(0);
        setFileUploadError(false);

        await handleFileUpload(file);
      } catch (error) {
        setFileUploadError(true);
        console.error("File upload error:", error.message);
      }
    };

    uploadProfileImage();
  }, [file]);

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/uploadthing/imageUploader", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setFormData((prev) => ({ ...prev, avatar: data.url }));
        setFilePercentage(100);
      } else {
        throw new Error("Upload failed. Please try again.");
      }
    } catch (error) {
      setFileUploadError(true);
      console.error("File upload error:", error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        dispatch(updateUserSuccess(data));
      } else {
        const errorData = await res.json();
        dispatch(updateUserFailure(errorData.message));
      }
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signoutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutUserFailure(data.message));
        return;
      }
      dispatch(signoutUserSuccess(data));
    } catch (error) {
      dispatch(signoutUserFailure(data.message));
    }
  };

  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser.id}`);
      const data = await res.json();
      if (data.success === false) {
        setShowListingsError(true);
        return;
      }
      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listings/delete/${listingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <div className="relative">
          {/* Display loading spinner if file is being uploaded */}
          {filePercentage > 0 && filePercentage < 100 && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
              <div className="spinner-border text-white" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          <img
            onClick={() => fileRef.current.click()}
            src={formData?.avatar || currentUser.avatar}
            alt="profile"
            className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          />
        </div>
        <p className="text-center text-slate-700">
          {fileUploadError && (
            <span className="text-red-700">
              Error uploading image (image size must be less than 2MB)
            </span>
          )}
          {filePercentage > 0 && filePercentage < 100 && (
            <span className="text-slate-700">Uploading {filePercentage}%</span>
          )}
          {filePercentage === 100 && (
            <span className="text-green-700">Successfully uploaded!</span>
          )}
        </p>
        <input
          type="text"
          placeholder="username"
          id="username"
          defaultValue={currentUser.username}
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          defaultValue={currentUser.email}
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Update"}
        </button>
        <Link
          to="/create-listing"
          className="bg-green-700 text-white rounded-lg p-3 uppercase text-center hover:opacity-95"
        >
          Create Listing
        </Link>
      </form>

      {/* New Section for Additional Actions */}
      <div className="flex flex-col gap-4 mt-6">
        <button
          onClick={handleDeleteUser}
          className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95"
        >
          Delete Account
        </button>
        <button
          onClick={handleSignOut}
          className="bg-blue-700 text-white rounded-lg p-3 uppercase hover:opacity-95"
        >
          Sign Out
        </button>
        <button
          onClick={handleShowListings}
          className="bg-green-700 text-white rounded-lg p-3 uppercase hover:opacity-95"
        >
          Show Listings
        </button>

        {/* Display User Listings */}
        {userListings?.length > 0 && (
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Your Listings
            </h2>
            <ul className="space-y-4">
              {userListings.map((listing) => (
                <li
                  key={listing._id}
                  className="flex justify-between items-center border p-3 rounded-lg"
                >
                  <span>{listing.name}</span>
                  <button
                    onClick={() => handleListingDelete(listing._id)}
                    className="bg-red-700 text-white rounded-lg p-2 hover:opacity-95"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Error Message for Listings */}
        {showListingsError && (
          <p className="text-red-700 text-center">
            Error loading your listings. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
