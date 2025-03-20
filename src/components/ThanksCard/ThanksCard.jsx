import React from 'react';

function ThanksCard() {
  return (
    <div className='thanks_card'>
      <div className='thanks_card_img'>
        <img
          src='src/assets/illustration-thank-you.svg'
          alt='mobile device illustration'
        />
      </div>
      <p className='thanks_card_rating'>You selected 4 out of 5</p>
      <h1 className='thanks_card_thanks'>Thank you!</h1>
      <p className='thanks_card_text'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );

}

export default ThanksCard;
