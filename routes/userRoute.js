import express from "express";
import { getMyProfile, loginUser, registerUser,logoutUser } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/login", loginUser);

router.post("/register", registerUser);

router.get("/logout", logoutUser);

router.get("/me", isAuthenticated, getMyProfile);

// same route for multiple methods
// Old Way
// router.get("/:id", findUserById);
// router.put("/:id", updateUserById);
// router.delete("/:id", deleteUserById);

// //Smart Way
// router
//   .route("/:id")
//   .get(findUserById)
//   .put(updateUserById)
//   .delete(deleteUserById);

export default router;
