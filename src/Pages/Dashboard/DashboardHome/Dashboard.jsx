import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-5xl uppercase text-purple-600 font-bold underline underline-offset-8'>Dashboard</h2>

                <div className="flex flex-col w-full border-opacity-50">
                    <div className=' flex flex-col items-center justify-center mt-8'>
                        <h2 className='text-4xl text-blue-500 font-bold'>Hello, {user.displayName}!</h2>
                        <h3 className='text-2xl text-fuchsia-700 font-bold'>Email: <span className='text-2xl text-red-500'>{user.email}</span></h3>
                        <h3 className='text-2xl text-green-500 font-bold'>Welcome to Dashboard</h3>
                    </div>

                    <div className="divider"></div>

                    <div className="grid card bg-base-300 rounded-box place-items-center p-5">
                        <Outlet />
                    </div>
                </div>




            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <li><Link to='/dashboard/my-appointment'>My Appointment</Link></li>
                    <li><Link to='/dashboard/my-review'>My Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;