import React from "react";
import ContactUS from "../../components/contact-form/contact-form";
import "./contact-page.css";

function ContactPage() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-overlay">
          <div className="contact-content">
            <h4>Contact Us</h4>
          </div>
        </div>
      </div>
      <ContactUS />
    </>
  );
}

export default ContactPage;
