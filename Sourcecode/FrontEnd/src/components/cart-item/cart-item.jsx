import React from 'react'
import "./cart-item.css"

function CartItem({cartItem,removeItem,addToCart,decreaseQuantity}) {
    const {name, image, price,quantity} = cartItem;      

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={image} alt="item" />
            </div>
            <span className="checkout-name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>decreaseQuantity(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                {cartItem.stock !== cartItem.quantity ? 
                <div className="arrow" onClick={()=>addToCart(cartItem)}>&#10095;</div> : ""}
            </span>
            <span className="price">${price * quantity}</span>
            <div className="remove-button" onClick={()=>removeItem(cartItem)} >&#10005;</div>
        </div>
    )
}

export default CartItem
