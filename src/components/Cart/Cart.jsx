import React from "react";
import './Cart.css'
const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity=0;
    for (const detail of cart){
        // detail.quantity = detail.quantity || 1;
        totalPrice = totalPrice + detail.price * 3;
        totalShipping = totalShipping + detail.shipping;
        quantity = quantity + detail.quantity;
    }


    const tax = totalPrice*7/100

    const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price : {totalPrice}</p>
      <p>Total Shipping : {totalShipping}</p>
      <p>Tax : {tax.toFixed(2)}</p>
      <h6 style={{'fontSize':'18px'}}>Grand Total : {grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
