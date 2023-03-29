import React from "react";
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    for (const detail of cart){
        // console.log(detail.price);
        const newPrice = detail.price;
        const newShipping = detail.shipping
        totalPrice = totalPrice + newPrice;
        totalShipping = totalShipping + newShipping;
        // console.log(total);
    }


    const tax = totalPrice*7/100

    const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price : {totalPrice}</p>
      <p>Total Shipping : {totalShipping}</p>
      <p>Tax : {tax.toFixed(2)}</p>
      <h6 style={{'fontSize':'18px'}}>Grand Total : {grandTotal}</h6>
    </div>
  );
};

export default Cart;
