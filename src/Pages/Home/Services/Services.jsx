import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="my-4">
            <div className='text-center space-y-3'>
                <h3 className="text-3xl text-orange-600 text-center">Service</h3>
                <h2 className="text-6xl">Our Service Area</h2>
                <p className="text-[#737373] w-[715px] mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;