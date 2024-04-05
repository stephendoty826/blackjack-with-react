// deck building function
function buildDecks(numOfDecks = 1) {
  let cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let suits = ["hearts", "diamonds", "spades", "clubs"];
  let deckArr = []

  suits.forEach((suit) => {
    cardNumbers.forEach((num) => {
      let cardObj = {
        suit,
      };

      switch (num) {
        case 1:
          cardObj.imagePath = `images/ace_of_${suit}.png`;
          cardObj.points = 11
          break;
        case 11:
          cardObj.imagePath = `images/jack_of_${suit}.png`;
          cardObj.points = 10
          break;
        case 12:
          cardObj.imagePath = `images/queen_of_${suit}.png`;
          cardObj.points = 10
          break;
        case 13:
          cardObj.imagePath = `images/king_of_${suit}.png`;
          cardObj.points = 10
          break
        default:
          cardObj.imagePath = `images/${num}_of_${suit}.png`;
          cardObj.points = num
      }

      deckArr.push(cardObj)
    });
  });

  let decks = []

  for(let i = 0; i < numOfDecks; i++){
    decks = decks.concat(deckArr)
  }

  return decks
}

// shuffle function
const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]]
  }
  return deck;
}


export let shuffledDecks = shuffleDeck(buildDecks(3))