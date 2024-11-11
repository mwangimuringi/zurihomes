import React from "react";

export default function OAuth() {
  const handleGoogleClick = async () => {
    try {
    } catch (error) {
      console.log("could not connect to google", error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
    >
      Continue with Google
    </button>
  );
}
