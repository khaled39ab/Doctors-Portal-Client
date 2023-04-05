import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableOption from './AvailableOption';

const AvailableAppointment = ({ selectedDate }) => {

    const [availableAppointment, setAvailableAppointment] = useState([]);

    useEffect(() => {
        fetch('AvailableAppointment.json')
            .then(res => res.json())
            .then(data => setAvailableAppointment(data))
    }, []);


    return (
        <section className='my-12'>
            <div className='text-center text-secondary font-semibold'>
                <p>Available Service on {format(selectedDate, 'PPP')}.</p>;
            </div>
            <div>
                {
                    availableAppointment.map(availableOption => <AvailableOption
                        key={availableOption._id}
                        availableOption={availableOption}
                    ></AvailableOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;