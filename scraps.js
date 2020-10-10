//go through the forEach map filter find some every reduce HELLSCAPE that is your greatest perceived threat.  Then go through everything else, and make it into something regarding wordpress tomorrow night

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const strs = ['cat', 'dog', 'frog', 'lizard', 'hawk', 'dove'];

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
},
{
    title: 'A Gentleman In Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
}];

const goodReview = books.filter((el) => {
    return el.authors.length < 2;
});

console.log(goodReview);