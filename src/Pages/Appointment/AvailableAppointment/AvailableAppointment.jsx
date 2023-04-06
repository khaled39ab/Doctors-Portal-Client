import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableOption from './AvailableOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {

    const [availableAppointment, setAvailableAppointment] = useState([]);

    useEffect(() => {
        fetch('AvailableAppointment.json')
            .then(res => res.json())
            .then(data => setAvailableAppointment(data))
    }, []);


    return (
        <section className='my-12'>
            <div className='text-center'>
                <p className='text-secondary font-semibold text-2xl'>Available Service on {format(selectedDate, 'PPP')}.</p>
                <p className='text-accent font-medium opacity-60 text-xl mt-3'>Please select a service.</p>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {
                    availableAppointment.map(availableOption => <AvailableOption
                        key={availableOption._id}
                        availableOption={availableOption}
                    ></AvailableOption>)
                }
            </div>
            <BookingModal />
        </section>
    );
};

export default AvailableAppointment;