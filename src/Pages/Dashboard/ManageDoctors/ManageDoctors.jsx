import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from 'react-query';

const ManageDoctors = () => {
    
    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:4000/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    };

    return (
        <div>
            <h1 className='text-3xl font-extrabold'>Manage Doctors {doctors.length}</h1>
        </div>
    );
};

export default ManageDoctors;