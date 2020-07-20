// |forEach|map|find|filter|every|some|sort|reduce

// forEach - accepts a callback function. Calls the function once per element in the array
// map     - creates a new array with the resuls of calling a callback on every element in the array
// find    - returns the value of the FIRST ELEMENT in the array that satisfies the provided testing function
//filter   - creates a new array with all elements that pass the test implemented by the provided function
//every    - tests whether ALL elements in the array pass the provided function, returns a boolean value
//some     - tests whether SOME elements in the array pass the provided function, returns a boolean value
//sort     - converts items in array to string. need to use: array.sort((compareFunc(a, b) --> { return a - b; }))
//reduce   - executes a REDUCER FUNCTION on each element of the array, resulting in a SINGLE VALUE --> array.reduce((totaler, currentValue) => { return somethingWith totaler/currentValue });
//         - initial value!! after your callback, you can have an initial value for the reduce to start from
let grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
const books = [{
    title: 'Fight Club',
    author: ['Chuck Palahniuk'],
    rating: 5,
    genre: ['fiction', 'transgressive']

},
{
    title: 'Women In Love',
    author: ['DH Lawrence'],
    rating: 5,
    genre: ['fiction', 'edgy']
},
{
    title: 'Cherry',
    author: ['Nico Walker'],
    rating: 3.5,
    genre: ['fiction', 'transgressive']
},
{
    title: 'IT',
    author: ['Stepehen King'],
    rating: 4.5,
    genre: ['fiction', 'edgy']
},
{
    title: 'Shit',
    author: ['Sux'],
    rating: 2,
    genre: ['fiction', 'edgy']
}
];
let exOne = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if(!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book);
    return groupedBooks;
}, {})
console.log(exOne);