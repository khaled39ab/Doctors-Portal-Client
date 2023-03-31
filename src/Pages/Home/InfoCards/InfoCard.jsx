import React from 'react';

const InfoCard = ({ card }) => {

    const { title, img, description, bgClass } = card;

    return (
        <div className={`card px-8 card-side shadow-xl ${bgClass}`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;