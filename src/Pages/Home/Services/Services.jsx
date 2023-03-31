import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const serviceData = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            description: 'Fluoride is an inorganic, monatomic anion of fluorine, with the chemical formula F⁻ , whose salts are typically white or colorless.',
            img: fluoride
        },
        {
            id: 2,
            title: 'Cavity Filling',
            description: "One of the most popular uses of fillings is to “fill” an area of tooth that your dentist has removed due to decay – 'a cavity'.",
            img: cavity
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            description: "It's a quick and painless in-office whitening system that provides dramatic results—teeth that are up to eight shades whiter!",
            img: whitening
        },
    ];


    return (
        <div className='my-20'>
            <div className='text-center'>
                <h2 className='text-secondary text-2xl font-bold'>Our Services</h2>
                <h1 className='text-4xl font-bold'>Service We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 text-justify'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;