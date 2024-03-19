import React from 'react'

const Card = ({add}) => {

  console.log(add(3, 5))
  return (
    <div>
      <img src="images/2_of_clubs.png" className="card" alt="" />
    </div>
  );
}

export default Card