import React from 'react';

const generateStars = (maxRate,rate) => {
    let starsRate = [];
    for(let i=1;i<=maxRate;i++) {
        let difference = i-rate;
        if(difference<0.5) {
            starsRate.push(<i className="trips-rate__icon trips-rate__icon-fill fa-solid fa-star"></i>);
        } else if (difference>=0.5 && difference<1) {
            starsRate.push(<i className="trips-rate__icon trips-rate__icon-fill fa-regular fa-star-half-stroke"></i>);
        } else {
            starsRate.push(<i className="trips-rate__icon fa-regular fa-star"></i>);
        }
    }
    return starsRate;
}

const Trip = ({id,title,imageSrc,numberOfCountries,numberOfDays,rate,currency,minPrice,minPriceOld}) => {
    return (
        <div key={"trip"+id} className='trips__card'>
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
                <div className='trips-rate'>
                    <div className='trips-rate__box'>
                        {generateStars(5,rate)}
                    </div>
                    <span className='trips-rate__average'>
                        {rate || 0}
                    </span>
                </div>
                <div className='trips__price'>
                    <span className='trips__price-base'>From {currency}{minPrice.toLocaleString('en-US')}</span>
                    <span className='trips__price-old'>{currency}{minPriceOld.toLocaleString('en-US')}</span>
                </div>
            </div>
        </div>
    )
};

export default Trip