import React from 'react';
import './Banner.css';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero banner my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='chair' className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 text-justify">
                        Have you ever looked in the mirror and noticed problems with your smile? Do you have a variety of issues that you feel like are beyond repair? They are not! You can transform your smile with dental veneers. Contact our office today to schedule your consultation and learn more. Call us or book a new patient appointment today.
                    </p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;