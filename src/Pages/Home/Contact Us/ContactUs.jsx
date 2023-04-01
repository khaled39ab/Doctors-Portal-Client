import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div
            style={
                { background: `url(${appointment})` }
            }
            className='my-10'
        >
            <div className='text-center pt-10'>
                <h2 className='text-primary text-xl font-bold'>Contact Us</h2>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-white'>Stay Connect With us</h1>
            </div>
            <form className='mt-10 pb-16 text-center'>
                <input type="text" placeholder="Email Address" className="input w-full max-w-xs" /> <br />
                <input type="text" placeholder="Subject" className="input w-full max-w-xs my-3" /> <br />
                <textarea className="textarea w-full max-w-xs textarea-lg" placeholder="Your Message"></textarea> <br />

                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-5 px-6">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;