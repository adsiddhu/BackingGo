import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <section
      className="relative pt-12 pb-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/media/footer-background.0f80c8bb.svg')",
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
            <a href="/">
              <img
                src="https://bkassets.bakingo.com/bakingo-ssr/static/media/bakingo.8d020708.svg"
                alt="BakingGo Logo"
                className="mb-4"
              />
            </a>

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