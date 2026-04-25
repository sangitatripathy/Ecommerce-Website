import express from "express";
import {
  addToCart,
  updateCart,
  getUserCart,
} from "../controllers/cartController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/add", auth, addToCart);
router.put("/update", auth, updateCart);
router.get("/", auth, getUserCart);

export default router;
