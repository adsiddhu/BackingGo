import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MegaMenu() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = (item) => {
        if (item === "Mango Cakes") {
            navigate("/mango-cakes");
        }
        setOpen(false);
    };

    return (
        <div className="relative bg-white border-b">

            {/* Navbar */}
            <div className="flex gap-8 px-6 py-4 text-sm font-medium">

                {/* Cakes (Hover Trigger) */}
                <div
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    className="relative"
                >
                    <span className="cursor-pointer text-red-500 border-b-2 border-red-500 pb-1">
                        Cakes
                    </span>

                    {/* Dropdown */}
                    {open && (
                        <div
                            className="absolute left-0 top-full mt-2 w-[900px] bg-white shadow-xl rounded-lg p-6 grid grid-cols-4 gap-8 z-50"
                        >

                            {/* Column 1 */}
                            <div>
                                <h4 className="font-semibold mb-3">⭐ Trending Cakes</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="cursor-pointer hover:text-red-500" onClick={() => handleClick("Mango Cakes")}>Mango Cakes</li>
                                    <li>Fire Cakes</li>
                                    <li>Ribbon Cakes</li>
                                    <li>Fresh Drops</li>
                                    <li>Cricket Cakes</li>
                                    <li>Gourmet Cakes</li>
                                    <li>Bento Cakes</li>
                                    <li>Camera Cakes</li>
                                    <li>Anime Cakes</li>
                                    <li>Pinata Cakes</li>
                                    <li>Drip Cakes</li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="bg-gray-100 p-4 rounded">
                                <h4 className="font-semibold mb-3">⭐ By Type</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>Bestsellers</li>
                                    <li>Eggless Cakes</li>
                                    <li>Photo Cakes</li>
                                    <li>Cheese Cakes</li>
                                    <li>Half Cakes</li>
                                    <li>Heart Shaped Cakes</li>
                                    <li>Rose Cakes</li>
                                    <li>All Cakes</li>
                                </ul>
                            </div>

{/* Column 3 */}
                            <div>
                                <h4 className="font-semibold mb-3">⭐ By Flavours</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>Chocolate Cakes</li>
                                    <li>Pineapple Cakes</li>
                                    <li className="cursor-pointer hover:text-red-500" onClick={() => handleClick("Mango Cakes")}>Mango Cakes</li>
                                    <li>Fruit Cakes</li>
                                    <li>Butterscotch Cakes</li>
                                    <li>Blueberry Cakes</li>
                                    <li>Black Forest Cakes</li>
                                    <li>Vanilla Cakes</li>
                                    <li>Red Velvet Cakes</li>
                                    <li>Kit Kat Cakes</li>
                                    <li>Oreo Cakes</li>
                                </ul>
                            </div>

                            {/* Column 4 */}
                            <div>
                                <h4 className="font-semibold mb-3">⭐ Delivery Cities</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>Cakes To Bangalore</li>
                                    <li>Cakes To Delhi</li>
                                    <li>Cakes To Hyderabad</li>
                                    <li>Cakes To Mumbai</li>
                                    <li>Cakes To Noida</li>
                                    <li>Cakes To Chennai</li>
                                    <li>Cakes To Gurgaon</li>
                                    <li>Cakes To Pune</li>
                                    <li>Cakes To Jaipur</li>
                                    <li>Cakes To Chandigarh</li>
                                </ul>
                            </div>

                        </div>
                    )}
                </div>

                {/* Other Menu Items */}
                <span className="cursor-pointer">Bento</span>
                <span className="cursor-pointer">Theme Cakes</span>
                <span className="cursor-pointer">By Relationship</span>
                <span className="cursor-pointer">Desserts & Hampers</span>

            </div>
        </div>
    );
}