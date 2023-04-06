import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PPP');

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='mt-5 grid grid-cols-1 gap-4'>
                        <input type="text" value={date} className="input input-bordered w-full" disabled />
                        <select className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full" />
                        <input type="text" placeholder="Enter Your Phone Number" className="input input-bordered w-full" />
                        <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full" />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;