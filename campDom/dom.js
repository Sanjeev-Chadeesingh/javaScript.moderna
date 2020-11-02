console.log('Hiyah There!');

let btn = document.querySelector('#v3');
btn.onclick = function() {
    alert('Clicked');
    console.log('I was clicked');
    console.dir(btn);
}

// btn.onmouseenter = function() {
//     alert('mousedOver!!');
//     console.log('I was clicked');
//     console.dir(btn);
//     btn.style.backgroundColor = 'red';
// }

let btn2 = document.querySelector('#v3');
btn2.addEventListener('dblclick', function() {
    alert('Yezzir!');
});

function happy() {
    console.log('I\'m happy!');
};

function sad() {
    console.log('I\'m sad!');
};

let btn3 = document.querySelector('#v4');
btn3.addEventListener('click', happy);
btn3.addEventListener('click', sad);

const colorBtn = document.querySelector('#colorZ');
// colorBtn.addEventListener('click', )
let colors = ['red', 'green', 'purple', 'orange', 'yellow', 'indigo'];
let parentUL = document.querySelector('.colorPicker');
for(let color of colors) {
    let newLI = document.createElement('li');
    newLI.classList.add('box');
    newLI.style.backgroundColor = color;
    newLI.style.listStyle = 'none';
    parentUL.appendChild(newLI);
}

const colorButton = document.querySelector('#colorButton');
colorButton.addEventListener('click', function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = newColor;
});