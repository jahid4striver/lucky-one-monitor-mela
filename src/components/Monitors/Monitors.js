import React from 'react';
import './Monitors.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Monitor from '../Monitor/Monitor';

const Monitors = () => {
    const [monitors, setMonitors]= useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setMonitors(data))
    },[])
    return (
        <div>
            <div className='monitors-container'>
            {
                monitors.map(monitor=> <Monitor key={monitor.id} monitor={monitor}></Monitor>)
            }
            </div>
        </div>
    );
};

export default Monitors;