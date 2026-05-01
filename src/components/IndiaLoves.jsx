export function IndiaLoves() {
    const products = [
        {
            name: "Rich Chocolate Truffle Cake",
            price: 549,
            rating: 4.9,
            reviews: "8.4K",
            img: "src/media/choco-truffle-cake0005choc-AA.jpg",
        },
        {
            name: "Choco Chip Truffle Cake",
            price: 549,
            rating: 4.9,
            reviews: "1.4K",
            img: "src/media/chocolate-chip-cake0008choc-AAA.jpg",
        },
        {
            name: "Tropical Fruit N Almond Cake",
            price: 649,
            rating: 4.9,
            reviews: "2.3K",
            img: "src/media/fresh-fruit-cake0014frui-AAAAA.jpg",
        },
        {
            name: "Rich Butterscotch Crunch Cake",
            price: 529,
            rating: 4.9,
            reviews: "2.7K",
            img: "src/media/butterscotch-cake0003butt-AAAA.jpg",
        },
        {
            name: "Whipped Cream Pineapple Cake",
            price: 549,
            rating: 4.9,
            reviews: "1.7K",
            img: "src/media/sq-pineapple-cake0022pifr-AAAA.jpg",
        },
        {
            name: "Rich Chocolate Truffle Cake",
            price: 549,
            rating: 4.9,
            reviews: "8.4K",
            img: "src/media/choco-truffle-cake0005choc-AA.jpg",
        },
        {
            name: "Choco Chip Truffle Cake",
            price: 549,
            rating: 4.9,
            reviews: "1.4K",
            img: "src/media/chocolate-chip-cake0008choc-AAA.jpg",
        },
        {
            name: "Tropical Fruit N Almond Cake",
            price: 649,
            rating: 4.9,
            reviews: "2.3K",
            img: "src/media/fresh-fruit-cake0014frui-AAAAA.jpg",
        },
        {
            name: "Rich Butterscotch Crunch Cake",
            price: 529,
            rating: 4.9,
            reviews: "2.7K",
            img: "src/media/butterscotch-cake0003butt-AAAA.jpg",
        },
        {
            name: "Whipped Cream Pineapple Cake",
            price: 549,
            rating: 4.9,
            reviews: "1.7K",
            img: "src/media/sq-pineapple-cake0022pifr-AAAA.jpg",
        },
    ];

    return (
        <section className="bg-gray-100 py-14">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-red-500 flex items-center justify-center gap-2">
                        <img src="src/media/re-star.png" alt="star image" />
                        India Loves
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Bestsellers from across the country
                    </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-6 overflow-x-auto no-scrollbar">

                    {products.map((item, i) => (
                        <div key={i} className="min-w-[220px] max-w-[220px] flex-shrink-0 group">

                            {/* Image */}
                            <div className="relative rounded-xl overflow-hidden">

                                {/* Veg Icon */}
                                <div className="absolute top-2 left-2 w-4 h-4 bg-white border border-green-600 flex items-center justify-center z-20">
                                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                </div>

                                {/* Product Image */}
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition duration-300"
                                />

                                {/* Wishlist Icon */}
                                <Heart className="absolute top-2 right-2 w-5 h-5 text-gray-600 bg-white rounded-full p-1 shadow cursor-pointer z-20" />
                            </div>

                            {/* Info */}
                            <div className="mt-3">
                                <h3 className="text-sm font-medium line-clamp-2">
                                    {item.name}
                                </h3>

                                <p className="font-semibold mt-1">₹{item.price}</p>

                                <div className="flex items-center text-sm text-gray-500 gap-1 mt-1">
                                    <Star className="w-4 h-4 text-green-500 fill-green-500" />
                                    <span>{item.rating}</span>
                                    <span>({item.reviews} Reviews)</span>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}