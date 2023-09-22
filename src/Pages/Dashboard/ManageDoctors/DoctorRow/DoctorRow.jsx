import React from 'react';
import toast from 'react-hot-toast';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, email, specialty, img } = doctor;

    const handleDelete = email => {
        fetch(`https://doctors-portal-server1.vercel.app/doctors/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    toast.success(`Doctor ${name} is deleted`)
                }
                refetch();
            })
    };


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>{specialty}</td>
            <th>
                <button onClick={() => handleDelete(email)} className="btn btn-sm btn-outline btn-error">Delete</button>
            </th>
        </tr>
    );
};

export default DoctorRow;