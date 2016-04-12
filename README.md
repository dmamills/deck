# deck

[![codecov.io](https://codecov.io/github/dmamills/deck/coverage.svg?branch=master)](https://codecov.io/github/dmamills/deck?branch=master) [![Build Status](https://travis-ci.org/dmamills/deck.svg?branch=master)](https://travis-ci.org/dmamills/deck)

A very simple playing card deck implementation in js

### usage

```javascript
const Deck = require('deck-js').Deck;
const Card = require('deck-js').Card;

let deck = new Deck();

while(deck.length() > 0) {
    let card = deck.draw();
    console.log(card.getValue());
}

deck.reset() //Resets the deck
deck.shuffle() //Shuffles all cards remaining in deck

let card = new Card('2', 'H');

card.getRank() //'2'
card.getSuit() //'H'
card.getValue //'2 of Hearts'
```

### license

u do you, imma do me
