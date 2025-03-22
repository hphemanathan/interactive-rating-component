import React from 'react';
import { range } from '../../../util';
import SubmitButton from '../SubmitButton/SubmitButton';

function RatingCard({setIsSubmitted, setRating}) {
  return (
    <div className='rating_card'>
      <form onSubmit={(event) => {
        event.preventDefault()
        setIsSubmitted(true);
      }} className='form'>
        <div className='rating_card_image'>
          <img src='src/assets/icon-star.svg' alt='orange cartoon star' />
        </div>
        <h1>How did we do?</h1>
        <p className='rating_card_text'>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className='rating_card_ratings'>
          {range(1, 6).map((num) => (
            <button  key = {num} className='rating_card_rating'
            onClick={event => {
              event.preventDefault();
              const nextRating = event.target.textContent;
              console.log(nextRating);
              setRating(nextRating)
              console.log(nextRating);
               

            }}
            >{num}</button>
          ))}
        </div>
        <SubmitButton/>
      </form>
    </div>
  );
}

export default RatingCard;
