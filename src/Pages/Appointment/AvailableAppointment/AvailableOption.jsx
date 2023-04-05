import React from 'react';

const AvailableOption = ({ availableOption }) => {

    const { name, slots } = availableOption;

    return (
        <div className="card mx-10 shadow-xl cursor-pointer">
            <div className="card-body text-center mx-auto">
                <h2 className="card-title text-secondary ">{name}</h2>
            </div>
        </div>
    );
};

export default AvailableOption;