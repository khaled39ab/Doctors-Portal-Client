import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Login from '../../Pages/Authentication/Login/Login';
import Home from '../../Pages/Home/Home/Home';
import ContactUs from '../../Pages/Home/Contact Us/ContactUs';
import Testimonial from '../../Pages/Home/Testimonial/Testimonial';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import SignUp from '../../Pages/Authentication/SignUp/SignUp';
import RequireAuth from '../RequireAuth/RequireAuth';
import Dashboard from '../../Pages/Dashboard/DashboardHome/Dashboard';
import MyAppointment from '../../Pages/Dashboard/MyAppointment/MyAppointment';
import MyReview from '../../Pages/Dashboard/MyReview/MyReview';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import RequireAdmin from '../RequireAdmin/RequireAdmin';
import AddDoctor from '../../Pages/Dashboard/AddDoctor/AddDoctor';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: 'reviews',
                element: <Testimonial />
            },
            {
                path: '/appointment',
                element: <RequireAuth><Appointment /></RequireAuth>
            },
            {
                path: '/dashboard',
                element: <RequireAuth><Dashboard /></RequireAuth>,
                children: [
                    {
                        path: '/dashboard/:my-appointment',
                        element: <MyAppointment />,
                    },
                    {
                        path: '/dashboard/:my-review',
                        element: <MyReview />
                    },
                    {
                        path: '/dashboard/:users',
                        element: <RequireAdmin><AllUsers /></RequireAdmin>,
                        loader: () => fetch('http://localhost:4000/users', {
                            method: 'GET',
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('accessToken')}`
                            }
                        })
                    },
                    {
                        path: '/dashboard/add-doctor',
                        element: <RequireAdmin><AddDoctor /></RequireAdmin>,
                        loader: () => fetch('http://localhost:4000/specialty')
                    },
                ]
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            }
        ]
    }
]);

export default router;