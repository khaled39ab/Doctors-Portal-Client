/* import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner2 = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <header>
            <div className="hero">
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
            <p className='text-center mt-8 text-blue-600'>You picked {format(selectedDate, 'PPP')}.</p>
        </header>
    );
};

export default AppointmentBanner2; */