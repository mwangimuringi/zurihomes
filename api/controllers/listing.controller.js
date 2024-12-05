import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};
export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(
      errorHandler(401, "You are not authorized to delete this listing")
    );
  }
  try {
    await listing.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(
      errorHandler(401, "You are not authorized to update this listing")
    );
  }
  try {
    await listing.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Listing updated successfully" });
  } catch (error) {
    next(error);
  }
};
