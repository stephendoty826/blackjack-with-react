import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Hand from "./components/Hand"
import { shuffledDecks, calculatePoints, checkForBust } from "./gamelogic";

const App = () => {
  let [message, setMessage] = useState("Messages will be displayed here");
  let [playerHandArr, setPlayerHandArr] = useState([])
  let [dealerHandArr, setDealerHandArr] = useState([])
  let [playerPoints, setPlayerPoints] = useState(0)
  let [dealerPoints, setDealerPoints] = useState(0)

  useEffect(() => {
    calculatePoints(playerHandArr, setPlayerPoints);
    calculatePoints(dealerHandArr, setDealerPoints);
  }, [playerHandArr, dealerHandArr])

  useEffect(() => {
  checkForBust(playerPoints, dealerPoints, setMessage);
}, [playerPoints, dealerPoints])
  
  const handleDealClick = () => {

    // first card goes to the player then next the dealer and so on (per the rules of blackjack)
    let firstPlayerCard = shuffledDecks.pop();
    let firstDealerCard = shuffledDecks.pop();
    let secondPlayerCard = shuffledDecks.pop();
    let secondDealerCard = shuffledDecks.pop();

    setPlayerHandArr([firstPlayerCard, secondPlayerCard])
    setDealerHandArr([firstDealerCard, secondDealerCard])

  };

  function handleHitClick(){
    let tempPlayerHandArr = [...playerHandArr]

    tempPlayerHandArr.push(shuffledDecks.pop())

    setPlayerHandArr(tempPlayerHandArr)

  }

  return (
    <div className="container main-container d-flex justify-content-center flex-column">
      <div className="messageContainer">
        <div id="message">{message}</div>
      </div>
      {/* Dealer Hand */}
      <Hand
        handArr={dealerHandArr}
        title="Dealer"
        points={dealerPoints}
        setPoints={setDealerPoints}
      />

      <br />
      {/* Player Hand */}
      <Hand
        handArr={playerHandArr}
        title="Player"
        points={playerPoints}
        setPoints={setPlayerPoints}
      />

      {/* Buttons */}
      <div className="d-flex justify-content-center w-100 pt-3">
        <div className="button-container">
          <Button onClick={handleDealClick} variant="primary">
            Deal
          </Button>
          <Button onClick={handleHitClick} variant="secondary" className="mx-2">
            Hit
          </Button>
          <Button variant="success">Stand</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
