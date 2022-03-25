import React from "react";
import "./thank-you.css";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="thank-you-container">
      <p className="thank-you-para">Thank You For Your Purchase</p>
      <p className="having-trouble">Check your order in your <Link to="/profile">profile</Link></p>
      <p className="having-trouble">Having Trouble ? <Link to="/contact">Contact Us</Link></p>
      <Link to='/games'><button className="thank-you-btn">Go Back To The Shop</button></Link>
    </div>
  );
}

export default ThankYou;
