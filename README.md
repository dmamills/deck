# deck

A very simple playing card deck implementation in js

### usage

```
const Deck = require('deck-js');

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
