import User from "../models/user.model.js";

const addToCart = async (req, res) => {
  try {
    const userId  = req.user.id;
    const { itemId, size } = req.body;
    const userData = await User.findById(userId);
    let cartData = userData.cartData;
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await User.findByIdAndUpdate(userId, { cartData }, { new: true });
    res.json({
      success: true,
      message: "Item added to cart successfully",
      cartData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add item to cart",
      error: error.message,
    });
  }
};

const updateCart = async (req, res) => {
  try {
    const userId  = req.user.id;
    const { itemId, size, quantity } = req.body;
    const userData = await User.findById(userId);
    let cartData = userData.cartData;
    cartData[itemId][size] = quantity;
    await User.findByIdAndUpdate(userId, { cartData }, { new: true });
    res.json({
      success: true,
      message: "Cart updated successfully",
      cartData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update cart",
      error: error.message,
    });
  }
};

const getUserCart = async (req, res) => {
  try {
    const userId  = req.user.id;
    const userData = await User.findById(userId);
    let cartData = userData.cartData;
    res.json({
      success: true,
      message: "Cart data retrieved successfully",
      cartData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get cart items",
      error: error.message,
    });
  }
};

export { addToCart, updateCart, getUserCart };
