import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import cake1 from '../../../images/cake1.jpg'
import cake2 from '../../../images/cake2.jpg'
import cake3 from '../../../images/cake3.jpg'
import './Banner.css'

const Banner = () => {


    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="image d-block w-100"
                    src={cake1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Food Mania Home Service</h3>
                    <p>Order your favorite items without hassle</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="image d-block w-100"
                    src={cake2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Food Mania Home Service</h3>
                    <p>Order your favorite items without hassle</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="image d-block w-100"
                    src={cake3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Food Mania Home Service</h3>
                    <p>Order your favorite items without hassle</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;