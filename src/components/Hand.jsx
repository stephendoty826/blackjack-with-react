import React from 'react'
import Card from "./Card";

const Hand = ({ handArr, title, points }) => {

  return (
    <div>
      <div className="label-container d-flex">
        <label>{title}:</label>
        <div className="ps-2">{points}</div>
      </div>
      <div className="hand">
        {handArr.map((cardObj, idx) => {
          return <Card cardObj={cardObj} key={title + idx} />;
        })}
      </div>
    </div>
  );
};

export default Hand