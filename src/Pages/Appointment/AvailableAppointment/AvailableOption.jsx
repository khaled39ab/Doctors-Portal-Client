import React from 'react';

const AvailableOption = ({ availableOption }) => {

    const { name, slots } = availableOption;

    return (
        <div className="card mx-10 shadow-xl cursor-pointer">
            <div className="card-body text-center mx-auto">
                <h2 className="card-title text-secondary ">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available.</p>
                <div className="card-actions mt-4">
                    <label htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableOption;