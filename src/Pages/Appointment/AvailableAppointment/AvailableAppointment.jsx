import { format } from 'date-fns';
import React, { useState } from 'react';
import AvailableOption from './AvailableOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';

const AvailableAppointment = ({ selectedDate }) => {

    // const [availableAppointment, setAvailableAppointment] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const {data : availableAppointment = []} = useQuery({
        queryKey: ['availableAppointment'],
        // queryFn: () => fetch('http://localhost:4000/availableAppointment')
        // .then(res => res.json())
        queryFn: async() => {
            const res = await fetch('http://localhost:4000/availableAppointment')
            const data = await res.json()
            return data;
        } 
    });

    /* useEffect(() => {
        fetch('http://localhost:4000/availableAppointment')
            .then(res => res.json())
            .then(data => setAvailableAppointment(data))
    }, []); */


    return (
        <section className='my-12'>
            <div className='text-center'>
                <p className='text-secondary font-semibold text-2xl'>Available Service on {format(selectedDate, 'PPP')}.</p>
                <p className='text-accent font-medium opacity-60 text-xl mt-3'>Please select a service.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {
                    availableAppointment.map(availableTime => <AvailableOption
                        key={availableTime._id}
                        availableTime={availableTime}
                        setTreatment={setTreatment}
                    ></AvailableOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;