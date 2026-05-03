import React from "react";

export function OurPromise() {

    const promises = [
        {
            title: "ON-TIME DELIVERY",
            desc: "Because no one likes late surprises.",
            img: "/media/on-time-delivery_0.png",
        },
        {
            title: "500+ DESIGNS",
            desc: "Wishes come in all shapes and sizes.",
            img: "/media/promise-design_0.png",
        },
        {
            title: "2 CR+ ORDERS",
            desc: "You can close your eyes and trust us.",
            img: "/media/promise-order_0.png",
        },
        {
            title: "BAKED FRESH",
            desc: "Spreading smiles, one slice at a time.",
            img: "/media/promise-baked_0.png",
        },
    ];



    return (
        <section
            className="relative py-16 bg-cover bg-center"
            style={{
                backgroundImage: `url("/media/footer-background-mob-bk.77168cbb.svg")`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/80"></div>

            <div className="relative max-w-7xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-red-500 mb-3">
                    Our Promise
                </h2>

                <p className="text-gray-600 text-lg mb-12">
                    There's no secret spell—only honest, hard work!
                </p>

                {/* Features */}
                <div className="grid md:grid-cols-4 gap-10">
                    {promises.map((item, i) => (
                        <div key={i} className="flex flex-col items-center">

                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-20 h-20 mb-4 object-contain"
                            />

                            <h3 className="font-bold tracking-wide mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm max-w-[200px]">
                                {item.desc}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}