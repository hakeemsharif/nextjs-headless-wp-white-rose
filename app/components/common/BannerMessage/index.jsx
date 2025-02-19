"use client"

import "@/app/styles/banner.css";
import { useEffect, useState } from "react";

export default function BannerMessage() {
    const [isVisible, setIsVisible] = useState(true);
    
    // I might enable it in the future, but for now, I don't think so.
    // useEffect(() => {
    //   const isDismissed = localStorage.getItem('demoNoticeDismissed');
    //   if (isDismissed) {
    //     setIsVisible(false);
    //   }
    // }, []);
    
    const handleDismiss = () => {
      setIsVisible(false);
    };
    
    if (!isVisible) return null;

  return (
    <div className="demo-notice" id="demoNotice">
      <span className="notice-icon"></span>
      <p className="notice-message">
        <b>DISCLAMER: </b>This is a demo website created to showcase my web
        development and design skills. All content and services shown here are
        for demonstration purposes only.
      </p>
      <button onClick={handleDismiss} className="close-button" aria-label="Dismiss notice">
        X
      </button>
    </div>
  );
}