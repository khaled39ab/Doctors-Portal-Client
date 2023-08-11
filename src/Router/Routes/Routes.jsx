import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Login from '../../Pages/Authentication/Login/Login';
import Home from '../../Pages/Home/Home/Home';
import ContactUs from '../../Pages/Home/Contact Us/ContactUs';
import Testimonial from '../../Pages/Home/Testimonial/Testimonial';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import SignUp from '../../Pages/Authentication/SignUp/SignUp';
import RequireAuth from '../RequireAuth/RequireAuth';

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