//COMPUTED STYLES
let li = document.querySelector('li');
let styledLI = getComputedStyle(li);
// console.log(styledLI);
// li.style.color = 'red';
console.log(styledLI.color);
const h1 = document.querySelector('h1');
const styledH1 = getComputedStyle(h1);
console.log(styledH1.color);
console.log(styledH1.fontSize);

//MANIPULATING CLASSES
let todo = document.querySelector('#todos .todo');
// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';
// todo.setAttribute('class', 'done');
// todo.classList.remove('done');
// todo.classList.toggle('done');

//CREATING ELEMENTS
let newh2 = document.createElement('h2');
console.dir(newh2);
newh2.innerText = 'I like animals.';
newh2.classList.add('special');
console.log(newh2);
let section = document.querySelector('section');
section.appendChild(newh2);
//https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
let newImg = document.createElement('img');
console.dir(newImg);
newImg.src='https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';
newImg.style.width = '300px';
document.body.appendChild(newImg);
//https://www.youtube.com/watch?v=It9-FyuNiPE
let newLink = document.createElement('a');
newLink.innerText = 'clickAme';
newLink.href = 'https://www.youtube.com/watch?v=It9-FyuNiPE';
newLink.target = '_blank';
let linkP = document.querySelector('p');
linkP.appendChild(newLink);

//INSERT BEFORE
let parentUL = document.querySelector('ul');
let twoLI = document.createElement('li');
twoLI.classList.add('todo');
twoLI.innerText = 'I am a new LI';
let initLI = document.querySelector('li.todo');
let lastLI = document.querySelectorAll('li.todo')[2];
console.log(lastLI);
parentUL.insertBefore(twoLI, lastLI);
// parentUL.insertBefore(twoLI, initLI);

//INSERT ADJACENT ELEMENT
let thirdLI = document.createElement('li');
thirdLI.innerText = 'Get serious about shit!';
thirdLI.classList.add('todo');
initLI.insertAdjacentElement('beforebegin', thirdLI);

//APPEND and PREPEND
    //allows for multiple elements at once
let eXone = document.createElement('h1');
eXone.innerText = 'I am gonna dance around a bit';
let eXtwo = document.querySelector('h1');
eXtwo.append(eXone, twoLI);

//REMOVING ELEMENTS
    //removeChild();
let removerUL = document.querySelector('section ul');
console.log(removerUL);
let removedEL = removerUL.querySelector('.special');
let deleted = removerUL.removeChild(removedEL);
    //remove();
let eXthree = document.querySelector('h1');
eXthree.remove();