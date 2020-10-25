//DEMO
// const myBtn = document.querySelector('.myBtn');
// console.dir(myBtn);
// console.log(myBtn.value);
// myBtn.value = 'My Button';
// console.log(myBtn.value);
// myBtn.addEventListener('mouseover', function() {
//     alert('Hiyah There!');
// })

//BASICS
// console.log(document);
// console.dir(document);
// console.log(document.images);
// console.log(document.all);

//SELECTING
    //getElementById
const img = document.getElementById('bird-photo');
console.dir(img);
const p1 = document.getElementById('main');
console.dir(p1);
    //getElementsByTagName
        //returns iterable, array-like collection
const inputs = document.getElementsByTagName('input');
console.dir(inputs);
for(let input of inputs) {
    console.log(input);
};
    //can spread into an actual array
let inputArr = [...inputs];
console.log(inputArr);
    //iterating over form values and logging to console
for(let input of inputs) {
    console.log(input.value);
};
    //getElementsByClassName
        //returns iterable, array-like collection
const header = document.getElementsByClassName('header');
console.log(header);
const special = document.getElementsByClassName('special');
console.log(special);
const ul = document.getElementsByTagName('ul')[0];
console.log(ul.getElementsByClassName('special'));
    //querySelector
let h1 = document.querySelector('h1');
console.log(h1);
let p = document.querySelector('p');
console.log(p);
let newImgDec = document.querySelector('#bird-photo');
console.log(newImgDec);
        //CSS nested selecting
let secondSpecial = document.querySelector('section ul li.special');
console.log(secondSpecial);
        //CSS attribute selecting
let attributeSelector = document.querySelector('input[type="password"]');
console.log(attributeSelector);
    //querySelectorAll
let newInput = document.querySelectorAll('input');
console.log(newInput);
let newLI = document.querySelectorAll('li');
console.log(newLI);
let specialZ = document.querySelectorAll('.special');
console.log(specialZ);