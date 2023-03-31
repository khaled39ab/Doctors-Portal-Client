import React from 'react';
import quote from '../../../assets/icons/quote.svg';

const Testimonial = () => {
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary text-xl font-bold'>Testimonial</h4>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="quote" />
                </figure>
            </div>
        </section>
    );
};

export default Testimonial;