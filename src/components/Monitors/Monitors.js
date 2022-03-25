import React from 'react';
import './Monitors.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Monitor from '../Monitor/Monitor';
import Cart from '../Cart/Cart';

const Monitors = () => {
    const [monitors, setMonitors]= useState([]);
    const [cart, setCart]= useState([]);
console.log(cart);

    const handleCart= (monitorData)=>{
        const newCart=[...cart, monitorData];
        // const allSelect=[...cart, newCart]
        setCart(newCart);
    }

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setMonitors(data))
    },[])
    return (
        <div className='container'>
            <div className='monitors-container'>
            {
                monitors.map(monitor=> <Monitor key={monitor.id} monitor={monitor}
                     handleCart={handleCart}></Monitor>)
            }
            </div>

            <div className='cart-container'>
                <h1>Selected Items</h1>
            <div>
                {
                    cart.map(item=><Cart item={item}></Cart>)
                }
            </div>
            </div>
        </div>
    );
};

export default Monitors;