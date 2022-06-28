import React from 'react';

const Trip = ({id,title,imageSrc,numberOfCountries,numberOfDays,rate,currency,minPrice,minPriceOld}) => {
    return (
        <div className='trips__card'>
            <div className='trips__cover'>
                <img className='trips__img' src={imageSrc} alt={title}/>
            </div>
            <div className='trips__data'>
                <h4 className='trips__subtitle'>
                    {numberOfCountries} Countries, {numberOfDays} Days
                </h4>
                <h3 className='trips__title'>
                    {title}
                </h3>
                <div className='trips__rate-box'>
                    <i className='trips__rate-icon'></i>
                    {rate}
                </div>
                <div className='trips__price'>
                    <span className='trips__price-base'>{currency}{minPrice}</span>
                    <span className='trips__price-old'>{currency}{minPriceOld}</span>
                </div>
            </div>
        </div>
    )
};

export default Trip