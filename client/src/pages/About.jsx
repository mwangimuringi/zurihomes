import React from "react";

export default function About() {
  return (
    <div className="py-16 px-6 max-w-5xl mx-auto bg-gray-50 shadow-lg rounded-md">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">
        About ZuriHomes
      </h1>
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
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        At ZuriHomes, we believe that the best way to find the perfect home for 
        you is to get to know the people who live there. We offer a wide range of 
        properties for sale, from apartments to houses, and we are committed to 
        helping our clients find the perfect place to live.
      </p>
    </div>
  );
}