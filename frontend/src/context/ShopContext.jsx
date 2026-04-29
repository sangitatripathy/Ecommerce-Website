import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "../components/Toast";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    const cartData = structuredClone(cartItems);
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
    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, size },
          { headers: { token } },
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch {}
      }
    }
    return totalAmount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    const cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
    if (token) {
      try {
        axios.put(
          backendUrl + "/api/cart/update",
          { itemId, size, quantity },
          { headers: { token } },
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setProducts(response.data.products);
        console.log("Data fetched successfully:", response.data.products);
      } else {
        <Toast message={response.data.message} show={true} />;
      }
    } catch (error) {
      console.error("API call failed:", error.message);
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.get(backendUrl + "/api/cart/", {
        headers: { token },
      });
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
    addToCart,
    cartItems,
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
