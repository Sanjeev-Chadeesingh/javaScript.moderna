console.log('Hiyah There!');

const btnOne = document.querySelector('button');
const btnTwo = document.querySelector('#clicker');
btnTwo.addEventListener('click', function() {
    alert('Clicked!');
});

btnTwo.addEventListener('click', function() {
    console.log('Clicked!');
});

btnTwo.addEventListener('mouseover', function() {
    btnTwo.innerText = 'Stop touching the button!';
});

btnTwo.addEventListener('mouseout', function() {
   btnTwo.innerText = 'CLICKER';
});

scrolling
document.addEventListener('scroll', function() {
    console.log('stop scrolling!!');
})



const btn = document.querySelector('button');
btn.addEventListener('mouseover', function() {
    const winHeight = Math.floor(Math.random() * window.innerHeight);
    const winWidth = Math.floor(Math.random() * window.innerWidth);
    btn.style.left = `${winWidth}px`;
    btn.style.top = `${winHeight}px`;
});
btn.addEventListener('click', function() {
    btn.innerText = 'You got it!';
    document.body.style.backgroundColor = 'green';
})

const changeColor = function(e) {
    console.log(e);
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;
    console.log(this);
    console.log(this.style.backgroundColor);
};
const container = document.querySelector('#boxes');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];
for(let color of colors) {
    let box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', changeColor)
};

document.body.addEventListener('keypress', function(e) {
    if(e.key === 'a') {
        alert('A is for assholes');
    } else {
        alert('Every key is for assholes actually');
    }
})

const input = document.querySelector('#username');
input.addEventListener('keydown', function(e) {
    console.log('KEY DOWN');
})

input.addEventListener('keyup', function(e) {
    console.log('KEY up');
})

input.addEventListener('keypress', function(e) {
    console.log('KEY press');
})

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');
addItemInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        if(!this.value) return;
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        this.value = '';
    }
});