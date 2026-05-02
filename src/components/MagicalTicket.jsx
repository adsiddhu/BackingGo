import React from "react";

export function MagicalTicket() {
    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6">

                {/* Image Container */}
                <div className="relative">

                    {/* Image */}
                    <img
                        src="src/media/occ-rem-desktop.png"
                        alt="Magical Ticket"
                        className="w-full rounded-xl"
                    />

                    {/* Center Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-red-500 text-white mt-50 px-8 py-3 rounded-md font-semibold hover:bg-red-600 transition shadow-lg">
                            UNLOCK NOW
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}