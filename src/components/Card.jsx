import React from 'react'

const Card = ({ cardObj }) => {

  return (
    <div>
      <img src={cardObj.imagePath} className="card" alt="" />
    </div>
  );
}

export default Card