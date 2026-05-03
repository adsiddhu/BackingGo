import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, MapPin, ChevronDown, Crosshair } from "lucide-react";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    if (item === "Cakes") {
      navigate("/cakes");
    } else if (item === "Theme Cakes") {
      navigate("/theme-cakes");
    } else if (item === "By Relationship") {
      navigate("/by-relationship");
    } else if (item === "Desserts") {
      navigate("/desserts");
    } else if (item === "Birthday") {
      navigate("/birthday");
    } else if (item === "Hampers") {
      navigate("/hampers");
    } else if (item === "Anniversary") {
      navigate("/anniversary");
    } else if (item === "Occasions") {
      navigate("/occasions");
    } else if (item === "Customized Cakes") {
      navigate("/customized-cakes");
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="bg-red-500 text-white sticky top-0 z-50 shadow-md">

        {/* Top Bar */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 gap-4">

          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img
                src="https://bkmedia.bakingo.com/ssr-static/bakingo-logo-re.svg"
                alt="BakingGo Logo"
                className="h-8 object-contain cursor-pointer"
              />
            </a>
          </div>

          {/* Delivering To */}
          <div
            onClick={() => setOpen(true)}
            className="hidden sm:flex items-center gap-2 cursor-pointer hover:opacity-90"
          >
            <MapPin size={18} />
            <span className="font-bold text-m ">Delivering To</span>
            <ChevronDown size={16} />
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center bg-white rounded-md px-4 py-2 w-1/2 shadow-sm">
            <Search className="text-gray-500 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search For Cakes, Occasion, Flavour And More..."
              className="w-full outline-none text-sm text-black placeholder-gray-500"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 text-xs">

            <div className="flex flex-col items-center cursor-pointer hover:opacity-90">
              <img
                src="https://bkmedia.bakingo.com/ssr-static/track-order.svg"
                alt="Track Order"
                className="w-6 h-6 mb-1"
              />
              <span className="font-bold text-sm">Track Order</span>
            </div>

            <Link
              to="/cart"
              className="flex flex-col items-center cursor-pointer hover:opacity-90"
            >
              <img
                src="https://bkmedia.bakingo.com/ssr-static/shopping-cart.svg"
                alt="Cart"
                className="w-6 h-6 mb-1"
              />
              <span className="font-bold text-sm">Cart</span>
            </Link>

            <Link
              to="/login"
              className="flex flex-col items-center cursor-pointer hover:opacity-90"
            >
              <img
                src="https://bkmedia.bakingo.com/ssr-static/user-profile.svg"
                alt="Login"
                className="w-6 h-6 mb-1"
              />
              <span className="font-bold text-sm">Login</span>
            </Link>

          </div>
        </div>

{/* Nav Links */}
        <nav className="bg-gray-100 text-black border-t">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-8 px-4 py-3 overflow-x-auto no-scrollbar">

            {[
              "Cakes",
              "Theme Cakes",
              "By Relationship",
              "Desserts",
              "Birthday",
              "Hampers",
              "Anniversary",
              "Occasions",
              "Customized Cakes",
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => handleNavClick(item)}
                className="whitespace-nowrap text-[15px] font-bold hover:text-red-500 flex items-center gap-1 bg-transparent cursor-pointer"
              >
                {item}

                {item === "Hampers" && (
                  <span className="bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full">
                    New
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

          <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg overflow-hidden">

            {/* Header */}
            <div className="bg-red-100 px-5 py-4 flex justify-between items-center">
              <h2 className="font-semibold text-lg">
                Enter Delivery Location
              </h2>
              <MapPin className="text-red-500" />
            </div>

            {/* Body */}
            <div className="p-5 space-y-5">

              {/* Input */}
              <div className="flex items-center border rounded-xl px-3 py-2">
                <Search className="text-gray-400 w-5 h-5 mr-2" />
                <input
                  type="text"
                  placeholder="Search for area/locality/pinCode"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* Current Location */}
              <div className="flex items-center justify-center text-red-500 cursor-pointer gap-2 hover:underline">
                <Crosshair className="w-5 h-5" />
                <span className="font-medium">
                  Use my current location
                </span>
              </div>

              {/* Close Button (FIXED) */}
              <button
                onClick={() => setOpen(false)}
                className="w-full py-2 rounded-md bg-gray-200 hover:bg-red-500 hover:text-white cursor-pointer transition duration-300"
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}