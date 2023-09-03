import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {
    const { isLoading } = useContext(AuthContext);
    const users = useLoaderData();
    const { refetch } = useQuery({
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:4000/user/admin/:email`)
            const data = await res.json()
            return data;
        }
    });

    if (isLoading) {
        return <Loading />
    };


    const makeAdmin = (email) => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success("Successfully made an admin")
            })
    }


    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-lime-700 mb-5'>Total Users {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr className="hover" key={index}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role !== 'admin' && <button onClick={() => makeAdmin(user.email)} className="btn btn-outline btn-info btn-sm">Make Admin</button>}</td>
                                <td><button className="btn btn-outline btn-error btn-sm">Remove Admin</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;