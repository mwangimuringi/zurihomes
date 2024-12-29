import React from "react";

export default function About() {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-6 rounded-t-md">
        <h1 className="text-5xl font-extrabold text-center mb-4">About ZuriHomes</h1>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Connecting you with your dream home through technology, expertise, and trust.
        </p>
      </div>
      <div className="py-16 px-6 max-w-5xl mx-auto bg-gray-50 shadow-lg rounded-md">
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          ZuriHomes is a platform that connects people with homes for rent or sale. 
          It is a web application that allows users to browse listings and make offers 
          and purchases.
        </p>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Our mission is to help our clients achieve their real estate goals by 
          providing expert advice, personalized service, and a deep understanding 
          of the local market.
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-10 text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Browse Listings
          </button>
          <button className="ml-4 bg-gray-100 text-blue-500 py-2 px-4 rounded hover:bg-gray-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}