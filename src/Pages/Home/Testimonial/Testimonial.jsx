import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Reviews from './Reviews';

const Testimonial = () => {

    const reviewsData = [

        {
            id: 1,
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Winson Herry',
            location: 'California',
            img: people1
        },
        {
            id: 2,
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Winson Herry',
            location: 'California',
            img: people2
        },
        {
            id: 3,
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Winson Herry',
            location: 'California',
            img: people3
        },

    ];


    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary text-xl font-bold'>Testimonial</h4>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="quote" />
                </figure>
            </div>
            <div>
                {
                    reviewsData.map(review => <Reviews
                        key={review.id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;