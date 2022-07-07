import React from 'react';
import Trip from './Trip';

const Trips = ({trips}) => {
    return (
        <section className='section container trips'>
            <h2 className='section__title section__title--center'>
                Recently viewed trips
            </h2>
            <div className='trips__container'>
                {trips.map(trip => {
                    return <Trip key={trip.id} {...trip} />
                })}
            </div>
        </section>
    )
};

export default Trips;