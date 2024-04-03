import React from 'react'
import Card from './Card'

const PlayerHand = ({ playerHandArr }) => {
  return (
    <div>
      <div className="label-container d-flex">
        <label>Player:</label>
        <div className="ps-2">0</div>
      </div>
      <div className="hand">
        {playerHandArr.map((cardObj) => {
          return <Card cardObj={cardObj} />;
        })}
      </div>
    </div>
  );
};

export default PlayerHand