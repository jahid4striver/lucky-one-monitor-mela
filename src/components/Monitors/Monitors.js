import React from 'react';
import './Monitors.css'
import '../Cart/Cart.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Monitor from '../Monitor/Monitor';
import Cart from '../Cart/Cart';
import Choose from '../Choose/Choose';

const Monitors = () => {
    const [monitors, setMonitors]= useState([]);
    const [cart, setCart]= useState([]);
    const [choose, setChoose]=useState([]);

    const handleCart= (monitorData)=>{
        const newCart=[...cart, monitorData];
        if(newCart.length<=4){
            setCart(newCart);
        }else{
            alert("You Can't Choose More Than 4 Items")
        }
        
    }

    const chooseOne= (selectedItems)=>{
       const randomNum= Math.floor(Math.random()* selectedItems.length );
       const selectedOne= selectedItems[randomNum];
       setChoose(selectedOne);

    }
    const chooseAgain= ()=>{
        setCart([]);
        setChoose([]);
    }

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setMonitors(data))
    },[])
    return (
        // Choosen Item
        <div>
            <div className='choose-container'>
                <Choose choose={choose}></Choose>
            </div>

            {/* Monitors Display */}

            <div className='container'>
            <div className='monitors-container'>
            {
                monitors.map(monitor=> <Monitor key={monitor.id} monitor={monitor}
                     handleCart={handleCart}></Monitor>)
            }
            </div>
        {/* Cart Display */}
            <div className='cart-container'>
                <h1 className='cart-head'>Selected Items</h1>
            <div>
                {
                    cart.map(item=><Cart item={item}></Cart>)
                }
            </div>
            <button onClick={()=>chooseOne(cart)} className='choose-btn'>Choose One For Me</button>
            <button onClick={chooseAgain} className='choose-btn'>Choose Again</button>
            </div>
        </div>
        </div>
    );
};

export default Monitors;