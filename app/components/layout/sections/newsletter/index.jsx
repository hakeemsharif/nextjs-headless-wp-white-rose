import React from "react";
import "./newsletter.css";
export default function Newsletter() {
  return (
    <section>
      <div className="section-header">
        <h1>Stay Connected</h1>
        <span className="section-border"></span>
      </div>

      <div className="main-newsletter">
        <div className="newsletter-email">
          <h2>Sign Up for the White Rose Newsletter</h2>
          <span>Enter Email Address</span>
          <input type="text" id="fname" name="fname" />
        </div>
      </div>
    </section>
  );
}
