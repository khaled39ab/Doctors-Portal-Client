import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section className='mt-32' style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='doctor' src={doctor} className="-mt-32 hidden md:block md:w-3/5 lg:w-1/2 rounded-lg " />
                    <div>
                        <h4 className='text-primary text-xl font-bold'>Appointment</h4>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;