import React from 'react';
import RatingCard from '../RatingCard/RatingCard';
import ThanksCard from '../ThanksCard/ThanksCard';

function Card() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [rating, setRating] = React.useState("");
  return (
    <div className='card__wrapper'>
      {isSubmitted ? <ThanksCard rating={rating} /> : <RatingCard  setRating={setRating} setIsSubmitted={setIsSubmitted}/>}
      {/*  */}
    </div>
  );
}

export default Card;
