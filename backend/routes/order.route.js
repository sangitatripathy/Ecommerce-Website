import express from "express";
import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  verifyRazorpay
} from "../controllers/orderController.js";
import auth from "../middleware/auth.js";
import { adminAuth } from "../middleware/adminAuth.js";

const router = express.Router();

//Admin Features
router.post("/list", adminAuth, allOrders);
router.post("/status", adminAuth, updateStatus);

//Payment features
router.post("/place", auth, placeOrder);
router.post("/stripe", auth, placeOrderStripe);
router.post("/razorpay", auth, placeOrderRazorpay);
router.post("/verifyRazorpay",auth,verifyRazorpay)

//User features
router.get("/userorders", auth, userOrders);

//verify payment
router.post("/verify", auth, verifyStripe);

export default router;
