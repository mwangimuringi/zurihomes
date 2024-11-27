import express from "express";
import { createListing } from "../controllers/listing.controller.js";

const router = express.Router();

router.post('/create', createListing);

export default router;