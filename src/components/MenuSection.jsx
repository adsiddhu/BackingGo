import React from "react";
import { Link } from "react-router-dom";

export function MenuSection() {
  const categories = [
    {
      name: "CLASSIC",
      img: "/media/Regular-Cake.jpg",
      path: "/classic-cakes"
    },
    {
      name: "GOURMET",
      img: "/media/Signature.jpg",
      path: "/gourmet-cakes"
    },
    {
      name: "DESIGNER",
      img: "/media/Theme-Cake (2).jpg",
      path: "/designer-cakes"
    },
    {
      name: "PHOTO CAKES",
      img: "/media/Photo Cake_4_0.jpg",
      path: "/photo-cakes"
    },
    {
      name: "DESSERTS",
      img: "/media/Dessert (2).jpg",
      path: "/desserts"
    },
  ];
  return (
    <section className="bg-[#f6e9eb] py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-red-500 mb-2">
          Menu
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          What will you wish for?
        </p>

        {/* Horizontal Scroll Cards */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {categories.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="min-w-[225px] cursor-pointer group block"
            >
              {/* Image Card */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-65 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 font-semibold text-sm tracking-wide">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};