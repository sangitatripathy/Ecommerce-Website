import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendurl } from "../App";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);
  const currency = "$";

  const fetchList = async () => {
    try {
      const res = await axios.get(backendurl + "/api/product/list", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.data.success) {
        setList(res.data.products);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const res = await axios.delete(backendurl + `/api/product/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);
        await fetchList();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm mb-2">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
      </div>
      {list.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm mb-2"
        >
          <img className="w-12" src={item.image[0]} alt="" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>
            {currency}
            {item.price}
          </p>
          <p onClick={()=>removeProduct(item._id)} className="text-right md:text-center cursor-pointer text-lg">X</p>
        </div>
      ))}
    </div>
  );
};

export default List;
