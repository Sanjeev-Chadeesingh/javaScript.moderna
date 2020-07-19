function callThreeTimes(func) {
    func();
    func();
    func();
}

function cry() {
console.log('Bohoo, I am so sad!');
};

function rage() {
    console.log('Rawr! I am mad!');
}

// callThreeTimes(cry);

// function repeatNTimes(action, num) {
//     for(let i = 0; i < num; i++) {
//         action();
//     }
// };
// repeatNTimes(cry, 5);

function pickOne(f1, f2) {
    let rand = Math.floor(Math.random() * 2) + 1;
    if(rand < 2) {
        f1();
    } else {
        f2();
    }
};
pickOne(cry, rage);
