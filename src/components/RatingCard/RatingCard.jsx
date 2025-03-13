import React from 'react';
import { range } from '../../../util';

function RatingCard() {
  return (
    <div className='rating_card'>
      <form className='form'>
        <div className='rating_card_image'>
          <img src='src/assets/icon-star.svg' alt='orange cartoon star' />
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        {range(1, 6).map((num) => (
          <div className='rating'>{num}</div>
        ))}
      </form>
    </div>
  );
}

export default RatingCard;
