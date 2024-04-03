import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import PlayerHand from "./components/PlayerHand";
import DealerHand from "./components/DealerHand";
import { shuffledDecks } from "./gamelogic";

const App = () => {
  let [playerHandArr, setPlayerHandArr] = useState([]);
  let [dealerHandArr, setDealerHandArr] = useState([]);

  
  const handleDealClick = () => {
    
    let tempPlayerHandArr = [];
    let tempDealerHandArr = [];

    tempPlayerHandArr.push(shuffledDecks.pop());
    tempDealerHandArr.push(shuffledDecks.pop());
    tempPlayerHandArr.push(shuffledDecks.pop());
    tempDealerHandArr.push(shuffledDecks.pop());

    setPlayerHandArr(tempPlayerHandArr);
    setDealerHandArr(tempDealerHandArr);

  };

  console.log(playerHandArr)

  return (
    <div className="container main-container d-flex justify-content-center flex-column">
      <div className="messageContainer">
        <div id="message">Messages will be displayed here</div>
      </div>
      <DealerHand dealerHandArr={dealerHandArr} />

      <br />

      <PlayerHand playerHandArr={playerHandArr} />

      {/* Buttons */}
      <div className="d-flex justify-content-center w-100 pt-3">
        <div className="button-container">
          <Button onClick={handleDealClick} variant="primary">
            Deal
          </Button>
          <Button variant="secondary" className="mx-2">
            Hit
          </Button>
          <Button variant="success">Stand</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
