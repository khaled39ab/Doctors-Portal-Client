import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const { _id, price, patientName, email, phone, treatment } = booking;

    useEffect(() => {
        fetch('https://doctors-portal-server-two-eta.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price]);


    const handleSubmit = async e => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('[error]', error);
            setCardError(error.message)
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        };
        setSuccess('');


        //confirm payment
        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
        }
        else {
            setCardError('')
            setSuccess(`Congrats! Your payment is successfully done. Transaction Id: ${paymentIntent.id}`)


            //store payment info to database
            const payment = {
                treatment,
                patientName,
                email,
                transactionId: paymentIntent.id,
                phone
            };

            fetch(`https://doctors-portal-server-two-eta.vercel.app/bookings/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Payment Successful. Thank You.')
                })
        }

    }


    return (
        <div className="py-4">
            <form onSubmit={handleSubmit}>
                <CardElement
                    className='input input-bordered'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm my-2" type="submit" disabled={!stripe || !clientSecret}>
                    Pay Now
                </button>
            </form>

            {
                cardError && <p className='text-error'>{cardError}</p>
            }
            {
                success && <p className='text-success font-bold'>{success}</p>
            }
        </div>
    );
};

export default CheckoutForm;