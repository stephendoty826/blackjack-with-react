import React, {useState, useEffect} from 'react'
import Card from "./Card";

const Hand = ({ handArr, title }) => {

  let [points, setPoints] = useState(0)

  useEffect(() => {
    calculatePoints();
  }, [handArr]);

  function calculatePoints() {
    let tempPoints = handArr.reduce((acc, cur) => {
      return acc + cur.points;
    }, 0);
    setPoints(tempPoints);
  }

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