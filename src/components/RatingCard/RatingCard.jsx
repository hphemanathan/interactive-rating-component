import React from 'react';
import { range } from '../../../util';
import SubmitButton from '../SubmitButton/SubmitButton';

function RatingCard() {
  return (
    <div className='rating_card'>
      <form onSubmit={() => console.log("checking")} className='form'>
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
            <button className='rating_card_rating'>{num}</button>
          ))}
        </div>
        <SubmitButton/>
      </form>
    </div>
  );
}

export default RatingCard;
