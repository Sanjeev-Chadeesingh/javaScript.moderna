function picker(arr) {
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}




function getCard() {
    let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suit = picker(suits);
    let value = picker(values);
    return {
        value,
        suit
    };
}
console.log(getCard());
// getCard();