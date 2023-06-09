import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';
import ContactUs from '../Contact Us/ContactUs';

const Home = () => {
    return (
        <div className='mx-10 px-10'>
            <Banner />
            <InfoCards />
            <Services />
            <Treatment />
            <MakeAppointment />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default Home;