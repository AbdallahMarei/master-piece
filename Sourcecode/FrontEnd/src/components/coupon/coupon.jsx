import React,{useState} from 'react'
import "./coupon.css"
import Swal from 'sweetalert2'

function Coupon({totalPrice,setTotalPrice}) {
    const [couponAmount,setCouponAmount] = useState("");
    const [user] = useState(JSON.parse(sessionStorage.getItem("loggedUser")));

    const handleCouponChange = (e) => {
        setCouponAmount(e.target.value);
    }

    const handleCouponSubmit = (e) => {
        e.preventDefault();
        if(totalPrice === user.cartItems.reduce((total,item) => total + item.quantity * item.price, 2)){
            if(couponAmount === "a1997"){
                setTotalPrice(totalPrice - totalPrice * 0.1)
                Swal.fire({
                    icon: "success",
                    title: "Good Job",
                    text: "Thank you for using the coupon",
                  });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Wrong coupon",
                  });
            }

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You already entered this coupon",
              });
        }
    }
    return (
        <div className='coupon-form-container'>
            <div class="col-25">
                <div class="coupon-container">
                    <div className='total-coupon'>
                    <h4>Cart</h4>
                    <span class="coupon-price"><i class="fa fa-shopping-cart"></i> <b>{user.cartItems.reduce((total, item) => total + item.quantity, 0)}</b></span>
                    </div>
                    <form onSubmit={handleCouponSubmit}>
                        <label htmlFor="coupon">Coupon</label>
                        <input className='coupon-input' type="text" id="coupon" name="coupon" value={couponAmount} onChange={handleCouponChange} placeholder="a1997" />
                        <button className='coupon-btn' type='submit'>Add Coupon</button>
                    </form>
                    <div className='total-coupon'>
                        <p>Total</p>
                        <span className="coupon-price"><b>$ {totalPrice}</b></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coupon
