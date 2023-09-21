import { format } from 'date-fns';
import React, { useState } from 'react';
import AvailableOption from './AvailableOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';

const AvailableAppointment = ({ selectedDate }) => {

    // const [availableAppointment, setAvailableAppointment] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PPP')

    const { data: availableAppointment = [], refetch } = useQuery({
        queryKey: ['availableAppointment', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-two-eta.vercel.app/availableAppointment?date=${date}`)
            const data = await res.json()
            return data;
        }
    });

    /* useEffect(() => {
        fetch('AvailableAppointment.json')
        // fetch('https://doctors-portal-server-two-eta.vercel.app/availableAppointment')
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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;