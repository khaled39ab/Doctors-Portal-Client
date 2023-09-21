import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import AllPaymentRow from './AllPaymentRow';

const AllPayment = () => {

    const { data: allPayment, isLoading } = useQuery('all-payment', () => fetch('http://localhost:4000/all-payment', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Treatment</th>
                        <th>Patient</th>
                        <th>Transaction Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPayment.map((payment, index) => <AllPaymentRow
                            key={payment._id}
                            index={index}
                            payment={payment}
                        ></AllPaymentRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllPayment;