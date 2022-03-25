import React from 'react';
import './Monitor.css'
import {MdAddShoppingCart} from 'react-icons/md'

const Monitor = ({monitor, handleCart}) => {
    const {id, name, img, price}=monitor;
    // console.log(monitor);
    return (
        <div className='monitor'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price: BDT {price} Taka</h3>
            <button className='btn-cart' onClick={()=>handleCart(monitor)}>Add To Cart <MdAddShoppingCart/></button>
        </div>
    );
};

export default Monitor;