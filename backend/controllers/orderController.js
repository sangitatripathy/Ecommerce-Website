import Order from "../models/order.model.js";
import User from "../models/user.model.js";

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

const placeOrderStripe = async (req, res) => {};

const placeOrderRazorpay = async (req, res) => {};

const allOrders = async (req, res) => {};

const userOrders = async (req, res) => {};

const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
