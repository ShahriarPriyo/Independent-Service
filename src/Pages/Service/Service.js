import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <p>Name:{name}</p>
            <h5>Food Description:{description}</h5>
            <h6>Price:${price}</h6>

        </div>
    );
};

export default Service;