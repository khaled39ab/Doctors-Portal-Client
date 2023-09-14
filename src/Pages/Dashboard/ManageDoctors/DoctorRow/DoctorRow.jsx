import React from 'react';

const DoctorRow = ({ doctor, index }) => {
    const { name, email, specialty, img } = doctor;

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
                <button className="btn btn-sm btn-outline btn-error">Remove</button>
            </th>
        </tr>
    );
};

export default DoctorRow;