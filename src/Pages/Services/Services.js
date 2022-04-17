import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, useServices] = useState([]);

    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => useServices(data))
    }, [])
    return (
        <div>
            <h2 className='title'>Services:{services.length}</h2>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;