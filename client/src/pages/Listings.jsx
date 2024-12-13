import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {Navigation} from "swiper/modules";
import "swiper/css/bundle";

export default function Listing() {
    SwiperCore.use([Navigation]);
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
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      {listing && !loading && !error && <h1>{listing.name}</h1>}
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
      ></Swiper>
    </main>
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-12">
    //       <div className="card">
    //         <div className="card-body">
    //           <h5 className="card-title">Listings</h5>
    //           <p className="card-text">
    //             <a href="/listings/1">
    //               <img
    //                 src="https://via.placeholder.com/150"
    //                 className="card-img-top"
    //                 alt="Listing 1"
    //               />
    //             </a>
    //             <a href="/listings/2">
    //               <img
    //                 src="https://via.placeholder.com/150"
    //                 className="card-img-top"
    //                 alt="Listing 2"                                     
    //               />
    //             </a>
    //             <a href="/listings/3">
    //               <img
    //                 src="https://via.placeholder.com/150"
    //                 className="card-img-top"
    //                 alt="Listing 3"
    //               />
    //             </a>
    //           </p>                  
    //         </div>
    //       </div>

    //     </div>      
    //   </div>
  );
  );
}
