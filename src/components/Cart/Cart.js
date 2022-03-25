import React from 'react';
import './Cart.css'

const Cart = ({item}) => {
    // console.log(cart);
    return (
        <div>
            <div className='cart-details'>
                <img src={item.img} alt="" />
                <h3>{item.name}</h3>
            </div>
        </div>
    );
};

export default Cart;