import React, { useState, useEffect } from "react";

export default function HeroSection() {
    const slides = [
      {
        img: "src/media/Mango-Banner-web_desktop-banner (4).png"
      },
    
      {
        img: "src/media/anniversary-desktop_0.png"
      },
    
      {
        img: "src/media/Theme-Cake (2).png"
      },
    
      {
        img: "src/media/regular-cake-desktop.png"
      },
    
      {
        img: "src/media/Gourmet_Desktop.png"
      },
    ];

    const [current, setCurrent] = useState(0);


    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="relative w-full h-[690px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Image */}
                    <img
                        src={slide.img}
                        alt="banner"
                        className="w-full h-full object-cover"
                    />

                    {/* Text */}
                    <div className="absolute inset-0 flex items-center justify-end px-10 md:px-20">
                        <div className="text-right text-gray-800">
                            <h1 className="text-3xl md:text-5xl font-serif italic text-red-700 mb-3">
                                {slide.title}
                            </h1>
                            <h2 className="text-xl md:text-2xl font-semibold mb-5">
                                {slide.subtitle}
                            </h2>
                        </div>
                    </div>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-4 w-full flex justify-center gap-2">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${current === index ? "bg-red-500" : "bg-gray-300"
                            }`}
                    ></span>
                ))}
            </div>
        </section>
    );
}
