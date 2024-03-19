import React from 'react'
import Card from './Card'

const PlayerHand = ({ add }) => {
  return (
    <div>
      <div className="label-container d-flex">
        <label>Player:</label>
        <div className="ps-2" id="player-points">
          0
        </div>
      </div>
      <div className="hand" id="player-hand">
        <Card add={add} />
      </div>
    </div>
  );
};

export default PlayerHand