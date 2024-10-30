import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";

// assets
import Logo from "@/app/assets/logo/logo.png";
import iglogo from "@/app/assets/icons/ig.png";
import xlogo from "@/app/assets/icons/x.png";
import ytlogo from "@/app/assets/icons/yt.png";
import fblogo from "@/app/assets/icons/fb.png";
import linkedin from "@/app/assets/icons/linkedin.png";
// asset

export default function Footer() {
  const logos = [
    { src: fblogo, alt: "Instagram Logo" },
    { src: iglogo, alt: "Instagram Logo" },
    { src: xlogo, alt: "X Logo" },
    { src: ytlogo, alt: "YouTube Logo" },
    { src: linkedin, alt: "Linkedin Logo" },
  ];
  return (
    <footer>
      <div className="footer-left">
        <ul>
          <li>
            <Link href="/sports">Sports</Link>
          </li>
          <li>
            <Link href="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link href="/fashion">Fashion</Link>
          </li>
        </ul>
      </div>

      <div className="nav-logo">
        <Image src={Logo} alt="Logo" width={70} quality={100} priority />
      </div>

      <div className="footer-right">
        <ul>
          {logos.map((logo, index) => (
            <li key={index}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={350}
                quality={100}
                priority
                className={logo.className}
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
