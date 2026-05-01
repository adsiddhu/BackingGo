import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";
import IndiaLoves from "../components/IndiaLoves";
import PromoBanner from "../components/PromoBanner";
import OurPromise from "../components/OurPromise";
import MagicalTicket from "../components/MagicalTicket";
import SocialGallery from "../components/SocialGallery";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <div>
      <Navbar />
      <HeroSection />
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
