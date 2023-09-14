import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from 'react-query';
import DoctorRow from './DoctorRow/DoctorRow';

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
            <h1 className='text-3xl font-extrabold mb-5'>Manage Doctors {doctors.length}</h1>

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
                            ></DoctorRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;