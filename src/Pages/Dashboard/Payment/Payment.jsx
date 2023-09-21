import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_stripePK);

const Payment = () => {
    const { id } = useParams();
    const url = `https://doctors-portal-server-two-eta.vercel.app/bookings/${id}`;

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

        <div className="card  bg-base-100 shadow-xl">

            <div className="card-body ">
                <h1 className="text-2xl font-bold card-title">Payment for: <span className='text-pink-600'>{booking.treatment}</span></h1>
                <p className='font-bold'>Your appointment on <span className='text-orange-500'>{booking.appointmentDate}</span> at <span className='text-orange-500'>{booking.period}</span></p>
                <p className='font-bold text-xl text-green-400'>Please Pay: ${booking.price}</p>


            </div>
            <div className="px-10">
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;