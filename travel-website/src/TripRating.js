import React from "react";

const TripRating = ({maxRate=5,averageRate=3}) => {
    let starsRate = [];
    for(let i=1;i<=maxRate;i++) {
        let difference = i-averageRate;
        if(difference<0.5) {
            starsRate.push(<i className="trips-rate__icon trips-rate__icon-fill fa-solid fa-star"></i>);
        } else if (difference>=0.5 && difference<1) {
            starsRate.push(<i className="trips-rate__icon trips-rate__icon-fill fa-regular fa-star-half-stroke"></i>);
        } else {
            starsRate.push(<i className="trips-rate__icon fa-regular fa-star"></i>);
        }
    }
    return (
        <div className='trips-rate'>
            <div className='trips-rate__box'>
                {starsRate}
            </div>
            <span className='trips-rate__average'>
                {averageRate || 0}
            </span>
        </div>
    );
}

export default TripRating;