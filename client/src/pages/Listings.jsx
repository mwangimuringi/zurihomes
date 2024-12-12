import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/listings/get/${params.listingId}`);
        const data = await response.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListings();
  }, [params.listingId]);
  console.log(loading);

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && <p className="text-center my-7 text-2xl">Something went wrong!</p>}
      {listing && (
        <div className="flex flex-col gap-4">
          <img
            src={listing.imageUrls[0]}
            alt="listing image"
            className="h-48 w-full object-contain"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{listing.name}</h1>
            <p className="text-slate-700">{listing.description}</p>
          </div>
        </div>
      )}
    </main>
  );
}
