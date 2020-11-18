//ALTERING STYLES!!
    //.style only changes+manipulates inline styles
let h1 = document.querySelector('h1');
console.log(h1.style);
h1.style.color = 'blue';
let p = document.querySelector('p');
p.style.color = 'white';
p.style.backgroundColor = 'black';
p.style.fontSize = '40px';
let allLI = document.querySelectorAll('li');
let colors = ['red', 'orange', 'blue', 'green', 'purple', 'coral'];
allLI.forEach((el, i) => {
    let color = colors[i];
    el.style.color = color;
});