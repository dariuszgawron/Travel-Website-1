import React from 'react';
import Trip from './Trip';

const Trips = ({trips}) => {
    return (
        <section className='section trip'>
            <h2 className='section__title'>
                Recently viewed trips
            </h2>
            <div className='trip__container'>
                {trips.map(trip => {
                    return <Trip key={trip.id} {...trip} />
                })}
            </div>
        </section>
    )
};

export default Trips;