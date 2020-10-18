// function makeDeck() {
//     const deck = [];
//     const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
//     const values = '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A';
//     for(let value of values.split(',')) {
//         for(let suit of suits) {
//             deck.push({value,
//             suit})
//         }
//     }
//     return deck;
// };

// function drawCard(deck) {
//     return deck.pop()
// }

// const myDeck = makeDeck();
// const cardOne = drawCard(myDeck);
// console.log(myDeck);
// console.log(cardOne);
const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A',
    initializeDeck: function() {
        const {suits, values, deck} = this;
        for(let value of values.split(',')) {
            for(let suit of suits) {
                deck.push({value,
                suit})
            }
        }
    },
    drawCard: function() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple: function(numCards) {
        const cards = [];
        for(let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle: function() {
        const {deck} = this;
        for(let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
};
myDeck.initializeDeck();
console.log(myDeck);
myDeck.shuffle();
console.log(myDeck);
myDeck.drawCard();
myDeck.drawCard();
myDeck.drawCard();
myDeck.drawCard();
myDeck.drawCard();
console.log(myDeck.drawnCards);
console.log(myDeck);
myDeck.drawMultiple(4);
console.log(myDeck);
console.log(myDeck.drawnCards);
console.log(myDeck);