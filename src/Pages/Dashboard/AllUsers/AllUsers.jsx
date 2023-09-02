import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from 'react-query';

const AllUsers = () => {
    const { isLoading } = useContext(AuthContext);
    const users = useLoaderData();

    if(isLoading){
        return <Loading />
    };


    const makeAdmin = (email) =>{
        // const {data} = useQuery('user', ()=>{})
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
                                <td><button onClick={()=>makeAdmin(user.email)} className="btn btn-outline btn-info btn-sm">Make Admin</button></td>
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