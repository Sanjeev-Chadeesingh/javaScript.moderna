// https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80

// https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80

//https://www.google.com
////////////////////////////////////////////////

//classList
let mainHeader = document.querySelector('.mainHeader');
// mainHeader.classList.add('important');
//appendChild+append+prepend()
let newH1 = document.createElement('h2');
newH1.innerText = 'Manipulator!';
mainHeader.appendChild(newH1);
let newH3One = document.createElement('h3');
let newH3Two = document.createElement('h3');
let newH3Three = document.createElement('h3');
newH3One.innerText = 'Yes';
newH3Two.innerText = 'No';
newH3Three.innerText = 'Maybe';
mainHeader.append(newH3One, newH3Two, newH3Three);
//get+setAttribute
let img = document.querySelector('img');
console.log(img.getAttribute('height'));
mainHeader.removeChild(newH3One);
img.setAttribute('height', '500px');
img.setAttribute('width', '500px');
mainHeader.prepend(newH3One);
//insertBefore+AdjacentElement
let todoList = document.querySelector('.todoList');
let firstTodo = document.querySelector('.todo');
console.log(firstTodo);
let newTodo = document.createElement('li');
newTodo.classList.add('todo');
newTodo.innerText = 'I am a new to do!';
todoList.insertBefore(newTodo, firstTodo);
console.log(todoList.children);
console.log(newTodo.parentElement);
let allChildren = document.body.children;
mainHeader.remove();
