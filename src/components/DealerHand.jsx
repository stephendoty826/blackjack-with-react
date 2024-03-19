import React from 'react'
import Card from "./Card";

const DealerHand = ({add}) => {
  return (
    <div>
      <div className="label-container d-flex">
        <label>Dealer:</label>
        <div className="ps-2" id="dealer-points">
          ???
        </div>
      </div>
      <div className="hand" id="dealer-hand">
        <Card add={add}/>
      </div>
    </div>
  );
}

export default DealerHand