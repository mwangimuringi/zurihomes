import Listing from "../models/listing.model.js";

export const createListing = async(req, res, next) => {
  
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
};
export const deleteListing = async(req, res, next) => {
    
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }
};