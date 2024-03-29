import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import DoctorRow from './DoctorRow/DoctorRow';

const ManageDoctors = () => {

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://doctors-portal-server1.vercel.app/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    };

    return (
        <div>
            <h1 className='text-3xl font-extrabold mb-5'>Manage Doctors</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                            ></DoctorRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;