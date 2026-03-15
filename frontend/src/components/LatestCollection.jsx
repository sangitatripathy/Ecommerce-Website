import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, SetLatestProduct] = useState([]);

  useEffect(() => {
    SetLatestProduct(products.slice(0, 10));
  }, []);
  return (
    <div className="w-[91%] my-10 mx-auto">
      <div className="text-center text-3xl mb-5">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          non, quae maxime eos necessitatibus excepturi aperiam sed nam nisi
          corrupti!
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
