"use strict";

const should = require('should');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const composeDeck = require('../src/composeDeck');

describe('Card', () => {
    it('sets rank + suit', () => {
        let c = new Card('2', 'S');
        c.getRank().should.equal('2');
        c.getSuit().should.equal('S');
        c.getValue().should.equal('2 of Spades');
    });

    it('should throw error with invalid suit', () => {
        (function(){ 
            let card = new Card('2','Q');
        }).should.throw('Invalid suit: Q');
    });
});

describe('Deck', () => {
    
    it('creates a properly sized deck', () => {
        let deck = new Deck();
        deck.length().should.equal(52);
    });

    it('should draw each card', () => {
        let n = 52;
        let deck = new Deck();

        while(n--) {
            let c = deck.draw();
            deck.deck.length.should.equal(n);
        }
    });

    it('should reset', () => {
        let n = 52;
        let deck = new Deck();

        while(n--) {
            let c = deck.draw();
            deck.deck.length.should.equal(n);
        }

        deck.reset();
        deck.deck.length.should.equal(52);
    });

    it('should throw an error when no cards remaining', () => {
        (function(){ 
            let deck = new Deck();
            for(let i = 53; i > 0; i--) deck.draw();
        }).should.throw('No cards in deck');

    });
});

describe('compose deck', () => {
    
    it('should create a deck', () => {
        let r = ['J', 'Q', 'K', 'A'];
        let s = ['S', 'D'];

        let deck = composeDeck(r, s);

        deck.should.be.Array();
        deck.length.should.equal(8);

        deck.forEach(c => {
            c.should.not.be.Array();
            c.should.be.instanceOf(Card);
        });
    });

});
