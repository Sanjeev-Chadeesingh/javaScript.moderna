let h1 = document.querySelector('h1');
h1.innerText = 'Yezzir';
let ul = document.querySelector('ul');

console.log('=====================');
//TEXT MANIPULATION
    //innerText - all text within HTML tags
console.log(ul.innerText);
console.log(document.body.innerText);
    //textContent -shows indents and spacing
let textP = document.querySelector('#main');
console.log('innerText');
console.log(textP.innerText);
console.log('textContent');
console.log(textP.textContent);
    //innerHTML - text + all tags within given element, can pass HTML tags/elements into it in string format
let form = document.querySelector('form');
console.log(form.innerHTML);
console.log(ul.innerHTML);

console.log('=====================');
//value | a | src | href and MORE
    //value, checked and placeholder
let inputs = document.querySelectorAll('input');
console.log(inputs[2].value);
console.log(inputs[2].checked);
console.log(inputs[0].placeholder);
    //a
let a = document.querySelector('a');
console.log(a.href);
a.href = 'https://www.google.com';
    //src
let img = document.querySelector('img');
console.log(img.src);
img.src = 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80';

console.log('=====================');
//GETTING AND SETTING ATTRIBUTES
let range = document.querySelector('input[type="range"]');
console.log(range);
console.log(range.getAttribute('max'));
console.log(range.getAttribute('min'));
// range.setAttribute('min', '-500');
// range.setAttribute('type', 'radio');

console.log('=====================');
//PARENTS, CHILDREN + SIBLINGS
let newLI = document.querySelector('li');
console.dir(newLI);
console.log(newLI.parentElement);
console.log(newLI.parentElement.parentElement);
console.log(newLI.parentElement.parentElement.parentElement);
let newUL = document.querySelector('ul');
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[0].nextElementSibling);

console.log('=====================');
//stock-take => changing multiple elements
let allLI = document.querySelectorAll('li');
for(let i = 0; i < allLI.length; i++) {
    console.log(allLI[i].innerText);
    allLI[i].innerText = 'We are the champions!';
};
for(let li of allLI) {
    li.innerHTML = '<h1>We are the champions BIGTIME</h1>';
}