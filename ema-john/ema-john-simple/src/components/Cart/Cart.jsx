import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const cart = props.cart;
    // console.log(cart)

    let total = 0;
    let shipping = 0;
    for (let product of cart){
        let newPrice = total + product.price;
        let newShipping = shipping + product.shipping;
        shipping = newShipping;
        total = newPrice;
    }
    let tax = total * 7 / 100;
    let grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>order summery</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;