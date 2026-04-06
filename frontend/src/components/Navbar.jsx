import React from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { setShowSearchBar, getCartCount } = useContext(ShopContext);
  const dropdownRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className="flex justify-between px-8 md:px-20 py-5 items-center">
        <Link to="/">
          <img src={assets.logo} className="w-36" />
        </Link>
        <ul className="hidden md:flex gap-5 text-sm">
          <NavLink to="/" className={({ isActive }) => "flex flex-col gap-1"}>
            {({ isActive }) => (
              <>
                <p className={isActive ? "font-semibold" : ""}>HOME</p>
                <hr
                  className={`w-full bg-gray-700 h-[1.5px] transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) => "flex flex-col gap-1"}
          >
            {({ isActive }) => (
              <>
                <p className={isActive ? "font-semibold" : ""}>COLLECTION</p>
                <hr
                  className={`w-full bg-gray-700 h-[1.5px] transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => "flex flex-col gap-1"}
          >
            {({ isActive }) => (
              <>
                <p className={isActive ? "font-semibold" : ""}>ABOUT</p>
                <hr
                  className={`w-full bg-gray-700 h-[1.5px] transition-all duration-300"  ${isActive ? "opacity-100" : "opacity-0"}`}
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => "flex flex-col gap-1"}
          >
            {({ isActive }) => (
              <>
                <p className={isActive ? "font-semibold" : ""}>CONTACT</p>
                <hr
                  className={`w-full bg-gray-700 h-[1.5px] transition-all duration-300"  ${isActive ? "opacity-100" : "opacity-0"}`}
                />
              </>
            )}
          </NavLink>
        </ul>
        <div className="flex flex-row gap-4 items-center">
          <img
            onClick={() => setShowSearchBar(true)}
            src={assets.search_icon}
            className="w-5 h-5"
          />
          <input
            type="text"
            className="hidden md:block border-2 px-2 py-1 rounded-lg"
          />
          <div className="group relative" ref={dropdownRef}>
            <Link to={'/login'}>
              <img
                src={assets.profile_icon}
                className="w-5 h-5 cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </Link>
            {open && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-30 py-2 border">
                <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </p>
                <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </p>
                <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                  Logout
                </p>
              </div>
            )}
          </div>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 h-5" />
            <p className="absolute -right-1.25 -bottom-1.25 text-center bg-black rounded-full text-white w-4 h-4 text-xs leading-4">
              {getCartCount()}
            </p>
          </Link>
          <img
            src={assets.menu_icon}
            className="w-5 h-5 md:hidden cursor-pointer"
            onClick={() => setVisible(true)}
          />
        </div>
      </div>
      {/* navbar for smaller screens*/}
      {visible && (
        <div
          className={`absolute top-0 right-0 bottom-0 bg-white ${visible ? "w-full" : "w-0"}`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex flex-row gap-4 p-3 cursor-pointer items-center bg-gray-200"
            >
              <img src={assets.dropdown_icon} className="rotate-180 h-3 w-3" />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
