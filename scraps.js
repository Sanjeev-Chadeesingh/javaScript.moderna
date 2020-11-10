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
// const myDeck = {
//     deck: [],
//     drawnCards: [],
//     suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//     values: '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A',
//     initializeDeck: function() {
//         const {suits, values, deck} = this;
//         for(let value of values.split(',')) {
//             for(let suit of suits) {
//                 deck.push({value,
//                 suit})
//             }
//         }
//     },
//     drawCard: function() {
//         const card = this.deck.pop();
//         this.drawnCards.push(card);
//         return card;
//     },
//     drawMultiple: function(numCards) {
//         const cards = [];
//         for(let i = 0; i < numCards; i++) {
//             cards.push(this.drawCard());
//         }
//         return cards;
//     },
//     shuffle: function() {
//         const {deck} = this;
//         for(let i = deck.length - 1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1));
//             [deck[i], deck[j]] = [deck[j], deck[i]];
//         }
//     }
// };

// const makeADeck = () => {
//     return {
//         deck: [],
//         drawnCards: [],
//         suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//         values: '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A',
//         initializeDeck: function() {
//             const {suits, values, deck} = this;
//             for(let value of values.split(',')) {
//                 for(let suit of suits) {
//                     deck.push({value,
//                     suit})
//                 }
//             }
//         },
//         drawCard: function() {
//             const card = this.deck.pop();
//             this.drawnCards.push(card);
//             return card;
//         },
//         drawMultiple: function(numCards) {
//             const cards = [];
//             for(let i = 0; i < numCards; i++) {
//                 cards.push(this.drawCard());
//             }
//             return cards;
//         },
//         shuffle: function() {
//             const {deck} = this;
//             for(let i = deck.length - 1; i > 0; i--) {
//                 let j = Math.floor(Math.random() * (i + 1));
//                 [deck[i], deck[j]] = [deck[j], deck[i]];
//             }
//         }
//     }
// };

// const myDeck = makeADeck();
// console.log(myDeck);

// myDeck.initializeDeck();
// console.log(myDeck);
// myDeck.shuffle();
// console.log(myDeck);
// myDeck.drawCard();
// myDeck.drawCard();
// myDeck.drawCard();
// myDeck.drawCard();
// myDeck.drawCard();
// console.log(myDeck.drawnCards);
// console.log(myDeck);
// myDeck.drawMultiple(4);
// console.log(myDeck);
// console.log(myDeck.drawnCards);
// console.log(myDeck);

console.log('Hiyah There!');
// let str = ['a', 'b', 'c', 'd', 'e'];
// let nums = [1, 2, 3, 4, 5, 6, 7];
// for(let i = 0; i < nums.length; i++) {
//     console.log(`I am number ${i}`);
// }

// for(let num of nums) {
//     console.log(`I am number ${num}`);
// }

const object = {
    firstName: 'Sanjeev',
    lastName: 'Chadeesingh',
    age: 36
};

for(property in object) {
    let text = '';
    text += object[property];
    console.log(text);
}

let count = 0;
while(count < 10) {
    console.log(count);
    count++
};
