import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selectedDate }) => {
    return (
        <section className='my-12'>
            <div className='text-center text-secondary font-semibold'>
                <p>Available Service on {format(selectedDate, 'PPP')}.</p>;
            </div>
        </section>
    );
};

export default AvailableAppointment;