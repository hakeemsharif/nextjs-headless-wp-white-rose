import React from "react";
import "./contact.css";
export default function Contact() {
  return (
    <section>
      <div className="contact-section">
        <div className="section-header">
          <h1>Contacts</h1>
          <span className="section-border"></span>
        </div>

        <div className="contact-card-list">
          <div className="contact-card">
            <h1>Austin</h1>
            <span>Street, District, City</span>
            <span>+1 (512) XXX XXXX</span>
          </div>

          <div className="contact-card">
            <h1>New York</h1>
            <span>Street, District, City</span>
            <span>+1 (212) XXX XXXX</span>
          </div>

          <div className="contact-card">
            <h1>Los Angeles</h1>
            <span>Street, District, City</span>
            <span>+1 (310) XXX XXXX</span>
          </div>

          <div className="contact-card">
            <h1>Beijing</h1>
            <span>Street, District, City</span>
            <span>+86 10 XXXX XXXX</span>
          </div>

          <div className="contact-card">
            <h1>Tokyo</h1>
            <span>Street, District, City</span>
            <span>+81 3 X XXX XXXX</span>
          </div>

          <div className="contact-card">
            <h1>Manila</h1>
            <span>Street, District, City</span>
            <span>+63 2 XXXX XXXX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
