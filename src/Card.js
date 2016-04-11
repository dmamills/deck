"use strict";

const SUITS = {
    'S': 'Spades',
    'H': 'Hearts',
    'C': 'Clubs',
    'D': 'Diamonds'
};

class Card {
    
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit.toUpperCase();

        if(!SUITS[this.suit]) {
            throw new Error(`Invalid suit: ${suit}`);
        }
    }

    getRank() { return this.rank; }

    getSuit() { return this.suit; }

    getValue() { return `${this.rank} of ${SUITS[this.suit]}`; }

}

module.exports = Card;
