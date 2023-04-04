import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selectedDate }) => {
    return (
        <div>
            <div>
                <p>You picked {format(selectedDate, 'PPP')}.</p>;
            </div>
        </div>
    );
};

export default AvailableAppointment;