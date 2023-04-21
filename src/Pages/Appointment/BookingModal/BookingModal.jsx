/* import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {

    const { name, slots } = treatment;
    const date = format(selectedDate, 'PPP');


    const handleBooking = e => {
        e.preventDefault();

        const form = e.target;

        const patientName = form.name.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            treatment: name,
            appointmentDate: date,
            patientName,
            period: slot,
            phone,
            email
        }
        console.log(booking);

        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='mt-5 grid grid-cols-1 gap-4'>
                        <input value={date} className="input input-bordered w-full" disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input name='name' type="text" placeholder="Enter Your Name" className="input input-bordered w-full" />
                        <input name='phone' type="number" placeholder="Enter Your Phone Number" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Enter Your Email" className="input input-bordered w-full" />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal; */