"use strict";
const shuffle = require('knuth-shuffle').knuthShuffle;
const composeDeck = require('./composeDeck');

class Deck {
    
    constructor() {
        this.suits = ['S', 'H', 'D', 'C'];
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.originalDeck = composeDeck(this.ranks, this.suits);
        this.deck = this.originalDeck.slice();
        this.shuffle();
    }

    draw() {
        if(this.deck.length === 0) {
            throw new Error('No cards in deck');
        }

        return this.deck.pop();
    }

    shuffle() {
        this.deck = shuffle(this.deck);
    }

    length() {
        return this.deck.length;
    }

    reset() {
        this.deck = this.originalDeck.slice();
        this.shuffle();
    }

}

module.exports = Deck;
