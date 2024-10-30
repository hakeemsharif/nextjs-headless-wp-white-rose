"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import "./navbar.css";

// assets
import Logo from "@/app/assets/logo/logo.png";
// assets

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showSidebar = () => {
    setIsSidebarOpen(true);
  };

  const hideSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav>
      <div className="home-navbar">
        <div className="nav-left">
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
          <Link href="/">
            <Image src={Logo} alt="Logo" width={70} quality={100} priority />
          </Link>
        </div>

        <div className="nav-right">
          <ul
            className="mobile-nav"
            style={{ display: isSidebarOpen ? "flex" : "none" }}
          >
            <li onClick={hideSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1C1C1C"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>
            <li>
              <Link href="/" onClick={hideSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={hideSidebar}>
                About
              </Link>
            </li>
            <li>
              <Link href="/news" onClick={hideSidebar}>
                News
              </Link>
            </li>
            <li>
              <Link href="/sports" onClick={hideSidebar}>
                Sports
              </Link>
            </li>
            <li>
              <Link href="/entertainment" onClick={hideSidebar}>
                Entertainment
              </Link>
            </li>
            <li>
              <Link href="/fashion" onClick={hideSidebar}>
                Fashion
              </Link>
            </li>
          </ul>

          <ul>
            <li className="hide-mobile">
              <Link href="/">Home</Link>
            </li>
            <li className="hide-mobile">
              <Link href="/about">About</Link>
            </li>
            <li className="hide-mobile">
              <Link href="/news">News</Link>
            </li>
            <li onClick={showSidebar} className="mobile-menu-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#FFFFFF"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
