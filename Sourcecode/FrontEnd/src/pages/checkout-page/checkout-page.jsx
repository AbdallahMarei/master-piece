import React,{useState} from 'react'
import CheckoutForm from '../../components/checkout-form/checkout-form'
import Coupon from '../../components/coupon/coupon'
import "./checkout-page.css"

function CheckoutPage({setLoggedUser}) {
    const [user] = useState(JSON.parse(sessionStorage.getItem("loggedUser")));
    const [totalPrice,setTotalPrice] = useState(user.cartItems.reduce((total,item) => total + item.quantity * item.price, 2))

    return (
        <div className='checkout-page-container'>
            <CheckoutForm setLoggedUser={setLoggedUser} totalPrice={totalPrice} />
            <Coupon totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
        </div>
    )
}

export default CheckoutPage
