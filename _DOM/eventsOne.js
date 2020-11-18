console.log('Hiyah There!');
let h1 = document.querySelector('.test');


// let btn = document.querySelector('.testTwo');

// btn.addEventListener('click', function() {
//     alert('Clicked!');
//     h1.style.color = 'green';
// });

// btn.addEventListener('mouseover', function() {
//     h1.style.fontSize = '55px';
//     btn.innerText = 'Do not click again!';
// });

// btn.addEventListener('mouseout', function() {
//     btn.innerText = 'Click Me';
// });

const colors = ['red', 'orange', 'green', 'blue', 'purple', 'violet', 'indigo'];
let container = document.querySelector('.boxes');
for(let color of colors) {
    let box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', function(e) {
        console.log(e);
        alert(`You clicked ${box.style.backgroundColor}`);
    })
};

// document.body.addEventListener('keypress', function(e) {
//     console.log(e);
// });

let input = document.querySelector('#username');
input.addEventListener('keydown', function() {
    console.log('Key Down!');
})

input.addEventListener('keypress', function() {
    console.log('Key Press!');
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');
addItemInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        this.value = '';   
    }
})

//form submission with JS ONLY
const creditCard = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');
const form = document.querySelector('#signup-form');
// form.addEventListener('submit', function(e) {
//       //stops the GET
//       e.preventDefault();
//     alert('Submitted the form');
//     //we see value isn't QUITE what we want
//     console.log(creditCard.value);
//     console.log(termsCheckbox.value);
//     console.log(veggieSelect.value);
//     console.log(termsCheckbox.checked);
// });

//form submission JS into object
const formData = {};
// creditCard.addEventListener('input', function(e) {
//     console.log('CC Changed');
//     console.log(e);
//     formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', function(e) {
//     console.log('VEGGIE Changed');
//     console.log(e);
//     formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', function(e) {
//     console.log('CHECKBOX Changed');
//     console.log(e);
//     formData['termsAgreedTo'] = e.target.checked;
// });
for(let input of [creditCard, termsCheckbox, veggieSelect]) {
    input.addEventListener('change', ({target}) => {
        //changed 'change' from 'input'
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData); 
    });
};
