import React from 'react';

const Trip = ({id,title,imageSrc,numberOfCountries,numberOfDays,rate,currency,minPrice,minPriceOld}) => {
    return (
        <div className='trip__card'>
            <div className='trip__cover'>
                <img className='trip__img' src={imageSrc} alt={title}/>
            </div>
            <div className='trip__data'>
                <h4 className='trip__subtitle'>
                    {numberOfCountries} Countries, {numberOfDays} Days
                </h4>
                <h3 className='trip__title'>
                    {title}
                </h3>
                <div className='trip__rate-box'>
                    <i className='trip__rate-icon'></i>
                    {rate}
                </div>
                <div className='trip__price'>
                    <span className='trip__price-base'>{currency}{minPrice}</span>
                    <span className='trip__price-old'>{currency}{minPriceOld}</span>
                </div>
            </div>
        </div>
    )
};

export default Trip