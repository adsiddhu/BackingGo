import React from "react";
import HeroSection from "../components/HeroSection";
import { MenuSection } from "../components/MenuSection";
import { IndiaLoves } from "../components/IndiaLoves";
import { PromoBanner } from "../components/PromoBanner";
import { OurPromise } from "../components/OurPromise";
import { MagicalTicket } from "../components/MagicalTicket";
import { SocialGallery } from "../components/SocialGallery";
// import Login from "./Login";

export default function Home() {

  return (
    <div>
      <HeroSection />
      <MenuSection />
      <IndiaLoves />
      <PromoBanner />
      <OurPromise />
      <MagicalTicket />
      <SocialGallery />
      {/* <Login /> */}
    </div>
  );
}
