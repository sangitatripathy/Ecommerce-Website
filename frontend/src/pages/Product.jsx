import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import Toast from "../components/Toast";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState([]);
  const [size, setSize] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  const handleAddToCart = () => {
    if (!size) {
      setShowToast(true);
      setToastMessage("Please select a size to add to cart");

      setTimeout(() => setShowToast(false), 2000);
      return
    }
    addToCart(productData._id, size);
    setToastMessage("Product added to cart");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ?
      <>
        <Toast message={toastMessage} show={showToast}/>
        <div className=" w-[91%] border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 mx-auto">
          <div className="flex gap-12 flex-col sm:flex-row">
            <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
              <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                {productData.image.map((item, index) => (
                  <img
                    onClick={() => setImage(item)}
                    className="w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer"
                    src={item}
                    key={index}
                  />
                ))}
              </div>
              <div className="w-full sm:w-[80%]">
                <img className="w-full h-auto" src={image} alt="" />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
              <div className="flex items-center gap-1 mt-2">
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_dull_icon} alt="" className="w-3.5" />
                <p className="pl-2">(122)</p>
              </div>
              <p className="mt-5 text-3xl font-medium">
                {currency}
                {productData.price}
              </p>
              <p className="mt-5 text-gray-500 md:w-4/5">
                {productData.description}
              </p>
              <div className="flex flex-col gap-4 my-8">
                <p>Select Size</p>
                <div className="flex gap-2">
                  {productData.sizes.map((item, index) => (
                    <button
                      onClick={() => setSize(item)}
                      className={`border py-2 px-4 bg-gray-200 rounded-md ${item === size ? "border-orange-500" : ""}`}
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <button
                  onClick={handleAddToCart}
                  className="px-8 py-3 text-white bg-black text-sm active:bg-gray-700"
                >
                  ADD TO CART
                </button>
                <hr className="mt-8 sm:w-4/5" />
                <div className="flex flex-col text-sm text-gray-500 mt-5 gap-1">
                  <p>100% original product.</p>
                  <p>Cash on delivery is available on this product.</p>
                  <p>Easy exchange and return policy within 7 days.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex">
              <b className="px-5 py-3 border text-sm">Description</b>
              <p className="px-5 py-3 border text-sm">Reviews (122)</p>
            </div>
            <div className="flex flex-col gap-4 px-6 border py-6 text-sm text-gray-500">
              <p>
                Great quality T-shirt! The fabric feels soft and breathable.
                Perfect for daily wear.
              </p>
              <p>
                Nice T-shirt overall, but the color was slightly different from
                the picture.
              </p>
              <p>Design is nice but the material could be better.</p>
            </div>
          </div>
          <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      </>
    : <div className="opacity-0"></div>;
};

export default Product;
