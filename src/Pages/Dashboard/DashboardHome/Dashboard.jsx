import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-4xl text-purple-600 font-bold'>Dashboard</h2>
                <Outlet />

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