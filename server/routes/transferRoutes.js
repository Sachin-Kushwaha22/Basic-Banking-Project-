import express from "express";
import {
  handleFundTransfer,
  getAllTransactions,
} from "../controllers/transferController.js";

const router = express.Router();

router.get("https://public-bank-for-charity-sachin.netlify.app/all-transactions", getAllTransactions);

router.post("https://public-bank-for-charity-sachin.netlify.app/fund-transfer", handleFundTransfer);

export default router;
