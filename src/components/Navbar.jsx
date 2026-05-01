import React from "react"
import { Search, MapPin, ChevronDown } from "lucide-react";

export default function Navbar() {


  <div className="font-sans">
    {/* Navbar */}

    <header className="bg-red-500 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-bold italic">
          <img src="https://bkmedia.bakingo.com/ssr-static/bakingo-logo-re.svg" alt="" />
        </h1>

        <div className="bg-red-500 text-white px-4 py-3 flex items-center gap-2 cursor-pointer w-fit rounded-md">
          {/* Location Icon */}
          <MapPin size={18} />

          {/* Text */}
          <span className="font-medium">Delivering To</span>

          {/* Dropdown Icon */}
          <ChevronDown size={16} />
        </div>

        <div className="hidden md:flex items-center bg-white rounded-md px-4 py-2 w-1/2 shadow-sm">

          {/* Search Icon */}
          <Search className="text-gray-500 w-5 h-5 mr-2" />

          {/* Input */}
          <input
            type="text"
            placeholder="Search For Cakes, Occasion, Flavour And More..."
            className="w-full outline-none text-sm placeholder-gray-500"
          />

        </div>

        <div className="flex items-center gap-8 text-white text-xs">

          {/* Track Order */}
          <div className="flex flex-col items-center cursor-pointer">
            <img
              src="https://bkmedia.bakingo.com/ssr-static/track-order.svg"
              alt="Track Order"
              className="w-6 h-6 mb-1"
            />
            <span>Track Order</span>
          </div>

          {/* Cart */}
          <div className="flex flex-col items-center cursor-pointer">
            <img
              src="https://bkmedia.bakingo.com/ssr-static/shopping-cart.svg"
              alt="Cart"
              className="w-6 h-6 mb-1"
            />
            <span>Cart</span>
          </div>

          {/* Login */}
          <div className="flex flex-col items-center cursor-pointer">
            <img
              src="https://bkmedia.bakingo.com/ssr-static/user-profile.svg"
              alt="Login"
              className="w-6 h-6 mb-1"
            />
            <span>Login</span>
          </div>

        </div>
      </div>

      {/* Nav Links */}
      <nav className="bg-gray-100 text-black border-t">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-8 px-4 py-3 overflow-x-auto">

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
            <a
              key={i}
              href="#"
              className="whitespace-nowrap text-[15px] font-medium hover:text-red-500 flex items-center gap-1"
            >
              {item}

              {/* New Badge for Hampers */}
              {item === "Hampers" && (
                <span className="bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full">
                  New
                </span>
              )}
            </a>
          ))}
        </div>
      </nav>
    </header>
  </div>
}