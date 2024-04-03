import React, {useState} from 'react'
import Card from "./Card";

const DealerHand = ({ dealerHandArr }) => {

  return (
    <div>
      <div className="label-container d-flex">
        <label>Dealer:</label>
        <div className="ps-2">???</div>
      </div>
      <div className="hand">
        {dealerHandArr.map(cardObj => {
          return <Card cardObj={cardObj} />
        })}
      </div>
    </div>
  );
};

export default DealerHand