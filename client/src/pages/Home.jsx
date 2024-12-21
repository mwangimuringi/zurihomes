import React from 'react'

export default function Home() {
  const onShowMoreClick = async () => {
    const numberOfListings = listings.length;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", numberOfListings);
  
    try {
      const res = await fetch(`/api/listing/get?${urlParams.toString()}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch additional listings: ${res.statusText}`);
      }
  
      const data = await res.json();
      if (data.length < 9) {
        setShowMore(false); // Hide "Show More" if fewer than 9 listings are returned
      }
      setListings([...listings, ...data]); // Append new listings
    } catch (error) {
      console.error("Error fetching additional listings:", error);
    }
  };  
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchOfferListings();
  }, []);
  
  return (
    <div className="flex-1">
      <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
        Listing results:
      </h1>
      <div className="p-7 flex-wrap gap-4">
        {!loading && listings.length === 0 && (
          <p className="text-xl text-slate-700">No listings found!</p>
        )}
        {loading && (
          <p className="text-xl text-slate-700 text-center w-full">
            Loading listings...
          </p>
        )}
        {!loading &&
          listings.map((listing) => (
            <ListingItem key={listing._id} listing={listing} />
          ))}
        {showMore && (
          <button
            onClick={onShowMoreClick}
            className="text-green-700 hover:underline p-7 text-center w-full"
          >
            Show More
          </button>
        )}
      </div>
    </div>
    {/* Swiper */}
<Swiper navigation>
  {offerListings &&
    offerListings.length > 0 &&
    offerListings.map((listing) => (
      <SwiperSlide>
        <div
          style={{
            background: `url(${listing.imageUrls[0]}) center no-repeat`,
            backgroundSize: 'cover',
          }}
          className='h-[500px]'
          key={listing._id}
        ></div>
      </SwiperSlide>
    ))}
</Swiper>
  );  
  <div className='flex flex-wrap gap-4'>
  {offerListings.map((listing) => (
    <ListingItem listing={listing} key={listing._id} />
  ))}
</div>

}
