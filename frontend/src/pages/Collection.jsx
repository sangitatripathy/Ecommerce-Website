import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, showSearchBar, search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] =useState([]);
  const [sortType,setSortType] = useState('relevant');

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () =>{
    let productsCopy = products.slice();

    if(showSearchBar && search){
      productsCopy= productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilteredProducts(productsCopy)
  }

  const sortProduct = () =>{
    const fpCopy=filteredProducts.slice()
    switch(sortType){
      case "low-high":
        setFilteredProducts(fpCopy.sort((a,b)=>(a.price-b.price)))
        break;
      case "high-low":
        setFilteredProducts(fpCopy.sort((a,b)=>(b.price-a.price)))
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearchBar])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className="w-[90%] mx-auto flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="text-sm font-medium mb-3">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Men"} onChange={toggleCategory}/>
              Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} onChange={toggleCategory}/>
              Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Kids"} onChange={toggleCategory}/>
              Kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="text-sm font-medium mb-3">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topwear"} onChange={toggleSubCategory}/>
              TopWear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bottomwear"} onChange={toggleSubCategory}/>
              BottomWear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Winterwear"} onChange={toggleSubCategory}/>
              WinterWear
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className=" flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/*Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevance</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 mid:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
