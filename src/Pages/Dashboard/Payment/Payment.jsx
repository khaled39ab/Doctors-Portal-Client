import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:4000/bookings/${id}`;

    const { data: booking, isLoading } = useQuery(['bookings', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className="text-3xl font-bold py-8 text-green-800 uppercase">Payment for {booking.treatment}</h1>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{booking.treatment}</h2>
                    <p className='font-bold'>Your appointment in <span className='text-orange-500'>{booking.appointmentDate}</span> on <span className='text-orange-500'>{booking.period}</span></p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;