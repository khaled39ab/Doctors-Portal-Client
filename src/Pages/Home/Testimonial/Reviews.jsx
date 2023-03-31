import React from 'react';

const Reviews = ({ review }) => {

    const { reviews, name, location, img } = review;

    return (
        <div className="card bg-base-100 shadow-2xl">
            <div className="card-body">
                <p>{reviews}</p>
                <div className="flex justify-evenly mt-6">
                    <div className="avatar">
                        <div className="w-10 md:w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='person'/>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-xl font-bold'>{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;