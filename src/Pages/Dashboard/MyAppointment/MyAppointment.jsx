import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyAppointment = () => {
    const { user, isLoading } = useContext(AuthContext);
    const [myApp, setMyApp] = useState([]);

    useEffect(() => {
        if (isLoading) {
            return <Loading />
        }
        fetch(`http://localhost:4000/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyApp(data))

    }, [user.email, isLoading]);
    
    /* useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/bookings?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyApp(data))
        }
    }, [user]) */

    return (
        <div>
            <h1>Total Appointment {myApp.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;