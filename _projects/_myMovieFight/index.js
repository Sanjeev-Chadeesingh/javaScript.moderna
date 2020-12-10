console.log('Hiyah There!');
const header = document.querySelector('.header');
let title = document.querySelector('title');
let btnOne = document.querySelector('.btnOne');
let btnTwo = document.querySelector('.btnTwo');
let box = document.querySelector('.box');
let deleteBtn = document.querySelector('.deleteBtn');
let boxOne = document.querySelector('.boxOne');
let boxTwo = document.querySelector('.boxTwo');
let boxThree = document.querySelector('.boxThree');
let deleteBox = document.querySelector('.deleteBox');

btnOne.addEventListener('click', e => {
    header.removeChild(boxOne);
    let newBtn = document.createElement('button');
    newBtn.innerText = 'CLICK';
    header.appendChild(newBtn);
    newBtn.addEventListener('click', e => {
        header.removeChild(newBtn);
        boxTwo.insertAdjacentElement('beforebegin', boxOne);
    });
    
});

deleteBtn.addEventListener('click', e => {
    // boxOne.classList.remove('hidden');
    // deleteBox.classList.add('hidden'); 
});

