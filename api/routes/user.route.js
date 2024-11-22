// import express from "express";
// import { test, updateUser } from "../controllers/user.controller.js";

// const router = express.Router();

// router.get('/test', test);
// router.post('/update/:id', updateUser);

// export default router;

import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { validateUpdateProfile } from "../middlewares/validation.js"; 
import { authenticateUser } from "../middlewares/auth.js"; 

const router = express.Router();

// Test route
router.get('/test', test);

// Update profile route (partial updates)
router.patch('/update/:id', authenticateUser, validateUpdateProfile, updateUser);

export default router;

