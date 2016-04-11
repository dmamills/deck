"use strict";
const Card = require('./Card');

const composeDeck = (ranks, suits) => {
    return ranks.reduce((acc, rank) => {
        return acc.concat(suits.map(suit => {
            return new Card(rank, suit);
        }));
    }, []);
};

module.exports = composeDeck;
