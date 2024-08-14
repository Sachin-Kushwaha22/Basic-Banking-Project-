import express from "express";
import {
  createNewUser,
  getAllUsers,
  getUserDetails,
} from "../controllers/userController.js";

const router = express.Router();

router.get("https://public-bank-for-charity-sachin.netlify.app//users", getAllUsers);

router.post("https://public-bank-for-charity-sachin.netlify.app//create-user", createNewUser);

router.get("https://public-bank-for-charity-sachin.netlify.app//user/:id", getUserDetails);

export default router;
