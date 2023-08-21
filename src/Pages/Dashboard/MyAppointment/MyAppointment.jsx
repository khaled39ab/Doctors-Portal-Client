import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const [myApp, setMyApp] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/bookings?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyApp(data))
        }
    }, [user])

    return (
        <div>
            <h1>My Appointment {myApp.length}</h1>
        </div>
    );
};

export default MyAppointment;