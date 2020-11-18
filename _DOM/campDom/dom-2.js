// console.log('Hiyah There!');

// let btn = document.querySelectorAll('button');

// function colorRandomizer() {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// };

// function colorize() {
//     this.style.backgroundColor = colorRandomizer();
//     this.style.color = colorRandomizer();
// };

// for(let button of btn) {
//     button.addEventListener('click', colorize);
// };

// let btn = document.querySelector('.clickMe');
// btn.addEventListener('click', function(e) {
//     console.log(e);
// })

// let input = document.querySelector('input');
// input.addEventListener('keypress', function(e) {
//     console.log(e.key);
// })

// const tweetForm = document.querySelector('#tweetForm');

// tweetForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     // const user = document.querySelectorAll('input')[0];
//     // const tweet = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value);
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
  
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username);
//     newTweet.append(bTag);
//     newTweet.append(` -${tweet}`);
//     const tweets = document.querySelector('#tweets');
//     tweets.appendChild(newTweet);
// }


// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');
// input.addEventListener('input', function(e) {
//     //change occurs when you blur the input, meaning leave it with the mouse
//     h1.innerText = input.value;
//     console.log('Yep!');
//     // console.log(e);
// });

//EVENT BUBBLING
    //nested elements will share events, from the inside out
    //event object has method called stopPropagation. This will prevent event bubbling. Stop it at the inner source!
const p = document.querySelector('p');
const btn = document.querySelector('button');

p.addEventListener('click', function(e) {
    alert('You clicked p!');
});

btn.addEventListener('click', function(e) {
    e.stopPropagation();
    alert('You clicked button!');
});

//EVENT DELEGATION
    //put events on parents, access target property of event and set listener to this