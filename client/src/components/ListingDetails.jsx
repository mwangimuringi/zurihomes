import { FaBath, FaBed, FaChair, FaMapMarkerAlt, FaParking } from "react-icons/fa";
import PropTypes from 'prop-types';
import Contact from "./Contact";

export default function ListingDetails({ listing, currentUser, contact, setContact }) {
  return (
    <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
      <p className="text-2xl font-semibold">
        {listing.name} - Ksh{" "}
        {listing.offer
          ? listing.discountPrice.toLocaleString("en-US")
          : listing.regularPrice.toLocaleString("en-US")}
        {listing.type === "rent" && " / month"}
      </p>
      <p className="flex items-center mt-6 gap-2 text-slate-600 text-sm">
        <FaMapMarkerAlt className="text-green-700" />
        {listing.address}
      </p>
      <div className="flex gap-4">
        <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
          {listing.type === "rent" ? "For Rent" : "For Sale"}
        </p>
        {listing.offer && (
          <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
            Ksh{+listing.regularPrice - +listing.discountPrice} OFF
          </p>
        )}
      </div>
      <p className="text-slate-800">
        <span className="font-semibold text-black">Description - </span>
        {listing.description}
      </p>
      <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
        <li className="flex items-center gap-1 whitespace-nowrap ">
          <FaBed className="text-lg" />
          {listing.bedrooms > 1
            ? `${listing.bedrooms} beds `
            : `${listing.bedrooms} bed `}
        </li>
        <li className="flex items-center gap-1 whitespace-nowrap ">
          <FaBath className="text-lg" />
          {listing.bathrooms > 1
            ? `${listing.bathrooms} baths `
            : `${listing.bathrooms} bath `}
        </li>
        <li className="flex items-center gap-1 whitespace-nowrap ">
          <FaParking className="text-lg" />
          {listing.parking ? "Parking spot" : "No Parking spot"}
        </li>
        <li className="flex items-center gap-1 whitespace-nowrap ">
          <FaChair className="text-lg" />
          {listing.furnished ? "Furnished" : "Unfurnished"}{" "}
        </li>
      </ul>
      {currentUser && listing.userRef !== currentUser._id && !contact && (
        <button
          onClick={() => setContact(true)}
          className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3"
        >
          Contact landlord
        </button>
      )}
      {contact && <Contact listing={listing} />}
    </div>
  );
}

ListingDetails.propTypes = {
  listing: PropTypes.shape({
    name: PropTypes.string.isRequired,
    offer: PropTypes.bool,
    discountPrice: PropTypes.number,
    regularPrice: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['rent', 'sale']).isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    parking: PropTypes.bool.isRequired,
    furnished: PropTypes.bool.isRequired,
    userRef: PropTypes.string.isRequired,
  }).isRequired,
  currentUser: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
  contact: PropTypes.bool.isRequired,
  setContact: PropTypes.func.isRequired,
};
