import React from "react";
import { Heart, Star } from "lucide-react";

export default function MangoCakes() {
    const products = [
        {
            name: "Mango Passion Fruit Bento Cake",
            price: 470,
            rating: 4.9,
            reviews: 8,
            tag: "New Arrival",
            img: "https://via.placeholder.com/300x300?text=Cake+1",
        },
        {
            name: "Naked Mango Cake",
            price: 559,
            rating: 4.8,
            reviews: 63,
            img: "https://via.placeholder.com/300x300?text=Cake+2",
        },
        {
            name: "Mango Cheesecake",
            price: 789,
            rating: 4.9,
            reviews: 27,
            tag: "Gourmet",
            img: "https://via.placeholder.com/300x300?text=Cake+3",
        },
        {
            name: "Mango Cheesecake Jar",
            price: 259,
            img: "https://via.placeholder.com/300x300?text=Cake+4",
        },
    ];

    return (
        <section className="bg-gray-100 min-h-screen px-6 py-8 pt-24">

            {/* Title */}
            <h1 className="text-center text-3xl font-bold text-red-500 mb-6">
                Mango Cakes
            </h1>

            {/* Sort Button */}
            <div className="mb-6">
                <button className="border px-4 py-2 rounded-md text-sm bg-white hover:bg-gray-50">
                    Sort ↓↑
                </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {products.map((item, i) => (
                    <div key={i} className="group">

                        {/* Image Section */}
                        <div className="relative rounded-xl overflow-hidden">

                            {/* Veg Icon */}
                            <div className="absolute top-2 left-2 w-4 h-4 border border-green-600 bg-white flex items-center justify-center z-10">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            </div>

                            {/* Product Image */}
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-60 object-cover rounded-xl group-hover:scale-105 transition duration-300"
                            />

                            {/* Badge */}
                            {item.tag && (
                                <span className="absolute bottom-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded">
                                    {item.tag}
                                </span>
                            )}

                            {/* Wishlist */}
                            <Heart className="absolute top-2 right-2 w-5 h-5 text-gray-600 bg-white rounded-full p-1 shadow cursor-pointer" />
                        </div>

                        {/* Info */}
                        <div className="mt-3">
                            <h3 className="text-sm font-medium">{item.name}</h3>

                            <p className="font-semibold mt-1">₹{item.price}</p>

                            {item.rating && (
                                <div className="flex items-center text-sm text-gray-500 gap-1 mt-1">
                                    <Star className="w-4 h-4 text-green-500 fill-green-500" />
                                    <span>{item.rating}</span>
                                    <span>({item.reviews} Reviews)</span>
                                </div>
                            )}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}