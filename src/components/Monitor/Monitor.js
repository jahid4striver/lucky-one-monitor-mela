import React from 'react';
import './Monitor.css'

const Monitor = ({monitor}) => {
    const {id, name, img, price}=monitor;
    // console.log(monitor);
    return (
        <div className='monitor'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price: BDT {price} Taka</h3>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Monitor;