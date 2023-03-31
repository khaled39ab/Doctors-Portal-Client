import React from 'react';

const Service = ({service}) => {

    const {title, description, img} = service;

    return (
        <div className="card glass pt-8 ">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;