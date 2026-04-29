import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import Stripe from "stripe";
import razorpay from "razorpay";
import crypto from "crypto";

const currency = "inr";
const deliveryCharges = 10;
//GATEWAY INITIALIZATION
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

const placeOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    const { items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const order = new Order(orderData);
    await order.save();
    await User.findByIdAndUpdate(userId, { cartData: {} });

    res.json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const placeOrderStripe = async (req, res) => {
  try {
    const userId = req.user.id;
    const { items, amount, address } = req.body;
    const { origin } = req.headers;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };

    const order = new Order(orderData);
    await order.save();

    const line_item = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_item.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: deliveryCharges * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_item,
      mode: "payment",
      success_url: `${origin}/verify?success=true&orderId=${order._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${order._id}`,
    });

    res.json({ success: true, url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//verify stripe
const verifyStripe = async (req, res) => {
  const userId = req.user.id;
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await Order.findByIdAndUpdate(orderId, { payment: true });
      await User.findByIdAndUpdate(userId, { cartData: {} });
      res.json({
        success: true,
        message: "Payment successful and order placed",
      });
    } else {
      await Order.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment failed, order cancelled" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const placeOrderRazorpay = async (req, res) => {
  try {
    const userId = req.user.id;
    const { items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "Razorpay",
      payment: false,
      date: Date.now(),
    };

    const order = new Order(orderData);
    await order.save();

    const options = {
      amount: amount * 100,
      currency: currency.toUpperCase(),
      receipt: order._id.toString(), // 🔥 IMPORTANT LINK
    };

    const orderResponse = await razorpayInstance.orders.create(options);

    res.json({
      success: true,
      order,
      razorpayOrder: orderResponse,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const verifyRazorpay = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {

      const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

      await Order.findByIdAndUpdate(orderInfo.receipt, {
        payment: true,
        status: "Paid",
      });

      await User.findByIdAndUpdate(userId, { cartData: {} });

      res.json({
        success: true,
        message: "Payment successful",
      });

    } else {
      res.json({ success: false, message: "Invalid signature" });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const allOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ date: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const userOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ userId }).sort({ date: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await Order.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  verifyRazorpay
};
