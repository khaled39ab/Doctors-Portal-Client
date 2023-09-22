import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const MyAppointment = () => {
    const { user, isLoading, logOut } = useContext(AuthContext);
    const [myApp, setMyApp] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading) {
            return <Loading />
        }
        fetch(`https://doctors-portal-server1.vercel.app/bookings?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                setMyApp(data)
            })

    }, [user.email, isLoading, logOut, navigate]);

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-5'>Total Appointment: {myApp.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myApp.map((app, index) => <tr className="hover" key={index}>
                                <th>{index + 1}</th>
                                <td>{app.treatment}</td>
                                <td>{app.appointmentDate}</td>
                                <td>{app.period}</td>
                                <td>
                                    {
                                        app.paid ?
                                            <div className='text-success text-xl font-semibold'>Paid <span className='text-xs text-yellow-500'>Transaction Id is- </span>
                                                <br />
                                                <span className="badge badge-ghost badge-sm "> {app.transactionId}</span>
                                            </div> :
                                            <Link to={`/dashboard/payment/${app._id}`} className='btn btn-info btn-sm text-white'>Pay Now</Link>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;