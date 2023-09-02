import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllUsers = () => {
    const users = useLoaderData();

    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-5'>Total Users {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr className="hover" key={index}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;