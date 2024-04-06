import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Hand from "./components/Hand"
import { shuffledDecks } from "./gamelogic";

const App = () => {
  let [playerHandArr, setPlayerHandArr] = useState([])
  let [dealerHandArr, setDealerHandArr] = useState([])
  
  const handleDealClick = () => {

    // first card goes to the player then next the dealer and so on (per the rules of blackjack)
    let firstPlayerCard = shuffledDecks.pop();
    let firstDealerCard = shuffledDecks.pop();
    let secondPlayerCard = shuffledDecks.pop();
    let secondDealerCard = shuffledDecks.pop();

    setPlayerHandArr([firstPlayerCard, secondPlayerCard])
    setDealerHandArr([firstDealerCard, secondDealerCard])

  };

  return (
    <div className="container main-container d-flex justify-content-center flex-column">
      <div className="messageContainer">
        <div id="message">Messages will be displayed here</div>
      </div>
      {/* Dealer Hand */}
      <Hand handArr={dealerHandArr} title="Dealer" />

      <br />
      {/* Player Hand */}
      <Hand handArr={playerHandArr} title="Player" />

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
