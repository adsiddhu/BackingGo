import React from "react";

export function PromoBanner() {
    return (
        <section className="py-6 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative rounded-lg overflow-hidden cursor-pointer group">

                    {/* Banner Image */}
                    <img
                        src="https://bkmedia.bakingo.com/BK_Homepage_Promo_Banner_D.jpg"
                        alt="Promo Banner"
                        className="w-full h-[180px] md:h-[200px] object-cover"
                    />

                    {/* Dark Overlay (optional for better contrast) */}
                    <div className="absolute inset-0 bg-black/20"></div>

                </div>

            </div>
        </section>
    );
};