import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='chair' src={chair} className="lg:w-2/5 rounded-lg shadow-2xl" />
                    <div className='mr-10'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />

                        <p>You picked {format(selectedDate, 'PPP')}.</p>;
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;