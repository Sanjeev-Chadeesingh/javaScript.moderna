console.log('Hiyah There!');

let btn = document.querySelector('#v2');
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
colorBtn.addEventListener('click', )