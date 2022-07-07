import React from 'react';
import TripRating from './TripRating';

const Trip = ({id,title,imageSrc,numberOfCountries,numberOfDays,rate,currency,minPrice,minPriceOld}) => {
    return (
        <div className='trips__card'>
            <div className='trips__cover'>
                <img className='trips__img' src={imageSrc} alt={title}/>
            </div>
            <div className='trips__data'>
                <h4 className='trips__subtitle'>
                    {numberOfCountries} {numberOfCountries!==1 ? 'Countries' : 'Country'}, {numberOfDays} {numberOfDays!==1 ? 'Days' : 'Day'}
                </h4>
                <h3 className='trips__title'>
                    {title}
                </h3>
                <TripRating key={['trip',id,'rating'].join('_')} tripId={id} maxRate={5} averageRate={rate} />
                <div className='trips__price'>
                    <span className='trips__price-base'>From {currency}{minPrice.toLocaleString('en-US')}</span>
                    <span className='trips__price-old'>{currency}{minPriceOld.toLocaleString('en-US')}</span>
                </div>
            </div>
        </div>
    )
};

export default Trip