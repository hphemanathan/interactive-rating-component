import React from 'react';
import RatingCard from '../RatingCard/RatingCard';
import ThanksCard from '../ThanksCard/ThanksCard';

function Card() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  return (
    <div className='card__wrapper'>
      {isSubmitted ? <ThanksCard /> : <RatingCard />}
      {/*  */}
    </div>
  );
}

export default Card;
