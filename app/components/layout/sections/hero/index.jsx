import React from "react";
import Image from "next/image";
import "./hero.css";

// assets
import HeroBG from "@/app/assets/images/hero.webp"
// assets

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="filter">
        <h1>Beyond Representation, We Create Icons</h1>
      </div>
      <Image src={HeroBG} alt="Logo" width={2240} quality={100} priority />
    </div>
  );
}
