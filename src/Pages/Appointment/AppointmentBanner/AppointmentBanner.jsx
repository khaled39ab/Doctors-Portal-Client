import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <header>
            <div className="hero banner py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='chair' src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-10 shadow-xl'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>

    );
};

export default AppointmentBanner;