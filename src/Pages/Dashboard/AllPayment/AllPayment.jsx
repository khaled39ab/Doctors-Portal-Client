import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AllPayment = () => {

    const { data: allPayment, isLoading } = useQuery('doctors', () => fetch('https://doctors-portal-server-two-eta.vercel.app/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading />
    }
    
    return (
        <div>
            
        </div>
    );
};

export default AllPayment;