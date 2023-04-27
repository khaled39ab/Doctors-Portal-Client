import React from 'react';
import chair from '../../../assets/images/chair.png';

const AppointmentBanner2 = () => {
    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='chair' src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-10 shadow-xl'>
                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner2;