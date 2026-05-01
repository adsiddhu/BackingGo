import React, { useEffect, useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { Star, Heart } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
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

      {/* Hero Section */}
      <section className="relative w-full h-[690px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.img}
              alt="banner"
              className="w-full h-full object-cover"
            />
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
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${current === index ? "bg-red-500" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>
      </section>

      <MenuSection />
      <IndiaLoves />
      <PromoBanner />
      <OurPromise />
      <MagicalTicket />
      <SocialGallery />
      <Footer />

    </div>
  );
}

export default Home;




export function MenuSection() {
  const categories = [
    {
      name: "CLASSIC",
      img: "src/media/Regular-Cake.jpg",
    },
    {
      name: "GOURMET",
      img: "src/media/Signature.jpg",
    },
    {
      name: "DESIGNER",
      img: "src/media/Theme-Cake (2).jpg",
    },
    {
      name: "PHOTO CAKES",
      img: "src/media/Photo Cake_4_0.jpg",
    },
    {
      name: "DESSERTS",
      img: "src/media/Dessert (2).jpg",
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
            <div
              key={i}
              className="min-w-[225px] cursor-pointer group"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



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
            ⭐ India Loves
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

const promises = [
  {
    title: "ON-TIME DELIVERY",
    desc: "Because no one likes late surprises.",
    img: "src/media/on-time-delivery_0.png",
  },
  {
    title: "500+ DESIGNS",
    desc: "Wishes come in all shapes and sizes.",
    img: "src/media/promise-design_0.png",
  },
  {
    title: "2 CR+ ORDERS",
    desc: "You can close your eyes and trust us.",
    img: "src/media/promise-order_0.png",
  },
  {
    title: "BAKED FRESH",
    desc: "Spreading smiles, one slice at a time.",
    img: "src/media/promise-baked_0.png",
  },
];


export function OurPromise() {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{
        backgroundImage: `url("src/media/footer-background-mob-bk.77168cbb.svg")`,
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
// ------------------------------------------------------------------------
export function SocialGallery() {
  const images = [
    "https://scontent-bom2-1.cdninstagram.com/v/t51.82787-15/627165556_18409474306135913_5952126987693080929_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=-KvbNAHGQ8wQ7kNvwGXacis&_nc_oc=AdqIM-e0W6Nh44vj8THZEBjngJbdV5vsEAH8MT4bq8c-E2bn3ro8kyWZUNF3VXNolj4&_nc_zt=23&_nc_ht=scontent-bom2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQH9x1LQmeaLmyBVtKiYVF8dp-t7qZa7B_UI16ISFIOrrgzAsGkcDPHhim2jtX8bP5MZOgIIxKu5tQ&oh=00_Af4xDtCZzyVO1ucuSaN48zB2mn6C6c_zLdxvE6gjW99r5Q&oe=69FA3F05",
    "https://scontent-bom2-4.cdninstagram.com/v/t51.82787-15/626322411_18409793056135913_2121080871562703076_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=o285TlezNhUQ7kNvwH147MD&_nc_oc=AdogTRpW-C8PTt99JS7IQF-0qOBsNrgeIV9xI2uSFUkUy4BgpmrK5E1we_TbKl69PFs&_nc_zt=23&_nc_ht=scontent-bom2-4.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQHyILeNFiw1GE_p3BWqoCVfI4FN5EkIbyZsPgIxsPShw98GlB9XQSihu3dC5Euq-yHU42bCDwTetQ&oh=00_Af6Q84Ws9FrtiAYHwfh_XrSkwxg_7nZTzhGphfqPThIODw&oe=69FA44A9",
    "https://scontent-bom2-1.cdninstagram.com/v/t51.82787-15/627064086_18409016572135913_3464744510498957851_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=GOecjsR7t7UQ7kNvwEUm_jS&_nc_oc=AdoRPnAWdCYpg_l1t7yYhruTaU1OY5C2ZUXxZE7quQBwKxCjaR-7fXRMoBNTMjqMgo4&_nc_zt=23&_nc_ht=scontent-bom2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQF_CJSz5_KcTLoaJ95XXbfNkCxedIssR1_nsoGw8rgCgbtaNfNXncCbf4GLWNYR7nxPLXjiVVV2zw&oh=00_Af6t_pIecgDP12CkVa6QneJOTTCfhXcXJ8sT4qIyrhasqw&oe=69FA56FE",
    "https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/682885000_18422355877135913_3436889974266498782_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=Y0EVrdGt2ccQ7kNvwFH5NxO&_nc_oc=AdoupOXbP1Bbr4YQ_CDhKz-GhABJjJU70VZH4ADoQLCGYQEb_LlNTEIs1D2biEtud4o&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQHURwGkpcJY3ZsYktWmaIsiwRyKdoiULzqfdjr8WdJ6rUUc1dNs-qwCrltnlSsG83mE4CSkp6SDWQ&oh=00_Af4xiGn75687EOYOHR8fc50JCQo2F1Vc-f1l0CsKJxwxIA&oe=69FA64F9",
    "https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/673832001_18421751491135913_4145577120300916705_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=WmQsH9mXFe0Q7kNvwEXeRMO&_nc_oc=AdqddMb6ikXowrghmOcXtK3G3jxc0FzA9zIkIzrQijzKnWVouHZhBfHUDDgIIVBIYHE&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQENBAV46UuJNEZ7x5Csb3XJv6YfVl-QH-KqjZZyXaRfEvZmvYbJb_IcDt9V8K8fp00FxFuuXVeGcw&oh=00_Af6p6mEqtXRRb2g1dzDjNPajrZ2uZoPKNCAkV5pGJkUvwg&oe=69FA6E84",
    "https://scontent-bom2-1.cdninstagram.com/v/t51.82787-15/672341486_18421271614135913_7264867468245962072_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=JzJl8zWRNNgQ7kNvwGK7jIz&_nc_oc=AdoVdiLQtaQnD0nPBRLDYQxtT7okTmkB4iaeWBQRXJbl390CGK6QTXuBv128QMdHw68&_nc_zt=23&_nc_ht=scontent-bom2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQFXUIyV_8OSvGBJP1TDfaVbEcnTaSBeY54UExyesc7fCHfiudw0Hmnryzm0nIBMBDxOAfoUCqDOEw&oh=00_Af6IyhppkJGXSfu0NGUKzds5kszzgWfM2k8E_eXeuHTRhw&oe=69FA5815",
    "https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/670309342_18420641818135913_7958054560369052331_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=awZ_9TfZ8v4Q7kNvwEoA6BL&_nc_oc=AdrGeCfGBKDzMzUG1EZXa0MUDejBUdzIwRUMMQ2G0X1PvtRTfRt3304KqWgZf-j8PiU&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQHMG_E0G9WAvBN6lc00JCGnVPrQbICVqL8kP-6zIm3Txt3B43gkqegmfRu6dIzsVjQ95XkRzxzmaA&oh=00_Af5p4HMw8CzlPyWQtHg5DrsLMX-ZrQ9qxcqyD6itTdSN4A&oe=69FA597F",
    "https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/658160516_18416452177135913_5841857888137941622_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=m8R-PwUHI8AQ7kNvwFjfrKR&_nc_oc=AdrULovQp_NMVBe1ycRLOCkgV-YnXdOpXSUHMYAJ46HvpoNz_1rry5xH4dVz7XjSa7o&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQEHO8NkRc35lWIQdMPVOPMfKUKBHvqTjnKVK5QLAvEdyjh2_-kt8Q5Kd0TK76SgVR8hxfOOoazseQ&oh=00_Af5fC4ZIlfFGMXw4Xn3tsSi-JFgonzNsrCLYqyp9PPK54A&oe=69FA574F",
    "https://scontent-bom2-1.cdninstagram.com/v/t51.82787-15/657719721_18416268322135913_3153135488919318724_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=msPSgEqmx_YQ7kNvwFav2Q_&_nc_oc=AdpRje4jJSv_HGcnPOJB-CYK8QRutE2vGm8FN_Q_5M2Iw4D2Tt0gr3WUH1ggwPWhtE4&_nc_zt=23&_nc_ht=scontent-bom2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQGx6zA0wctV6pfZuYjUitFPakuwOadLymmA5gGqQDyHwNDbTF_JaZAOGFchG28pQbyWqfw5kPxS4g&oh=00_Af5707vMSajIAA-Erm8yUPZPoQOyHiwOvUcxrX05ti6daw&oe=69FA535F",
    "https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/653562847_18414363433135913_1928416653367536174_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=mNzyiap2K5QQ7kNvwGan3-g&_nc_oc=AdoZGXm6WkV65BzbSaF4z1eBs0kMiSr7ngSIBIa1eVaMTt-H11AS8P6-SxFnfuyjpVY&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQGq4CMh47b_2Rm5IrtCHiEL-RycKY4D3hF7K27Q5DCuEGiFXE8XIkpUWEnPZnduo9dOLcey7oAYqw&oh=00_Af4YrFwIXUJkNHXXqyJj-lxy-0Ut18c9FDvGqos_0px4vg&oe=69FA66BA",
    "https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/642960666_18413250757135913_8413221284829113920_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=9Dq5QeOfFugQ7kNvwEHWceh&_nc_oc=AdoC3RLRkrzlOlTCoBTDZVQ1SPyUJrH6etbGFt3zlp11Ogvjuk-6xLM8ikPRgWmdz50&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQEHpiD_VvsUtJULAPiqa7ZyfhajAh74oCACapDygSE90AOL0exueo7TlenBB1EfYVNgXlugO4yCxQ&oh=00_Af46Ki_32C0opnmxvl_tml6CV3TaOa8DJdnIwnud0GZQKg&oe=69FA3FEF",
    "https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/642946404_18412934179135913_1712351900510858615_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=0rgWnY6MaS4Q7kNvwG1zDj6&_nc_oc=Adp-uDzG5upvZVRqDuotvFLX37CiAdAuv_TC3fy1d5TzVo6FNzdGqAKddOLVHwNYqek&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQFPUABAbAwnW4ZK20dpaJfhxBZ3Mcl1vkkcbYvsWGj_hVMVdMp395dQbdGcUdTUTaETKPLoHaKNjA&oh=00_Af4i36ahf0l4qfirUOH2tZXkbOfB50AFmhNa8tLvN-zlug&oe=69FA7080",
    "https://scontent-bom2-3.cdninstagram.com/v/t51.82787-15/640389539_18412803484135913_7559204981395675416_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=Jk3ymTnq8qQQ7kNvwHR2R7_&_nc_oc=AdqNk8p3JhxLuz02HG2JUgyHLgoWMSBQbVx9VgdJ_vb-s-1hfCGrj5ODcRzCvRohm94&_nc_zt=23&_nc_ht=scontent-bom2-3.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQEtWB-IbGiVgGFM3rv8ZujiAxZYhRXu4Mg0c1qX1ECVu3e-I_ErY_WQlrLuqYUYZDpknzbmVBKLyw&oh=00_Af6hwAxI5ENl2OYB7GKxFp6L9mWzcMAFjLt1KoftPCBYUg&oe=69FA6C21",
    "https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/641767716_18412621837135913_8490188864435597115_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=2Y0jHL28cdEQ7kNvwFAf_Lj&_nc_oc=AdqnuURiG976QEizNWLkhs1ziZl2npFmgCVGLsXKAO_vn4eQ5Y9HJPGZrvpV7tPjsnU&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQG48ZM0Y490raeTRyYwOsFh5sQUWyUDuGP-RQmQ3zokqSZbOwd3si8iuAGdup-lmk22xYo60jWVkA&oh=00_Af5lOFJzoFt7Bm-PJM1HeiOSOrSMfjvbT2sXfgIV3-Ehtg&oe=69FA62D2",
    "https://scontent-bom5-2.cdninstagram.com/v/t51.82787-15/629682267_18410319481135913_5020777322151730236_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=V_FpbjRKlvEQ7kNvwHOzgUO&_nc_oc=AdpUPGuW41tp8idnadIC7kSTnuFsWHaxm2Bao_YYhTTsotSe32oNPCTN7uuUSEQ2THw&_nc_zt=23&_nc_ht=scontent-bom5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQEZQUcnqWCQYt4omN6XwNtRh7RlliUXlkqT1TrHzWippI58SicDKWpBXvMjMiGMhs3FRof9BvHtHA&oh=00_Af7EM3_sQbmRFY235N-IiP3rPlzuKWrJBBgr-RRZk5z4jg&oe=69FA51DA",
    "https://scontent-bom2-1.cdninstagram.com/v/t51.82787-15/628023795_18410108230135913_7724887614867679214_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=dC08vQTw_JEQ7kNvwFl-xM3&_nc_oc=AdophBlKGIkWG9gnW6ncabXJlnZ-cpMuMWt2y9WQkCfqPigTIS5k4MAsdLR3BuPWZck&_nc_zt=23&_nc_ht=scontent-bom2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQFN-TuJDGYCan9bFYfpTHGJehzOEs9qqtRpPQgcWF-CVe5WmgC0hnjseGyhd1lUg9YnlOAyWtmH1Q&oh=00_Af5SPdsH2ZGsoZ7S_91qVYrLAnzfa0D8Fldt7zKuyqPhuw&oe=69FA68DD",
    "https://scontent-bom5-1.cdninstagram.com/v/t51.82787-15/627715993_18410009752135913_5197309358442733581_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=f5sexVJOFpIQ7kNvwHbhny6&_nc_oc=AdrXQGyYknFdhF08ydnWyDbtScs2nyi5OhKQBaL6WHx7iHPckYT-k9Ve68m0zDHwV8g&_nc_zt=23&_nc_ht=scontent-bom5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=OjPrOHPnYJx4HIrnmo4rtA&_nc_tpa=Q5bMBQEB7utqg-WghFxdcbx-Htq02N4lDWZVEMSsWkOjJMD__IMYWtJjsDECB4CYbnQT9Yygxe87ftY6cw&oh=00_Af6FCXA1gbGTaGvuS6NECAJNJIbdBTEGyTF46cF0lyyTqA&oe=69FA483F",
  ];

  return ( 
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-red-500 mb-2">
          What’s In Your Heart?
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          A glimpse from our social world!
        </p>

        {/* Horizontal Scroll */}
        <div className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth">

          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-[200px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt="social"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
// ------------------------------------------------------------------------


export function Footer() {
  return (
    <section
      className="relative pt-12 pb-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('src/media/footer-background.0f80c8bb.svg')",
      }}
    >
      {/* Overlay for soft effect */}
      <div className="absolute inset-0 bg-[#f5e6d8]/90"></div>

      <div className="relative z-10">

        {/* Newsletter */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-red-500">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>

          {/* Input */}
          <div className="flex items-center border border-red-400 rounded-md overflow-hidden w-full md:w-[400px]">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 px-4 py-2 outline-none bg-transparent"
            />
            <button className="px-4 text-red-500 text-xl">→</button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          {/* Logo + Social */}
          <div>
            <img
              src="https://bkassets.bakingo.com/bakingo-ssr/static/media/bakingo.8d020708.svg"
              alt="Bakingo Logo"
              className="mb-4"
            />

            <p className="text-sm text-gray-600 mb-4">
              © 2026. FA GIFTS PVT. LTD.
            </p>

            <div
              className="flex gap-4 text-red-500 text-lg">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>

          {/* Know Us */}
          <div>
            <h3 className="font-semibold text-red-500 mb-3">KNOW US</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Our Story</li>
              <li>Contact Us</li>
              <li>Locate Us</li>
              <li>Blog</li>
              <li>Media</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Need Help */}
          <div>
            <h3 className="font-semibold text-red-500 mb-3">NEED HELP</h3>
            <ul className="space-y-2 text-gray-700">
              <li>FAQ</li>
              <li>Cancellation And Refund</li>
              <li>Privacy Policy</li>
              <li>Terms And Conditions</li>
              <li>Customer Grievance</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h3 className="font-semibold text-red-500 mb-3">MORE INFO</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Corporate Cakes</li>
              <li>Coupons & Offers</li>
              <li>Download App</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}