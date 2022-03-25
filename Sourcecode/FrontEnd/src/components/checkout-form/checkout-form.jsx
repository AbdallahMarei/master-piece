import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout-form.css";
import axios from "axios";
import Swal from "sweetalert2";

function CheckoutForm({ setLoggedUser, totalPrice }) {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("loggedUser"))
  );
  const navigate = useNavigate();
  const [checkoutInfo, setCheckoutInfo] = useState({
    phone: "",
    address: "",
    city: "",
    cardName: "",
    cardNumber: "",
    expYear: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutInfo({ ...checkoutInfo, [name]: value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    let newOrder = {
      total: totalPrice,
      address: checkoutInfo.address,
      user_id: user.id,
      cartItems: user.cartItems,
      phone: checkoutInfo.phone,
      city: checkoutInfo.city,
      cvv: checkoutInfo.cvv,
      expYear: checkoutInfo.expYear,
      cardName: checkoutInfo.cardName,
      cardNumber: checkoutInfo.cardNumber,
    };
    axios
      .post("http://localhost:8000/api/order", newOrder)
      .then((res) => console.log(res));
    user.cartItems.length = 0;
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    setUser(JSON.parse(sessionStorage.getItem("loggedUser")));
    setLoggedUser(JSON.parse(sessionStorage.getItem("loggedUser")));
    Swal.fire({
      icon: "success",
      title: "Thank you",
      text: "Thank you for purchasing from us",
    }).then((result) => {
      navigate("/thank-you");
    });
  };

  return (
    <div className="checkout-form-container">
      <div className="row">
        <div className="col-75">
          <div className="checkout-container">
            <form onSubmit={handleCheckout}>
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    value={user.name}
                    readOnly
                  />
                  <label for="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={user.email}
                    readOnly
                  />
                  <label for="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    value={checkoutInfo.address}
                    name="address"
                    required
                    onChange={handleChange}
                    placeholder="542 W. 15th Street"
                  />
                  <label for="phone">
                    <i className="fa fa-phone"></i> Phone Number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={checkoutInfo.phone}
                    required
                    onChange={handleChange}
                    placeholder="077777777"
                  />
                  <label for="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={checkoutInfo.city}
                    required
                    onChange={handleChange}
                    placeholder="Amman"
                  />
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                    <i className="fa fa-cc-paypal" style={{ color: "orange" }}></i>
                    <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                    <span className="delivery-fee">2 JDS Added For Delivery</span>
                  </div>
                  <label for="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardName"
                    required
                    value={checkoutInfo.cardName}
                    onChange={handleChange}
                    placeholder="Abdallah Kamal Marei"
                  />
                  <label for="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardNumber"
                    required
                    value={checkoutInfo.cardNumber}
                    onChange={handleChange}
                    placeholder="1111-2222-3333-4444"
                  />
                  <div className="row">
                    <div className="col-50">
                      <label for="expyear">Exp Year</label>
                      <input
                        type="number"
                        id="expyear"
                        name="expYear"
                        required
                        value={checkoutInfo.expYear}
                        onChange={handleChange}
                        placeholder="2018"
                      />
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input
                        type="number"
                        id="cvv"
                        name="cvv"
                        required
                        value={checkoutInfo.cvv}
                        onChange={handleChange}
                        placeholder="352"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <input type="submit" value="Confirm Purchase" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
